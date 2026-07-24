export default function Section({
  index,
  label,
  children,
}: {
  index: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-5">
      <div className="flex items-baseline gap-3">
        <span className="kicker text-[var(--accent)]" style={{ color: 'var(--accent)' }}>
          {index}
        </span>
        <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--ink)]">
          {label}
        </h2>
        <span aria-hidden className="ml-1 h-px flex-1 self-center bg-[var(--line)]" />
      </div>
      {children}
    </section>
  )
}
