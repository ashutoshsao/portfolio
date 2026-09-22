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
      'An AI app builder — you describe an app and an agent writes and runs it in a cloud sandbox, streaming a live preview back over SSE. The agent loop sits behind a provider-agnostic LLM interface, and every round is snapshotted to R2 as a git commit, so a dropped connection or a dead sandbox resumes — or rewinds to any earlier step. Runs on GKE with invite, guest-link and bring-your-own-key tiers under atomically-enforced step budgets.',
    stack: ['TypeScript', 'Bun', 'Elysia', 'PostgreSQL', 'Drizzle', 'Redis', 'E2B', 'Cloudflare R2', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/orin',
    live: 'https://orin.ashutoshsao.com',
  },
  {
    title: 'Nebula',
    year: '2026',
    status: 'live in production',
    description:
      'A perpetual-futures exchange built from scratch — single in-memory matching engine, real-time order book and price feeds over WebSockets, and deterministic snapshot/replay recovery, deployed on GKE.',
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
    org: 'Super30 — 100xSchool',
    role: 'resident',
    period: '2026 — present',
    description:
      'Living on campus at 100xSchool’s six-month post-grad program in Noida, building production-grade systems full time — Nebula and Orin both shipped from here to a production Kubernetes deployment, on weekly build cycles with peer code review and system-design critique.',
    link: { label: '100xschool ↗', href: 'https://100xschool.in/post-grad' },
  },
  {
    org: 'Palisadoes Foundation',
    role: 'open-source contributor & maintainer',
    period: '2025 — 2026',
    description:
      '16 merged PRs on Talawa, an open-source platform used by real communities — features shipped end to end, from API to UI.',
    link: {
      label: '16 merged prs ↗',
      href: 'https://github.com/search?q=author%3Aashutoshsao+org%3APalisadoesFoundation+type%3Apr+is%3Amerged&type=pullrequests',
    },
  },
]
