'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    const current = document.documentElement.dataset.theme
    setTheme(current === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="kicker cursor-pointer rounded-sm px-1 py-0.5 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)]"
    >
      {theme === null ? '    ' : theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
