'use client'

import ProjectCard from './ProjectCard'
import Title from './ui/Title'

export default function ProjectsShowcase() {
    const currentProjects = [
        {
            title: 'Perps',
            description: 'A TypeScript project for exploring perpetual trading interfaces and market mechanics.',
            githubUrl: 'https://github.com/ashutoshsao/Perps',
            status: 'Now building',
            techStack: ['TypeScript'],
        },
        {
            title: 'Plum',
            description: 'A minimal AI harness for shaping how agents receive context, use tools, and verify work.',
            githubUrl: 'https://github.com/ashutoshsao/plum',
            status: 'AI harness',
            techStack: ['TypeScript'],
        },
    ]

    const selectedProjects = [
        {
            title: 'Brief',
            description: 'Open-source article summarizer for turning long reads into concise AI summaries, with URL extraction, local history, and one-click copy.',
            githubUrl: 'https://github.com/ashutoshsao/brief',
            demoUrl: 'https://brief.ashutoshsao.com',
            techStack: ['React', 'TypeScript', 'Vite', 'React Query'],
        },
        {
            title: 'Blog Site',
            description: 'Full-stack blogging platform built with Turborepo, a React frontend, Cloudflare Workers API, Hono, Prisma, and end-to-end type safety.',
            githubUrl: 'https://github.com/ashutoshsao/blog-site',
            demoUrl: 'https://blogsite.ashutoshsao.com/',
            techStack: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'Prisma'],
        },
    ]

    const openSourceWork = [
        {
            title: 'Palisadoes Foundation',
            description: '16 merged PRs across Talawa Admin and Talawa API, including event visibility fixes, event modal consistency, authorization cleanup, and frontend performance work.',
            githubUrl: 'https://github.com/search?q=author%3Aashutoshsao+org%3APalisadoesFoundation+type%3Apr+is%3Amerged&type=pullrequests',
            githubLabel: 'Merged PRs',
            status: 'Talawa',
            techStack: ['React', 'TypeScript', 'GraphQL', 'Node.js'],
        },
    ]

    return (
        <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-5">
                <Title title="Currently building" />
                <div className="flex flex-col border-t border-[var(--line)]">
                    {currentProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            status={project.status}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <Title title="Projects" />
                <div className="flex flex-col border-t border-[var(--line)]">
                    {selectedProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            demoUrl={project.demoUrl}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <Title title="Open source" />
                <div className="flex flex-col border-t border-[var(--line)]">
                    {openSourceWork.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            githubLabel={project.githubLabel}
                            status={project.status}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
