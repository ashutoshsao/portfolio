'use client'

import Link from 'next/link'

interface ProjectCardProps {
    title: string
    description: string
    githubUrl: string
    demoUrl?: string
    githubLabel?: string
    status?: string
    techStack?: string[]
}

export default function ProjectCard({
    title,
    description,
    githubUrl,
    demoUrl,
    githubLabel = 'Code',
    status,
    techStack = [],
}: ProjectCardProps) {
    return (
        <article className="grid gap-4 border-b border-[var(--line)] py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold leading-snug text-[var(--foreground)]">
                        {title}
                    </h3>
                    {status && (
                        <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-medium leading-5 text-[var(--accent)]">
                            {status}
                        </span>
                    )}
                </div>
                <p className="max-w-[560px] text-sm leading-6 text-[var(--muted)]">
                    {description}
                </p>
                {techStack.length > 0 && (
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
                        {techStack.map((tech) => (
                            <li
                                key={tech}
                                className="after:ml-3 after:text-[var(--line)] after:content-['/'] last:after:content-none"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex items-start gap-4 text-sm sm:justify-end">
                <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
                >
                    {githubLabel}
                </Link>

                {demoUrl && (
                    <Link
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
                    >
                        Demo
                    </Link>
                )}
            </div>
        </article>
    )
}
