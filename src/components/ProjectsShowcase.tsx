'use client'
import { ReactNode } from 'react'
import Title from './ui/Title'
import ProjectCard from './ProjectCard'

// Extract preview components for better performance (prevents recreation on every render)
const BriefPreview: ReactNode = (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-black relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-xl">
            <div className="space-y-2 w-32">
               <div className="h-2 w-20 bg-indigo-400/50 rounded-full" />
               <div className="h-1 w-full bg-slate-400/30 rounded-full" />
               <div className="h-1 w-24 bg-slate-400/30 rounded-full" />
               <div className="h-1 w-28 bg-slate-400/30 rounded-full" />
            </div>
        </div>
        {/* Floating badge */}
         <div className="absolute top-4 right-4 bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-1 rounded-full border border-indigo-500/30">
            AI Powered
         </div>
    </div>
)

const BlogSitePreview: ReactNode = (
    <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-black relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500" aria-hidden="true">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
         {/* Browser window mockup */}
         <div className="w-40 h-24 bg-slate-900 border border-slate-700 rounded-md shadow-2xl flex flex-col overflow-hidden">
            <div className="h-4 bg-slate-800 border-b border-slate-700 flex items-center gap-1 px-2">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="p-2 space-y-2">
                 <div className="flex gap-2">
                     <div className="w-8 h-8 bg-emerald-500/20 rounded" />
                     <div className="space-y-1 flex-1">
                         <div className="h-2 w-full bg-slate-700 rounded" />
                         <div className="h-2 w-2/3 bg-slate-700 rounded" />
                     </div>
                 </div>
            </div>
         </div>
          <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-1 rounded-full border border-emerald-500/30">
            Monorepo
         </div>
    </div>
)

export default function ProjectsShowcase() {
    const projects = [
        {
            title: 'Brief',
            description: 'An open-source article summarizer that turns lengthy articles into crisp, concise summaries using AI. Extract and summarize articles from URLs, save history in localStorage, and copy summaries with one click.',
            githubUrl: 'https://github.com/ashutoshsao/brief',
            demoUrl: 'https://brief.ashutoshsao.com',
            techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query'],
            preview: BriefPreview
        },
        {
            title: 'Blog Site',
            description: 'A modern, full-stack blogging platform built with a monorepo architecture using Turborepo. Features a React frontend with Vite, serverless API on Cloudflare Workers with Hono, and end-to-end type safety with Prisma.',
            githubUrl: 'https://github.com/ashutoshsao/blog-site',
            demoUrl: 'https://blogsite.ashutoshsao.com/',
            techStack: ['React', 'TypeScript', 'Vite', 'Hono', 'Cloudflare Workers', 'Prisma', 'Turborepo'],
            preview: BlogSitePreview
        },
    ]

    return (
        <div className="w-full flex flex-col items-center gap-6 max-w-4xl">
            <Title title="Featured Projects" />
            <div className="flex flex-col gap-8 w-full px-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                        techStack={project.techStack}
                        preview={project.preview}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    )
}
