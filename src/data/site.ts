export const site = {
  name: 'Ashutosh Sao',
  role: 'Software Engineer',
  location: 'Rajnandgaon, Chhattisgarh, India',
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
  summary?: string
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
    summary: 'Turn an app idea into a working app with AI.',
    year: '2026',
    description:
      'An AI app builder - an agent writes and runs your app in a cloud sandbox, streaming a live preview over SSE. Every round is snapshotted to R2 off the hot path, so a dropped connection or dead sandbox resumes or rewinds to any earlier step.',
    proof: { value: '181', label: 'saved versions you can restore across 19 user-built apps' },
    stack: ['TypeScript', 'Bun', 'Elysia', 'PostgreSQL', 'Redis', 'E2B', 'Cloudflare R2', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/orin',
    live: 'https://orin.ashutoshsao.com',
    image: {
      light: '/work/orin-build-light.webp',
      dark: '/work/orin-build-dark.webp',
      alt: 'Orin building a landing page: the chat with the agent on the left, the live preview on the right',
    },
  },
  {
    title: 'Nebula',
    summary: 'A crypto trading platform with live prices, charts, and buy and sell orders.',
    year: '2026',
    description:
      'A perpetual-futures exchange built from scratch - a single-writer in-memory matching engine fed by Redis Streams, with margin, liquidation, funding and snapshot/replay recovery. Profiling traced a 30× throughput loss to filled orders never leaving the book; fixed with regression tests. Benchmark latency: p99 ~40µs over 1 million orders.',
    proof: { value: '~200,000', label: 'orders processed per second in a 1-million-order benchmark' },
    stack: ['TypeScript', 'Bun', 'Redis Streams', 'WebSockets', 'PostgreSQL', 'TimescaleDB', 'Kubernetes'],
    code: 'https://github.com/ashutoshsao/nebula',
    live: 'https://nebula.ashutoshsao.com/trade/BTC-PERP',
    image: {
      light: '/work/nebula-trade-light.webp',
      dark: '/work/nebula-trade-dark.webp',
      alt: 'Nebula ETH-PERP trading screen with chart, order book and order form',
    },
  },
  {
    title: 'Ardin',
    summary: 'AI that flags exchange updates and service outages for the trading teams affected.',
    year: '2026',
    description:
      'AI triage for trading-firm ops - reads live exchange and vendor feeds, asks a decision model typed questions for every notice × system, and opens tickets only for the desks whose systems are hit. Unsure calls go to human review. Evaluation: 27 of 28 hand-labelled notices routed correctly; all 5 prompt-injection tests held.',
    proof: { value: '27 of 28', label: 'test notices sent to the correct trading teams' },
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Jev', 'DeepSeek', 'Playwright'],
    live: 'https://ardin.ashutoshsao.com',
    image: {
      light: '/work/ardin-inbox-light.webp',
      dark: '/work/ardin-inbox-dark.webp',
      alt: 'Ardin inbox: 46 notices became 12 tickets, each tagged with severity, affected systems and teams',
    },
  },
  {
    title: 'Proxy',
    summary: 'AI agents go on virtual dates to help you find compatible people.',
    year: '2026',
    description:
      'Agents that date for you. Built in under three hours: a multi-agent pipeline reads public LinkedIn and Instagram into a profile where every claim is quote-checked against its source, then agents go on ten-turn dates for their people and rank who fits. Evaluated across 25 people and 90 agent dates.',
    proof: { value: '67 of 68', label: 'profile claims verified against their original sources' },
    stack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Prisma', 'AI SDK', 'Zod'],
    code: 'https://github.com/ashutoshsao/agent-dating-assignment',
    live: 'https://proxy.ashutoshsao.com',
    image: {
      light: '/work/proxy-dates-light.webp',
      dark: '/work/proxy-dates-dark.webp',
      alt: 'Proxy date results: pairs of people, where their agents went, and a score for each date',
    },
  },
]

export const moreProjects: WorkItem[] = [
  {
    title: 'Care-Tip Feed',
    year: '2026',
    description:
      'A safety-first health-video feed where an LLM runs only when a profile changes, so cost scales with changes, not users - checked by an eval with planted traps and a three-provider LLM-judge panel.',
    proof: { value: '0 vs 12', label: 'unsafe tips in an evaluation, compared with a similarity-only feed' },
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
  sinceBySlug: {
    'ardin-api': '2026-10-21',
    'nebula-workers': '2026-10-22',
    tradio: '2026-10-21',
    valor: '2026-10-22',
  } as Record<string, string>, // checks added after the start
  // Rows with no URL, from Healthchecks.io heartbeats (src/lib/heartbeats.ts). keyEnv names the server-side env
  // var holding that project's read-only API key; slug is the check's slug in the project.
  heartbeats: [
    { name: 'Tradio', slug: 'tradio', caption: 'Telegram bot · heartbeat', keyEnv: 'HEALTHCHECKS_TRADIO_KEY' },
    { name: 'Valor', slug: 'valor', caption: 'job-search agent · heartbeat', keyEnv: 'HEALTHCHECKS_VALOR_KEY' },
  ],
}
