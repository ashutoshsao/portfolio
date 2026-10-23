export default function Section({
  id,
  index,
  label,
  children,
}: {
  id?: string
  index: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section id={id ?? label.toLowerCase().replace(/\s+/g, '-')} className="grid scroll-mt-16 gap-8 sm:gap-10">
      <div className="flex items-baseline gap-3" data-reveal>
        <span className="font-mono text-[14px] font-medium tracking-[0.12em] text-[var(--accent)]">
          {index}
        </span>
        <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-[34px]">
          {label}
        </h2>
        <span aria-hidden className="ml-1 h-px flex-1 self-center bg-[var(--line)]" />
      </div>
      {children}
    </section>
  )
}
