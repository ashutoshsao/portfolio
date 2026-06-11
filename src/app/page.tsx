'use client'
import dynamic from 'next/dynamic'
import IntroSection from '@/components/IntroSection'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import ThemeToggle from '@/components/ThemeToggle'

const GitGraph = dynamic(() => import('@/components/GitGraph'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-10 text-[var(--foreground)] sm:px-10 sm:py-16">
      <div className="relative mx-auto flex w-full max-w-[820px] flex-col gap-14">
        <ThemeToggle />
        <IntroSection />

        <section>
          <GitGraph />
        </section>

        <section>
          <ProjectsShowcase />
        </section>

        <footer className="border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
          Built and maintained by{" "}
          <a
            href="https://x.com/ashutosh_sao"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
          >
            Ashutosh Sao
          </a>
          .
        </footer>
      </div>
    </main>
  )
}
