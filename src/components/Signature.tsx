import { site } from '@/data/site'

const W = 269
const H = 161

// The name in Corinthia (OFL), outlined to /signature.svg and set rising like a signed name.
// A thin stroke over the fill keeps its hairlines solid at small sizes; both follow currentColor.
export default function Signature({ width }: { width: number }) {
  return (
    <svg
      role="img"
      aria-label={site.name}
      viewBox={`0 0 ${W} ${H}`}
      width={width}
      height={Math.round((width * H) / W)}
      className="block"
    >
      <use
        href="/signature.svg#s"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={(0.7 * W) / width}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
