'use client'

import { useEffect, useRef, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import type { Activity as Day } from 'react-activity-calendar'

const formatDay = (day: Day) => {
  const date = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${day.date}T00:00:00`))
  return `${day.count} contribution${day.count === 1 ? '' : 's'} — ${date}`
}

export default function Activity() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [days, setDays] = useState<Day[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://github-contributions-api.jogruber.de/v4/ashutoshsao?y=last', {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('failed')
        return res.json()
      })
      .then((data: { contributions: Day[] }) => {
        setDays(data.contributions)
        setStatus('ready')
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('error')
      })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (status !== 'ready') return
    const el = scrollRef.current
    if (el && window.innerWidth < 720) el.scrollLeft = el.scrollWidth
  }, [status])

  return (
    <div className="grid gap-4">
      {status !== 'ready' ? (
        <div className="flex h-[120px] items-center font-mono text-[11.5px] text-[var(--faint)]">
          {status === 'loading' ? 'fetching contributions…' : 'github is unreachable right now.'}
        </div>
      ) : (
        <div ref={scrollRef} className="overflow-x-auto pb-1">
          <div className="min-w-max">
            <ActivityCalendar
              data={days}
              blockSize={10}
              blockMargin={3}
              blockRadius={2}
              colorScheme="light"
              fontSize={11}
              maxLevel={4}
              labels={{ totalCount: '{{count}} contributions in the last year' }}
              showWeekdayLabels={['mon', 'wed', 'fri']}
              theme={{
                light: [
                  'var(--graph-0)',
                  'var(--graph-1)',
                  'var(--graph-2)',
                  'var(--graph-3)',
                  'var(--graph-4)',
                ],
              }}
              tooltips={{
                activity: { offset: 10, text: formatDay, withArrow: true },
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
