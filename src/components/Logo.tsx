/* eslint-disable @next/next/no-img-element -- 18px favicons; next/image adds nothing here */

const logos: Record<string, string> = {
  Orin: '/logos/orin.svg',
  Nebula: '/logos/nebula.svg',
  Ardin: '/logos/ardin.svg',
  'Super30 - 100xSchool': '/logos/100xschool.in.png',
  'Palisadoes Foundation': '/logos/palisadoes.org.png',
  'Superteam SuperDevs': '/logos/superteam.fun.png',
  'Superteam Earn prize': '/logos/superteam.fun.png',
  'merged open-source PRs': '/logos/github.com.png',
}

// An 18px mark beside a name; names without one get their first letter on a tile.
export default function Logo({ name }: { name: string }) {
  const src = logos[name]
  if (!src)
    return (
      <span aria-hidden className="logo logo-letter">
        {name[0]}
      </span>
    )
  return <img src={src} alt="" aria-hidden width={18} height={18} className="logo" />
}
