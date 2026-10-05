export const site = {
  name: 'Ashutosh Sao',
  role: 'Software Engineer',
  location: 'Rajnandgaon, India',
  email: 'ashutoshsao17@gmail.com',
  github: 'https://github.com/ashutoshsao',
  twitter: 'https://x.com/ashutosh_sao',
  linkedin: 'https://www.linkedin.com/in/ashutoshsao/',
}

export type WorkItem = {
  title: string
  year: string
  status?: string
  description: string
  stack: string[]
  code?: string
  live?: string
}

export const projects: WorkItem[] = [
  {
    title: 'Orin',
    year: '2026',
    status: 'live in production',
    description:
      'An AI app builder — an agent writes and runs your app in a cloud sandbox, streaming a live preview over SSE, with every step snapshotted to R2 so a dead sandbox resumes or rewinds (181 restorable checkpoints across 19 user-built apps), deployed on GKE.',
    stack: ['TypeScript', 'Bun', 'Elysia', 'PostgreSQL', 'Drizzle', 'Redis', 'E2B', 'Cloudflare R2', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/orin',
    live: 'https://orin.ashutoshsao.com',
  },
  {
    title: 'Nebula',
    year: '2026',
    status: 'live in production',
    description:
      'A perpetual-futures exchange built from scratch — single-writer in-memory matching engine benchmarked at 200k+ orders/sec (p99 under 40µs over 1M orders), real-time order book over WebSockets, and deterministic snapshot/replay recovery, deployed on GKE.',
    stack: ['TypeScript', 'Bun', 'Redis Streams', 'WebSockets', 'PostgreSQL', 'TimescaleDB', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/nebula',
    live: 'https://nebula.ashutoshsao.com/trade/BTC-PERP',
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
    period: '2026 — present',
    description:
      'Hardening a live, paid video-consultation app (React Native, Firebase, VideoSDK) — shipped 16 call-safety fixes, including a video-stream leak (~1,800 native streams per 15-min call → 1 per track), and moving call billing server-side with idempotent call start, credit holds, and a race-free booking lock.',
  },
  {
    org: 'Super30 — 100xSchool',
    role: 'resident',
    period: '2026 — present',
    description:
      'Living on campus at 100xSchool’s six-month post-grad program in Noida, building production-grade systems full time — Nebula and Orin both shipped from here to a production Kubernetes deployment, on weekly build cycles with peer code review and system-design critique.',
    link: { label: '100xschool ↗', href: 'https://100xschool.in/post-grad' },
  },
  {
    org: 'Palisadoes Foundation',
    role: 'open-source contributor',
    period: '2025 — 2026',
    description:
      '16 merged PRs on Talawa, an open-source platform used by real communities — features shipped end to end, from GraphQL APIs to the React admin UI, with Vitest coverage.',
    link: {
      label: '16 merged prs ↗',
      href: 'https://github.com/search?q=author%3Aashutoshsao+org%3APalisadoesFoundation+type%3Apr+is%3Amerged&type=pullrequests',
    },
  },
]
