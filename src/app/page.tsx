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

      <div className="grid gap-12 sm:gap-16">
        <header className="grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-3" data-reveal>
          <Link href="/" className="text-[var(--ink)] transition-colors hover:text-[var(--faint)]" aria-label="Ashutosh Sao home">
            <Signature width={92} />
          </Link>
          <nav aria-label="Main navigation" className="order-last col-span-3 flex flex-wrap items-center gap-x-5 text-[14px] sm:order-none sm:col-span-1 sm:justify-end sm:gap-x-6">
            <a href="#work" className="inline-flex min-h-11 items-center font-medium text-[var(--ink)] hover:text-[var(--accent)]">
              Projects
            </a>
            <a href="#experience" className="inline-flex min-h-11 items-center font-medium text-[var(--ink)] hover:text-[var(--accent)]">
              Experience
            </a>
            <a href="#contact" className="inline-flex min-h-11 items-center font-medium text-[var(--ink)] hover:text-[var(--accent)]">
              Contact
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
              Resume ↗
            </a>
          </nav>
          <div className="col-start-3 justify-self-end">
            <ThemeToggle />
          </div>
        </header>

        <section className="grid gap-6">
          <h1
            className="serif text-[2.3rem] font-normal leading-[1.2] tracking-[-0.015em] text-balance text-[var(--ink)] sm:text-[2.9rem]"
            data-reveal
          >
            I build real-time systems and AI agents -{' '}
            <em className="pr-[0.04em] text-[var(--accent)]">software that earns trust</em>.
          </h1>
          <p
            className="max-w-[60ch] text-[17px] leading-[1.7] text-[var(--muted)] text-pretty"
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            I&apos;m Ashutosh, a software engineer from {site.location}. I care how a system is
            designed, how it scales, and how it behaves when things go wrong - right now, a
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
      </div>

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

      <Section id="activity" index="04" label="GitHub activity">
        <Activity />
      </Section>

      <Footer className="-mt-12" />
    </main>
  )
}
