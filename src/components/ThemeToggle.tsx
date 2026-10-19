'use client'

// The icon's rotation is driven by CSS off `data-theme`, so this button keeps
// no React state and never renders a placeholder before hydration.

function apply(next: 'light' | 'dark') {
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem('theme', next)
  } catch {}
}

export default function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduced) {
      apply(next)
      return
    }
    document.startViewTransition(() => apply(next))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="press -m-1.5 grid size-8 cursor-pointer place-items-center rounded-full text-[var(--faint)] transition-colors duration-150 hover:text-[var(--ink)]"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="theme-icon">
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  )
}
