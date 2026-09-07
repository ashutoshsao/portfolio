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
    status: 'in progress',
    description:
      'A Lovable-style AI app builder — you describe an app and an agent scaffolds and builds it live. A provider-agnostic agent loop drives tool calls inside per-session E2B sandboxes, streaming events and a live preview to the browser over SSE.',
    stack: ['TypeScript', 'Bun', 'DeepSeek', 'E2B', 'SSE', 'React', 'Turborepo'],
    code: 'https://github.com/ashutoshsao/orin',
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
      'Living on campus at 100xSchool’s six-month post-grad program in Noida, building production-grade systems full time.',
    link: { label: '100xschool ↗', href: 'https://100xschool.in/post-grad' },
  },
  {
    org: 'Palisadoes Foundation',
    role: 'open-source contributor & maintainer',
    period: '2025 — present',
    description:
      '16 merged PRs on Talawa, an open-source platform used by real communities — features shipped end to end, from API to UI.',
    link: {
      label: '16 merged prs ↗',
      href: 'https://github.com/search?q=author%3Aashutoshsao+org%3APalisadoesFoundation+type%3Apr+is%3Amerged&type=pullrequests',
    },
  },
]
