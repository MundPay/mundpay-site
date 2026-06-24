import type { SVGProps } from 'react'

type PlusCircleIconProps = SVGProps<SVGSVGElement>

export function PlusCircleIcon(props: PlusCircleIconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 1.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M6 3.8v4.4M3.8 6h4.4"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
