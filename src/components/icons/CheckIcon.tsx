import type { SVGProps } from 'react'

type CheckIconProps = SVGProps<SVGSVGElement>

export function CheckIcon(props: CheckIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m5.6 8 1.5 1.5 3.2-3.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
