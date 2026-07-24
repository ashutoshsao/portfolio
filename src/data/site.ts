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
    title: 'Perps',
    year: '2026',
    status: 'shipping to production',
    description:
      'A perpetual-futures exchange built from scratch — real-time matching, live prices over WebSockets, and deterministic replay of every trade.',
    stack: ['TypeScript', 'Bun', 'Redis Streams', 'WebSockets', 'PostgreSQL', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/Perps',
    // add the live URL once the Kubernetes deployment is up:
    // live: 'https://perps.ashutoshsao.com',
  },
  {
    title: 'Plum',
    year: '2026',
    status: 'in progress',
    description:
      'An AI agent harness built from first principles — planning, tool orchestration, and context and memory that hold up across a session.',
    stack: ['TypeScript', 'Bun', 'Tool Calling', 'Context Management'],
    code: 'https://github.com/ashutoshsao/plum',
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
