'use client'
import dynamic from 'next/dynamic'
import IntroSection from '@/components/IntroSection'
import ProjectsShowcase from '@/components/ProjectsShowcase'

const GitGraph = dynamic(() => import('@/components/GitGraph'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <IntroSection />
      
      <div className="max-[350px]:overflow-hidden relative z-10 bg-slate-950">
        {/* Projects section - visible in viewport */}
        <div className="w-full flex justify-center pb-16 pt-0">
          <ProjectsShowcase />
        </div>

        {/* GitHub Contributions - below viewport */}
        <div className="w-full flex justify-center pb-16">
          <GitGraph />
        </div>
        
        <footer className="pb-8 text-center text-slate-500 text-sm">
            Made with ❤️ by{" "}
            <a
              href="https://x.com/ashutosh_sao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a87cc3] hover:text-[#d9a9e6] transition-colors duration-300"
            >
              ashutosh sao
            </a>
          </footer>
      </div>
    </main>
  )
}
