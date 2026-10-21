import Link from 'next/link'
import CopyEmail from '@/components/CopyEmail'
import Signature from '@/components/Signature'
import { site } from '@/data/site'

const map: { label: string; href: string; external?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Recognition', href: '/#recognition' },
  { label: 'Activity', href: '/#activity' },
  { label: 'Status', href: '/status' },
  { label: 'Resume', href: site.resume, external: true },
]

// Tabler outline icons (MIT), drawn at 16px.
const icons: { label: string; href: string; paths: string[] }[] = [
  {
    label: 'GitHub',
    href: site.github,
    paths: [
      'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5',
    ],
  },
  {
    label: 'X',
    href: site.twitter,
    paths: ['M4 4l11.733 16h4.267l-11.733 -16l-4.267 0', 'M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772'],
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
    paths: [
      'M8 11v5',
      'M8 8v.01',
      'M12 16v-5',
      'M16 16v-3a2 2 0 1 0 -4 0',
      'M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z',
    ],
  },
]

function Icon({ paths, className = '' }: { paths: string[]; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block size-4 ${className}`}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

const heart = 'M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'
const hover = 'transition-colors hover:text-[var(--faint)]'

// A hairline dropping from the content, the signature, then a map of the whole site.
export default function Footer() {
  return (
    <footer className="grid justify-items-center gap-8 pt-4 text-center">
      <span aria-hidden className="h-16 w-px bg-[var(--muted)]" />
      <Link href="/" className={`text-[var(--ink)] ${hover}`}>
        <Signature width={104} />
      </Link>
      <p className="font-mono text-[12px] font-semibold tracking-[0.05em] text-[var(--faint)] uppercase">
        Made with <Icon paths={[heart]} className="-mt-1 align-middle" />
        <span className="sr-only">love</span> by {site.name}
      </p>
      <p className="max-w-sm text-[14px] leading-[1.6] text-pretty text-[var(--faint)]">
        {site.name} is a software engineer from {site.location}, building real-time systems and AI agents.
      </p>
      <nav className="flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14px] text-[var(--ink)]">
        {map.map((l) =>
          l.external ? (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={hover}>
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href} className={hover}>
              {l.label}
            </Link>
          ),
        )}
        {icons.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={i.label}
            className={`flex ${hover}`}
          >
            <Icon paths={i.paths} />
          </a>
        ))}
      </nav>
      <CopyEmail className="text-[var(--faint)] hover:text-[var(--ink)]" />
    </footer>
  )
}
