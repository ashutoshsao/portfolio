import type { WorkItem } from '@/data/site'

function Row({ item }: { item: WorkItem }) {
  return (
    <article className="grid gap-2.5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-[18px] font-semibold tracking-tight text-[var(--ink)]">
          {item.code ? (
            <a
              href={item.live ?? item.code}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link no-underline hover:underline"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        {item.status && (
          <span className="serif text-[17px] italic text-[var(--accent)]">
            {item.status}
          </span>
        )}
        <span className="ml-auto font-mono text-[13px] text-[var(--faint)]">
          {item.year}
        </span>
      </div>

      <p className="text-[16px] leading-[1.75] text-[var(--muted)]">
        {item.description}
      </p>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-[13px] text-[var(--faint)]">
          {item.stack.join(' · ')}
        </span>
        <span className="flex gap-3 font-mono text-[13.5px]">
          {item.live && (
            <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
              live ↗
            </a>
          )}
          {item.code && (
            <a href={item.code} target="_blank" rel="noopener noreferrer" className="link">
              code ↗
            </a>
          )}
        </span>
      </div>
    </article>
  )
}

export default function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-9">
      {items.map((item) => (
        <Row key={item.title} item={item} />
      ))}
    </div>
  )
}
