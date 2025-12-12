'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// The GitHubCalendar component has built-in loading skeleton that matches exact dimensions
const GitHubCalendar = dynamic(
    () => import('react-github-calendar').then((mod) => ({ default: mod.GitHubCalendar })),
    {
        ssr: false
    }
)

export default function GitGraph() {
    // Get current date in format: "Month Day, Year"
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4">
            {/* Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {currentDate}
            </p>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                GitHub Contributions
            </h2>

            {/* Calendar Container - Scrollable on mobile, centered on desktop */}
            <div className="w-full sm:flex sm:justify-center">
                <div className="overflow-x-auto sm:overflow-x-visible -mx-4 sm:mx-0 px-4 sm:px-0">
                    <div className="relative flex justify-center flex-shrink-0" style={{ minHeight: '150px', width: '828px' }}>
                        <Link href={'https://github.com/ashutoshsao'} target="_blank" rel="noopener noreferrer" className="block">
                            <GitHubCalendar
                                username="ashutoshsao"
                                blockSize={10}
                                blockMargin={3}
                                theme={{
                                    light: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"],
                                    dark: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

