'use client'

import { useId, useState } from 'react'

export default function TechnicalDetails({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="technical-details" data-open={open}>
      <button
        type="button"
        className="technical-details-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg className="technical-details-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Technical details
      </button>
      <div id={panelId} className="technical-details-panel" aria-hidden={!open} inert={!open}>
        <div className="technical-details-clip">
          <div className="technical-details-content grid gap-3 pt-2">{children}</div>
        </div>
      </div>
    </div>
  )
}
