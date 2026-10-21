import Link from 'next/link'
import Activity from '@/components/Activity'
import CopyEmail from '@/components/CopyEmail'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import Signature from '@/components/Signature'
import ThemeToggle from '@/components/ThemeToggle'
import WorkList from '@/components/WorkList'
import { experience, moreProjects, projects, recognition, site } from '@/data/site'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[792px] flex-col gap-20 px-4 py-14 sm:px-6 sm:py-24">
      <Reveal />

      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:gap-x-6" data-reveal>
        <Link href="/" className="text-[var(--ink)]">
          <Signature width={92} />
        </Link>
        <nav className="flex items-center gap-x-3 font-mono text-[14px] sm:gap-x-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="link py-1">
            github
          </a>
          <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="link py-1">
            x
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link py-1">
            linkedin
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="link py-1">
            resume
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="grid gap-6">
        <h1
          className="serif text-[2.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-balance text-[var(--ink)] sm:text-[2.9rem]"
          data-reveal
        >
          I build real-time systems and AI agents —{' '}
          <em className="pr-[0.04em] text-[var(--accent)]">software that earns trust</em>.
        </h1>
        <p
          className="max-w-[60ch] text-[17px] leading-[1.7] text-[var(--muted)] text-pretty"
          data-reveal
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
        >
          I&apos;m Ashutosh, a software engineer from {site.location}. I care how a system is
          designed, how it scales, and how it behaves when things go wrong — right now, a
          real-time trading exchange and AI agents that get real work done.
        </p>
        <p
          className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] text-[var(--faint)]"
          data-reveal
          style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
        >
          <span className="flex items-center gap-2">
            <span aria-hidden className="live-dot" />
            {site.availability}
          </span>
          <span aria-hidden className="hidden sm:inline">·</span>
          <CopyEmail />
        </p>
      </section>

      <Section index="01" label="Work">
        <WorkList featured={projects} more={moreProjects} />
      </Section>

      <Section index="02" label="Experience">
        <div className="grid gap-9">
          {experience.map((item) => (
            <article key={item.org} className="grid gap-2.5" data-reveal>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
                  <Logo name={item.org} />
                  {item.org}
                </h3>
                <span className="serif text-[17px] italic text-[var(--accent)]">
                  {item.role}
                </span>
                <span className="ml-auto font-mono text-[13px] text-[var(--faint)]">
                  {item.period}
                </span>
              </div>
              <p className="max-w-[64ch] text-[16px] leading-[1.7] text-[var(--muted)] text-pretty">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link w-fit font-mono text-[13.5px]"
                >
                  {item.link.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section index="03" label="Recognition">
        <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-3">
          {recognition.map((item, i) => (
            <div
              key={item.label}
              className="grid content-start gap-1.5"
              data-reveal
              style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}
            >
              <dt className="order-2 text-[15px] font-semibold text-[var(--ink)]">
                <Logo name={item.label} />
                {item.label}
              </dt>
              <dd className="order-1 font-mono text-[24px] font-medium leading-tight tracking-[-0.02em] text-[var(--ink)]">
                {item.value}
              </dd>
              <dd className="order-3 text-[14.5px] leading-[1.6] text-[var(--muted)]">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section index="04" label="Activity">
        <Activity />
      </Section>

      <Footer />
    </main>
  )
}
