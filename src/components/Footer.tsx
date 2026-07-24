import CopyEmail from '@/components/CopyEmail'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--line)] pt-7">
      <p className="serif text-[16px] italic text-[var(--faint)]">
        {site.name} — {site.location}
      </p>
      <CopyEmail />
    </footer>
  )
}
