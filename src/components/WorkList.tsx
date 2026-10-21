import Image from 'next/image'
import Logo from '@/components/Logo'
import type { Proof, WorkItem } from '@/data/site'

const host = (url: string) => new URL(url).host

function ProofLine({ proof, size = 'lg' }: { proof: Proof; size?: 'lg' | 'sm' }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 font-mono">
      <span
        className={
          size === 'lg'
            ? 'text-[26px] font-medium leading-none tracking-[-0.02em] text-[var(--ink)]'
            : 'text-[17px] font-medium leading-none tracking-[-0.01em] text-[var(--ink)]'
        }
      >
        {proof.value}
      </span>
      <span className="text-[13px] text-[var(--faint)]">{proof.label}</span>
    </p>
  )
}

function Links({ item }: { item: WorkItem }) {
  return (
    <span className="flex gap-3 font-mono text-[13.5px]">
      {item.live && (
        <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
          live ↗
        </a>
      )}
      {item.code && (
        <a href={item.code} target="_blank" rel="noopener noreferrer" className="link">
          code ↗
        </a>
      )}
    </span>
  )
}

function Frame({ item }: { item: WorkItem }) {
  if (!item.image) return null
  const href = item.live ?? item.code
  const { light, dark, alt } = item.image
  const sizes = '(max-width: 800px) 100vw, 744px'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.title}`}
      className="frame group"
    >
      <Image src={light} alt={alt} width={1600} height={900} sizes={sizes} className="frame-img only-light" />
      {dark !== light && (
        <Image src={dark} alt={alt} width={1600} height={900} sizes={sizes} className="frame-img only-dark" />
      )}
      {href && <span className="frame-chip">{host(href)} ↗</span>}
    </a>
  )
}

function Featured({ item }: { item: WorkItem }) {
  return (
    <article className="grid gap-4" data-reveal>
      <Frame item={item} />
      <div className="grid gap-3 pt-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
            <Logo name={item.title} />
            {item.title}
          </h3>
          <Links item={item} />
          <span className="ml-auto font-mono text-[13px] text-[var(--faint)]">{item.year}</span>
        </div>
        <ProofLine proof={item.proof} />
        <p className="max-w-[64ch] text-[16px] leading-[1.7] text-[var(--muted)] text-pretty">
          {item.description}
        </p>
        <p className="font-mono text-[12.5px] text-[var(--faint)]">{item.stack.join(' · ')}</p>
      </div>
    </article>
  )
}

function Compact({ item }: { item: WorkItem }) {
  return (
    <article className="grid gap-2 border-t border-[var(--line)] pt-5" data-reveal>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          {item.title}
        </h3>
        <Links item={item} />
        <span className="ml-auto font-mono text-[13px] text-[var(--faint)]">{item.year}</span>
      </div>
      <ProofLine proof={item.proof} size="sm" />
      <p className="max-w-[64ch] text-[15.5px] leading-[1.7] text-[var(--muted)] text-pretty">
        {item.description}
      </p>
    </article>
  )
}

export default function WorkList({ featured, more }: { featured: WorkItem[]; more: WorkItem[] }) {
  return (
    <div className="grid gap-16">
      {featured.map((item) => (
        <Featured key={item.title} item={item} />
      ))}
      {more.length > 0 && (
        <div className="grid gap-5">
          <p className="kicker" data-reveal>
            Also built
          </p>
          {more.map((item) => (
            <Compact key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
