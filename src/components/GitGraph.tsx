'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Simple skeleton loader matching calendar dimensions
function GitHubCalendarSkeleton() {
    return (
        <div
            className="flex items-center justify-center"
            style={{ minHeight: '150px', width: '828px' }}
        >
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-700 border-t-gray-600 dark:border-t-gray-400 rounded-full animate-spin" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Loading contributions...</p>
            </div>
        </div>
    )
}

const GitHubCalendar = dynamic(
    () => import('react-github-calendar').then((mod) => ({ default: mod.GitHubCalendar })),
    {
        ssr: false,
        loading: () => <GitHubCalendarSkeleton />
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
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            {/* Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {currentDate}
            </p>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                GitHub Contributions
            </h2>

            {/* Calendar */}
            <div className="relative flex justify-center" style={{ minHeight: '150px', width: '828px' }}>
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
    )
}

