import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Signature from '@/components/Signature'
import ThemeToggle from '@/components/ThemeToggle'
import { status } from '@/data/site'

export const metadata: Metadata = {
  title: 'Status - Ashutosh Sao',
  description: 'Uptime of my deployed apps over the last 90 days, checked every 5 minutes.',
}

// Upptime rewrites summary.json only when a status changes, so 5 minutes is fresh enough.
export const revalidate = 300

type Site = {
  name: string
  slug: string
  url: string
  status: 'up' | 'down' | 'degraded'
  dailyMinutesDown: Record<string, number>
}

type Day = { date: string; down: number | null } // null = not monitored yet

const MINUTES_PER_DAY = 1440
const MOBILE_DAYS = 30

async function load(): Promise<Site[] | null> {
  try {
    const res = await fetch(status.summary, { next: { revalidate } })
    if (!res.ok) return null
    return (await res.json()) as Site[]
  } catch {
    return null
  }
}

// Upptime keys days by UTC date, so the window is built in UTC too.
function lastDays(n: number): string[] {
  const today = new Date()
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - (n - 1 - i)))
    return d.toISOString().slice(0, 10)
  })
}

function history(s: Site, dates: string[]): Day[] {
  const since = status.sinceBySlug[s.slug] ?? status.since
  return dates.map((date) => ({ date, down: date < since ? null : (s.dailyMinutesDown[date] ?? 0) }))
}

// One row per project: "Nebula", "Nebula API" and "Nebula WebSocket" are one project (the name's first word),
// so a new check joins its project with no config. A project's day is its worst service's day.
type Project = { name: string; sites: Site[] }

function projects(sites: Site[]): Project[] {
  const byName = new Map<string, Site[]>()
  for (const s of sites) {
    const name = s.name.split(' ')[0]
    byName.set(name, [...(byName.get(name) ?? []), s])
  }
  return [...byName].map(([name, list]) => ({ name, sites: list }))
}

function worst(histories: Day[][]): Day[] {
  return histories[0].map((d, i) => {
    const watched = histories.map((h) => h[i].down).filter((v): v is number => v !== null)
    return { date: d.date, down: watched.length ? Math.max(...watched) : null }
  })
}

function uptime(days: Day[]): string | null {
  const watched = days.filter((d) => d.down !== null)
  if (!watched.length) return null
  const down = watched.reduce((sum, d) => sum + (d.down ?? 0), 0)
  const pct = 100 * (1 - down / (watched.length * MINUTES_PER_DAY))
  return `${pct >= 99.995 ? '100' : pct.toFixed(2)}%`
}

function tone(down: number | null): string {
  if (down === null) return 'bar-none'
  if (down === 0) return 'bar-up'
  return down <= 30 ? 'bar-minor' : 'bar-major'
}

function label(d: Day): string {
  const date = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${d.date}T00:00:00Z`),
  )
  if (d.down === null) return `${date} · not monitored yet`
  if (d.down === 0) return `${date} · no downtime`
  return `${date} · ${d.down} min down`
}

export default async function StatusPage() {
  const sites = await load()
  const dates = lastDays(status.days)
  const down = sites?.filter((s) => s.status !== 'up') ?? []

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[792px] flex-col gap-14 px-4 py-14 sm:px-6 sm:py-24">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:gap-x-6">
        <Link href="/" className="text-[var(--ink)]">
          <Signature width={92} />
        </Link>
        <nav className="flex items-center gap-x-3 font-mono text-[14px] sm:gap-x-4">
          <a href={status.upptime} target="_blank" rel="noopener noreferrer" className="link py-1">
            raw checks
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="grid gap-4">
        <h1 className="serif text-[2.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-[var(--ink)]">
          Status
        </h1>
        {sites === null ? (
          <p className="text-[16px] text-[var(--muted)]">
            The status data is unreachable right now. The{' '}
            <a href={status.upptime} className="link">
              raw checks
            </a>{' '}
            may still load.
          </p>
        ) : (
          <p className="flex items-center gap-2.5 text-[17px] text-[var(--ink)]">
            <span aria-hidden className={down.length ? 'status-dot status-dot-down' : 'live-dot'} />
            {down.length === 0
              ? 'All systems operational'
              : `${down.map((s) => s.name).join(', ')} ${down.length === 1 ? 'is' : 'are'} having trouble`}
          </p>
        )}
        <p className="font-mono text-[13px] text-[var(--faint)]">
          Every app is checked every 5 minutes from GitHub Actions. API rows hit a deep /health that also checks
          the database and Redis; Nebula's workers row checks that prices, orders and database writes are fresh.
        </p>
      </section>

      {sites && (
        <section className="grid gap-9">
          {projects(sites).map((p) => {
            const histories = p.sites.map((s) => history(s, dates))
            const trouble = p.sites.find((s) => s.status !== 'up')
            const row = (
              <Row
                name={p.name}
                caption={p.sites.length > 1 ? `${p.sites.length} services` : new URL(p.sites[0].url).host}
                status={trouble?.status ?? 'up'}
                days={worst(histories)}
                expands={p.sites.length > 1}
              />
            )
            if (p.sites.length === 1) return <article key={p.name}>{row}</article>
            return (
              <details key={p.name} className="project">
                <summary>{row}</summary>
                <div className="mt-5 grid gap-5 border-l border-[var(--line)] pl-4">
                  {p.sites.map((s, i) => (
                    <Row key={s.slug} name={s.name} caption={new URL(s.url).host} status={s.status} days={histories[i]} small />
                  ))}
                </div>
              </details>
            )
          })}
          <div className="-mt-6 grid gap-3 font-mono text-[12px] text-[var(--faint)]">
            <div className="flex justify-between">
              <span>
                <span className="max-sm:hidden">{status.days}</span>
                <span className="sm:hidden">{MOBILE_DAYS}</span> days ago
              </span>
              <span>today</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="bar bar-up legend" /> up all day
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="bar bar-minor legend" /> up to 30 min down
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="bar bar-major legend" /> more
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="bar bar-none legend" /> not monitored yet
              </span>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

function Row({ name, caption, status: state, days, small, expands }: {
  name: string
  caption: string
  status: Site['status']
  days: Day[]
  small?: boolean
  expands?: boolean
}) {
  return (
    <div className="grid gap-2.5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className={`${small ? 'text-[14.5px] font-medium' : 'text-[16px] font-semibold'} tracking-[-0.01em] text-[var(--ink)]`}>
          {name}
        </h2>
        <span className="font-mono text-[12.5px] text-[var(--faint)]">{caption}</span>
        {expands && <span aria-hidden className="chevron font-mono text-[12px] text-[var(--faint)]">▸</span>}
        <span className={`ml-auto font-mono text-[13px] ${state === 'up' ? 'text-[var(--muted)]' : 'text-[var(--down)]'}`}>
          {state === 'up' ? (uptime(days) ?? '-') : state}
        </span>
      </div>
      <ol className={`bars ${small ? 'bars-small' : ''}`} aria-label={`${name}, last ${status.days} days`}>
        {days.map((d, i) => (
          <li
            key={d.date}
            className={`bar ${tone(d.down)} ${i < status.days - MOBILE_DAYS ? 'max-sm:hidden' : ''}`}
            title={label(d)}
            aria-label={label(d)}
          />
        ))}
      </ol>
    </div>
  )
}
