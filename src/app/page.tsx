import Activity from '@/components/Activity'
import CopyEmail from '@/components/CopyEmail'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ThemeToggle from '@/components/ThemeToggle'
import WorkList from '@/components/WorkList'
import { experience, projects, site } from '@/data/site'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[830px] flex-col gap-16 px-6 py-16 sm:py-24">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="kicker">{site.name}</span>
        <nav className="flex items-baseline gap-x-4 font-mono text-[14px]">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="link">
            github
          </a>
          <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="link">
            x
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            linkedin
          </a>
          <CopyEmail label="email" />
          <ThemeToggle />
        </nav>
      </header>

      <section className="grid gap-6">
        <h1 className="serif text-[2.3rem] font-normal leading-[1.25] tracking-[-0.01em] text-[var(--ink)] sm:text-[2.8rem]">
          I build real-time systems and AI agents —{' '}
          <em className="text-[var(--accent)]">software that earns trust</em>.
        </h1>
        <div className="grid gap-4 text-[16.5px] leading-[1.8] text-[var(--muted)]">
          <p>
            I&apos;m Ashutosh, a software engineer from {site.location}. I
            care how a system is designed, how it scales, and how it behaves
            when things go wrong — right now, a real-time trading exchange and
            AI agents that get real work done.
          </p>
        </div>
      </section>

      <Section index="01" label="Work">
        <WorkList items={projects} />
      </Section>

      <Section index="02" label="Experience">
        <div className="grid gap-9">
          {experience.map((item) => (
            <article key={item.org} className="grid gap-2.5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[18px] font-semibold tracking-tight text-[var(--ink)]">
                  {item.org}
                </h3>
                <span className="serif text-[17px] italic text-[var(--accent)]">
                  {item.role}
                </span>
                <span className="ml-auto font-mono text-[13px] text-[var(--faint)]">
                  {item.period}
                </span>
              </div>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)]">
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

      <Section index="03" label="Activity">
        <Activity />
      </Section>

      <Footer />
    </main>
  )
}
