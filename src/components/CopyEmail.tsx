'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/data/site'

export default function CopyEmail({ label, className = 'link' }: { label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const addressRef = useRef<HTMLSpanElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    setFailed(false)
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      setFailed(true)
      if (addressRef.current) {
        const range = document.createRange()
        range.selectNodeContents(addressRef.current)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
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
      title="Copy email address"
      className={`${className} press inline-flex min-h-11 cursor-pointer items-center gap-2 py-1 font-mono text-[14px]`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        {copied ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>}
      </svg>
      <span className="grid text-left">
        <span ref={addressRef} className={copied ? 'invisible col-start-1 row-start-1' : 'col-start-1 row-start-1 select-text'}>{label ?? site.email}</span>
        {copied && <span className="col-start-1 row-start-1">Copied!</span>}
        {failed && <span className="text-[12px] text-[var(--muted)]">Copy unavailable. Copy the selected address manually.</span>}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email copied' : failed ? 'Copy unavailable. Copy the selected address manually.' : ''}
      </span>
    </button>
  )
}
