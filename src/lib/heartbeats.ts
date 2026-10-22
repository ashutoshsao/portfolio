// Tradio and Valor have no URL for Upptime to check (a Telegram bot and an agent, both long-polling), so each
// pings Healthchecks.io every 5 minutes and Healthchecks marks it down when the pings stop. Their rows come from
// Healthchecks' status changes ("flips"), read with a read-only API key per project. The keys are server-side
// env vars (no NEXT_PUBLIC_), so they never reach the browser. The rows are shaped like Upptime's sites.
import { status } from '@/data/site'

export type Site = {
  name: string
  slug: string
  url: string
  caption?: string // shown instead of the URL's host (heartbeat rows have no URL)
  status: 'up' | 'down' | 'degraded'
  dailyMinutesDown: Record<string, number>
}

type Check = { slug: string; status: 'new' | 'up' | 'grace' | 'down' | 'paused'; unique_key: string }
type Flip = { timestamp: string; up: 0 | 1 }

const API = 'https://healthchecks.io/api/v3'
const DAY_MS = 86_400_000

async function get<T>(path: string, key: string): Promise<T> {
  const res = await fetch(`${API}/${path}`, { headers: { 'X-Api-Key': key }, next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`Healthchecks ${path}: ${res.status}`)
  return (await res.json()) as T
}

// Minutes down per UTC day (Upptime's keys) between `from` and `now`. Healthchecks counts a check down only after
// its grace time, so this can be a few minutes under the real outage.
export function minutesDown(flips: Flip[], current: Check['status'], from: number, now: number): Record<string, number> {
  const changes = flips.map((f) => ({ t: Date.parse(f.timestamp), up: f.up === 1 })).sort((a, b) => a.t - b.t)
  const out: Record<string, number> = {}
  const add = (start: number, end: number) => {
    for (let t = start; t < end; ) {
      const dayEnd = (Math.floor(t / DAY_MS) + 1) * DAY_MS
      const until = Math.min(end, dayEnd)
      const date = new Date(t).toISOString().slice(0, 10)
      out[date] = Math.round((out[date] ?? 0) + (until - t) / 60_000)
      t = until
    }
  }
  // Before the first change the state was its opposite; with no changes, today's status held throughout.
  let down = changes.length ? changes[0].up : current === 'down'
  let since = from
  for (const c of changes) {
    if (c.t < from) {
      down = !c.up
      continue
    }
    if (down) add(since, c.t)
    down = !c.up
    since = c.t
  }
  if (down) add(since, now)
  return out
}

async function one(beat: (typeof status.heartbeats)[number], now: number): Promise<Site | null> {
  const key = process.env[beat.keyEnv]
  if (!key) return null
  const { checks } = await get<{ checks: Check[] }>('checks/', key)
  const check = checks.find((c) => c.slug === beat.slug)
  if (!check || check.status === 'new') return null // not pinged yet: the row appears with the first ping
  const from = Date.parse(`${status.sinceBySlug[beat.slug] ?? status.since}T00:00:00Z`)
  const flips = await get<Flip[]>(`checks/${check.unique_key}/flips/?start=${Math.floor(from / 1000)}`, key)
  return {
    name: beat.name,
    slug: beat.slug,
    url: 'https://healthchecks.io',
    caption: beat.caption,
    status: check.status === 'down' ? 'down' : 'up',
    dailyMinutesDown: minutesDown(flips, check.status, from, now),
  }
}

// A row that can't be read is left out rather than shown as up or down.
export async function heartbeats(): Promise<Site[]> {
  const now = Date.now()
  const rows = await Promise.all(status.heartbeats.map((b) => one(b, now).catch(() => null)))
  return rows.filter((r): r is Site => r !== null)
}
