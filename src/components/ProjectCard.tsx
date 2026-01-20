'use client'
import Link from 'next/link'
import { ReactNode, useState, useEffect, useRef } from 'react'

interface ProjectCardProps {
    title: string
    description: string
    githubUrl: string
    demoUrl?: string
    techStack?: string[]
    preview?: ReactNode
    isReversed?: boolean
}

export default function ProjectCard({
    title,
    description,
    githubUrl,
    demoUrl,
    techStack = [],
    preview,
    isReversed = false
}: ProjectCardProps) {
    const [isPrewarming, setIsPrewarming] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const [showLivePreview, setShowLivePreview] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Set mounted state after hydration
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Intersection Observer - only load when card is in viewport
    useEffect(() => {
        if (!cardRef.current || !isMounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInViewport(true);
                        observer.disconnect(); // Stop observing once loaded
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, [isMounted]);

    return (
        <div 
            ref={cardRef}
            onMouseEnter={() => isInViewport && setIsPrewarming(true)}
            className={`bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/20 dark:border-white/10 rounded-xl overflow-hidden hover:border-[#a87cc3]/50 transition-all group relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            {/* Preview Image/Graphic & Iframe */}
            {(preview || demoUrl) && (
                <div className={`w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-slate-950 border-b md:border-b-0 ${isReversed ? 'md:border-l' : 'md:border-r'} border-white/5 relative transition-all duration-500`}>
                    {/* Static Preview */}
                    <div className="w-full h-full">
                        {preview}
                    </div>

                    {/* Preview Live Button - Shows on all devices when iframe not loaded */}
                    {!showLivePreview && demoUrl && (
                        <button
                            onClick={() => setShowLivePreview(true)}
                            className="absolute bottom-4 right-4 bg-[#a87cc3] hover:bg-[#d9a9e6] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg transition-colors duration-300 flex items-center gap-2"
                            aria-label="Load live preview"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Preview Live
                        </button>
                    )}

                    {/* Loaded Iframe - Shows on all devices after button click */}
                    {showLivePreview && demoUrl && (
                        <div className="absolute inset-0 bg-white" aria-hidden="true">
                            <iframe 
                                src={demoUrl} 
                                className="w-[150%] h-[150%] scale-[0.67] md:w-[200%] md:h-[200%] md:scale-[0.5] origin-top-left border-none pointer-events-none select-none"
                                title={`${title} Live Preview`}
                                loading="lazy"
                                sandbox="allow-same-origin allow-scripts"
                            />
                            {/* Close button to return to static preview */}
                            <button
                                onClick={() => setShowLivePreview(false)}
                                className="absolute top-4 right-4 bg-slate-900/90 hover:bg-slate-800 text-white p-2 rounded-lg shadow-lg transition-colors duration-300"
                                aria-label="Close live preview"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            )}
            
            <div className="p-8 flex-1 flex flex-col">

                {/* Title */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-semibold text-white group-hover:text-[#d9a9e6] transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                {/* Description - Hidden on mobile */}
                <p className="hidden md:block text-slate-400 dark:text-slate-300 mb-6 leading-relaxed text-sm font-light">
                    {description}
                </p>

                {/* Tech stack - Hidden on mobile */}
                {techStack.length > 0 && (
                    <div className="hidden md:flex flex-wrap gap-2 mb-8">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links - Compact on mobile, spacious on desktop */}
                <div className="flex gap-4 md:gap-6 items-center border-t border-slate-200/50 dark:border-white/5 pt-4 md:pt-6 mt-auto">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#a87cc3] dark:hover:text-[#d9a9e6] transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="hidden sm:inline">Source Code</span>
                        <span className="sm:hidden">Code</span>
                    </Link>

                    {demoUrl && (
                        <Link
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#a87cc3] dark:hover:text-[#d9a9e6] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="hidden sm:inline">Live Demo</span>
                            <span className="sm:hidden">Demo</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

