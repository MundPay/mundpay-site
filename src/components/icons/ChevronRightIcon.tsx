import type { SVGProps } from 'react'

type ChevronRightIconProps = SVGProps<SVGSVGElement>

export function ChevronRightIcon(props: ChevronRightIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
