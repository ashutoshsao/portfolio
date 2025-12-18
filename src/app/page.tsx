'use client'
import dynamic from 'next/dynamic'
import ProjectsShowcase from '@/components/ProjectsShowcase'

const GitGraph = dynamic(() => import('@/components/GitGraph'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      {/* Projects section - visible in viewport */}
      <div className="w-full flex justify-center mt-8">
        <ProjectsShowcase />
      </div>

      {/* GitHub Contributions - below viewport */}
      <div className="w-full flex justify-center mt-8">
        <GitGraph />
      </div>
      <footer className="mt-16 mb-8 text-center text-gray-600 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://x.com/ashutosh_sao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-500 transition-colors duration-300"
          >
            ashutosh sao
          </a>
        </footer>
    </div>
  )
}
