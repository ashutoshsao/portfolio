'use client'

import { useRef, useState } from 'react'
import { site } from '@/data/site'

export default function CopyEmail({ label }: { label?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      window.location.href = `mailto:${site.email}`
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${site.email}`}
      title={site.email}
      className="link press cursor-pointer py-1 font-mono text-[14px]"
    >
      <span key={copied ? 'copied' : 'idle'} className="swap-in">
        {copied ? 'copied ✓' : (label ?? site.email)}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email copied' : ''}
      </span>
    </button>
  )
}
