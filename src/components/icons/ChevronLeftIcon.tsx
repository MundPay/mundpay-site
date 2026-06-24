import type { SVGProps } from 'react'

type ChevronLeftIconProps = SVGProps<SVGSVGElement>

export function ChevronLeftIcon(props: ChevronLeftIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
