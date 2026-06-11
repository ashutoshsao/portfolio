'use client'

import Link from 'next/link'
import { cloneElement, useEffect, useRef, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import type { Activity, BlockElement } from 'react-activity-calendar'
import Title from './ui/Title'

type ContributionApiResponse = {
    contributions: Activity[]
}

const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(`${date}T00:00:00`))
}

const formatActivity = (activity: Activity) => {
    const contributionLabel = activity.count === 1 ? 'contribution' : 'contributions'
    return `${activity.count} ${contributionLabel} on ${formatDate(activity.date)}`
}

export default function GitGraph() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [activity, setActivity] = useState<Activity[]>([])
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

    useEffect(() => {
        const controller = new AbortController()

        const loadContributions = async () => {
            try {
                const response = await fetch(
                    'https://github-contributions-api.jogruber.de/v4/ashutoshsao?y=last',
                    { signal: controller.signal },
                )

                if (!response.ok) {
                    throw new Error('Unable to load GitHub contributions')
                }

                const data = (await response.json()) as ContributionApiResponse
                setActivity(data.contributions)
                setStatus('ready')
            } catch {
                if (!controller.signal.aborted) {
                    setStatus('error')
                }
            }
        }

        loadContributions()

        return () => controller.abort()
    }, [])

    useEffect(() => {
        if (status !== 'ready') return

        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        const scrollToRecentDays = () => {
            if (window.innerWidth < 720) {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth
            }
        }

        const timeoutId = window.setTimeout(scrollToRecentDays, 80)
        window.addEventListener('resize', scrollToRecentDays)

        return () => {
            window.clearTimeout(timeoutId)
            window.removeEventListener('resize', scrollToRecentDays)
        }
    }, [status])

    const renderInteractiveBlock = (block: BlockElement, day: Activity) => {
        return cloneElement(block, {
            'aria-label': formatActivity(day),
            style: {
                ...(block.props.style ?? {}),
                outlineColor: 'var(--accent)',
            },
        })
    }

    return (
        <div className="flex w-full flex-col gap-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <Title title="GitHub contributions" />
                <Link
                    href="https://github.com/ashutoshsao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
                >
                    View GitHub
                </Link>
            </div>

            <div>
                {status === 'loading' && (
                    <div className="flex min-h-[150px] items-center justify-center border-y border-[var(--line)] text-sm text-[var(--muted)]">
                        Loading contribution activity...
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex min-h-[150px] items-center justify-center border-y border-[var(--line)] text-sm text-[var(--muted)]">
                        GitHub activity is temporarily unavailable.
                    </div>
                )}

                {status === 'ready' && (
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto pb-2"
                    >
                        <div className="min-w-max">
                            <ActivityCalendar
                                data={activity}
                                blockSize={11}
                                blockMargin={3}
                                blockRadius={3}
                                colorScheme="light"
                                fontSize={14}
                                labels={{
                                    totalCount: '{{count}} contributions in the last year',
                                }}
                                maxLevel={4}
                                renderBlock={renderInteractiveBlock}
                                showWeekdayLabels={['mon', 'wed', 'fri']}
                                theme={{
                                    light: ['var(--graph-0)', 'var(--graph-1)', 'var(--graph-2)', 'var(--graph-3)', 'var(--graph-4)'],
                                }}
                                tooltips={{
                                    activity: {
                                        offset: 10,
                                        text: formatActivity,
                                        withArrow: true,
                                    },
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
