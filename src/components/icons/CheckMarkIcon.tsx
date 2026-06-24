import type { SVGProps } from 'react'

type CheckMarkIconProps = SVGProps<SVGSVGElement>

export function CheckMarkIcon(props: CheckMarkIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 8.2 6.4 11 12.5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
