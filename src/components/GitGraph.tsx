import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Title from './ui/Title'

// The GitHubCalendar component has built-in loading skeleton that matches exact dimensions
const GitHubCalendar = dynamic(
    () => import('react-github-calendar').then((mod) => ({ default: mod.GitHubCalendar })),
    {
        ssr: false
    }
)

export default function GitGraph() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Scroll to right (most recent) on mobile when calendar loads
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        const scrollToRight = () => {
            // Only scroll on mobile (screen width < 640px)
            if (window.innerWidth < 640) {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth
            }
        }

        // Check periodically until calendar content loads (max 2 seconds)
        const maxAttempts = 40 // 40 attempts × 50ms = 2 seconds max
        let attempts = 0

        const intervalId = setInterval(() => {
            attempts++
            const hasContent = scrollContainer.scrollWidth > scrollContainer.clientWidth

            if (hasContent) {
                scrollToRight()
                clearInterval(intervalId)
            } else if (attempts >= maxAttempts) {
                clearInterval(intervalId)
            }
        }, 50)

        // Also handle window resize
        window.addEventListener('resize', scrollToRight)

        return () => {
            clearInterval(intervalId)
            window.removeEventListener('resize', scrollToRight)
        }
    }, [])

    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4">
            
            {/* Title */}
            <Title title="GitHub Contributions" />

            {/* Calendar Container - Scrollable on mobile, centered on desktop */}
            <div className="w-full sm:flex sm:justify-center">
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto sm:overflow-x-visible -mx-4 sm:mx-0 px-4 sm:px-0"
                >
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

