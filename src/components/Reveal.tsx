'use client'

import { useEffect } from 'react'

// Marks each `[data-reveal]` block `data-shown` the first time it scrolls into
// view; globals.css does the fade and rise. Blocks are only hidden once the
// inline script in layout.tsx adds `js-reveal`, so without JavaScript
// everything shows.

export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-shown', '')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    for (const element of document.querySelectorAll('[data-reveal]')) observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return null
}
