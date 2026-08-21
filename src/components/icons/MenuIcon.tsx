import type { SVGProps } from 'react'

type MenuIconProps = SVGProps<SVGSVGElement>

export function MenuIcon(props: MenuIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 6h14M3 14h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
