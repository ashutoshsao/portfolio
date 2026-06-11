'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

const getPreferredTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light'

    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const subscribeToTheme = (callback: () => void) => {
    if (typeof window === 'undefined') return () => {}

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const notify = () => callback()

    window.addEventListener('storage', notify)
    window.addEventListener('portfolio-theme-change', notify)
    mediaQuery.addEventListener('change', notify)

    return () => {
        window.removeEventListener('storage', notify)
        window.removeEventListener('portfolio-theme-change', notify)
        mediaQuery.removeEventListener('change', notify)
    }
}

export default function ThemeToggle() {
    const theme = useSyncExternalStore(subscribeToTheme, getPreferredTheme, () => 'light')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const isDark = theme === 'dark'
    const nextTheme = isDark ? 'light' : 'dark'
    const updateTheme = () => {
        window.localStorage.setItem(STORAGE_KEY, nextTheme)
        window.dispatchEvent(new Event('portfolio-theme-change'))
    }

    return (
        <motion.button
            type="button"
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            onClick={updateTheme}
            className="absolute right-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--toggle-shadow)] outline-none transition-colors hover:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <span className="sr-only">Toggle color theme</span>
            <motion.span
                className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"
                layout
                transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={theme}
                        initial={{ rotate: -35, opacity: 0, y: 4 }}
                        animate={{ rotate: 0, opacity: 1, y: 0 }}
                        exit={{ rotate: 35, opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                    >
                        {isDark ? <Moon size={16} /> : <Sun size={16} />}
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </motion.button>
    )
}
