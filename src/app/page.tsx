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
    </div>
  )
}
