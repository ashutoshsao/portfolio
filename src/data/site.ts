export const site = {
  name: 'Ashutosh Sao',
  role: 'Software Engineer',
  location: 'Rajnandgaon, India',
  availability: 'open to relocate',
  email: 'ashutoshsao17@gmail.com',
  github: 'https://github.com/ashutoshsao',
  twitter: 'https://x.com/ashutosh_sao',
  linkedin: 'https://www.linkedin.com/in/ashutoshsao/',
  // Public copy of ~/personal/resume.tex without the phone number
  resume: '/ashutosh-sao-resume.pdf',
}

export type Proof = {
  value: string
  label: string
}

export type WorkItem = {
  title: string
  year: string
  description: string
  proof: Proof
  stack: string[]
  code?: string
  live?: string
  image?: { light: string; dark: string; alt: string }
}

export const projects: WorkItem[] = [
  {
    title: 'Orin',
    year: '2026',
    description:
      'An AI app builder - an agent writes and runs your app in a cloud sandbox, streaming a live preview over SSE. Every round is snapshotted to R2 off the hot path, so a dropped connection or dead sandbox resumes or rewinds to any earlier step.',
    proof: { value: '181', label: 'restorable checkpoints across 19 user-built apps' },
    stack: ['TypeScript', 'Bun', 'Elysia', 'PostgreSQL', 'Redis', 'E2B', 'Cloudflare R2', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/orin',
    live: 'https://orin.ashutoshsao.com',
    image: {
      light: '/work/orin-light.webp',
      dark: '/work/orin-dark.webp',
      alt: 'Orin landing page: “Describe an app. Watch it build itself.”',
    },
  },
  {
    title: 'Nebula',
    year: '2026',
    description:
      'A perpetual-futures exchange built from scratch - a single-writer in-memory matching engine fed by Redis Streams, with margin, liquidation, funding and snapshot/replay recovery. Profiling traced a 30× throughput loss to filled orders never leaving the book; fixed with regression tests.',
    proof: { value: '~200k', label: 'orders/sec · p99 ~40µs over 1M orders' },
    stack: ['TypeScript', 'Bun', 'Redis Streams', 'WebSockets', 'PostgreSQL', 'TimescaleDB', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/nebula',
    live: 'https://nebula.ashutoshsao.com/trade/BTC-PERP',
    image: {
      light: '/work/nebula-light-v2.webp',
      dark: '/work/nebula-dark.webp',
      alt: 'Nebula BTC-PERP trading screen with chart, order book and order form',
    },
  },
  {
    title: 'Ardin',
    year: '2026',
    description:
      'AI triage for trading-firm ops - reads live exchange and vendor feeds, asks a decision model typed questions for every notice × system, and opens tickets only for the desks whose systems are hit. Unsure calls go to human review.',
    proof: { value: '27/28', label: 'hand-labelled notices routed right · 5/5 prompt injections held' },
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Jev', 'DeepSeek', 'Playwright'],
    live: 'https://ardin.ashutoshsao.com',
    image: {
      light: '/work/ardin-hero-light.webp',
      dark: '/work/ardin-hero-dark.webp',
      alt: 'Ardin landing page: “Where exchange notices and vendor outages find the desk they hit”',
    },
  },
  {
    title: 'Proxy',
    year: '2026',
    description:
      'Agents that date for you. Built in under three hours: a multi-agent pipeline reads public LinkedIn and Instagram into a profile where every claim is quote-checked against its source, then agents go on ten-turn dates for their people and rank who fits.',
    proof: { value: '67/68', label: 'claims verified against the source · 25 people, 90 dates' },
    stack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Prisma', 'AI SDK', 'Zod'],
    code: 'https://github.com/ashutoshsao/agent-dating-assignment',
    live: 'https://agent-dating-assignment.vercel.app',
    image: {
      light: '/work/proxy-light.webp',
      dark: '/work/proxy-dark.webp',
      alt: 'Proxy landing page: “Your agent goes on the dates. You get the shortlist.”',
    },
  },
]

export const moreProjects: WorkItem[] = [
  {
    title: 'Care-Tip Feed',
    year: '2026',
    description:
      'A safety-first health-video feed where an LLM runs only when a profile changes, so cost scales with changes, not users - checked by an eval with planted traps and a three-provider LLM-judge panel.',
    proof: { value: '0 vs 12', label: 'unsafe tips, against embedding-only' },
    stack: ['Python', 'Claude / Gemini / GPT', 'Ollama', 'pytest'],
    code: 'https://github.com/ashutoshsao/care-tip-feed',
  },
]

export type Experience = {
  org: string
  role: string
  period: string
  description: string
  link?: { label: string; href: string }
}

export const experience: Experience[] = [
  {
    org: 'Stealth Startup',
    role: 'software engineer (contract)',
    period: '2026 - present',
    description:
      'Hardening a live, paid video-consultation app (React Native, Firebase, VideoSDK) - shipped 16 call-safety fixes, including a video-stream leak (~1,800 native streams per 15-min call down to 1 per track), and moving call billing server-side with idempotent call start, credit holds, and a race-free booking lock.',
  },
  {
    org: 'Super30 - 100xSchool',
    role: 'resident',
    period: '2026 - present',
    description:
      'A selective, full-time post-grad engineering residency in Noida - Nebula and Orin both shipped from here to production Kubernetes, on weekly deadlines with peer code review and system-design critique.',
    link: { label: '100xschool', href: 'https://100xschool.in/post-grad' },
  },
  {
    org: 'Palisadoes Foundation',
    role: 'open-source contributor',
    period: '2025 - 2026',
    description:
      '16 merged PRs on Talawa, an open-source platform used by real communities - features shipped end to end, from GraphQL APIs to the React admin UI, with Vitest coverage.',
    link: {
      label: '16 merged prs',
      href: 'https://github.com/search?q=author%3Aashutoshsao+org%3APalisadoesFoundation+type%3Apr+is%3Amerged&type=pullrequests',
    },
  },
]

export type Recognition = {
  value: string
  label: string
  detail: string
}

export const recognition: Recognition[] = [
  {
    value: '1 of 100',
    label: 'Superteam SuperDevs',
    detail: 'picked from ~2,500 applicants for a two-month Solana bootcamp; finalist',
  },
  {
    value: '26',
    label: 'merged open-source PRs',
    detail: 'since 2022, across Talawa, stdlib-js, Meshery and AsyncAPI',
  },
  {
    value: '250 USDC',
    label: 'Superteam Earn prize',
    detail: '100xDevs × Superteam monthly Web3 contest',
  },
]

// /status: Upptime (repo ashutoshsao/status) checks every app every 5 minutes and keeps the history.
// One row per site in summary.json; days before `since` (or a site's own start) are drawn grey.
export const status = {
  summary: 'https://raw.githubusercontent.com/ashutoshsao/status/master/history/summary.json',
  upptime: 'https://ashutoshsao.github.io/status/',
  days: 90,
  since: '2026-10-20',
  sinceBySlug: { 'ardin-api': '2026-10-21' } as Record<string, string>, // checks added after the start
}
