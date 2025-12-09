'use client'
import Title from './ui/Title'
import ProjectCard from './ProjectCard'

export default function ProjectsShowcase() {
    const projects = [
        {
            title: 'Brief',
            description: 'A brief description of your Brief application. This is a showcase of your work and skills.',
            githubUrl: 'https://github.com/ashutoshsao/brief',
            demoUrl: 'https://brief-mauve.vercel.app',
            techStack: ['React', 'TypeScript', 'Next.js'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: 'Blog Site',
            description: 'A blog site application showcasing your writing and development skills. Share your thoughts and ideas.',
            githubUrl: 'https://github.com/ashutoshsao/blog-site',
            demoUrl: 'https://blogsite.ashutoshsao.com/',
            techStack: ['React', 'TypeScript', 'Next.js'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        }
    ]

    return (
        <div className="w-full flex flex-col items-center gap-6 max-w-4xl">
            <Title title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                        techStack={project.techStack}
                        icon={project.icon}
                    />
                ))}
            </div>
        </div>
    )
}
