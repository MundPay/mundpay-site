import type { SVGProps } from 'react'

type XMarkIconProps = SVGProps<SVGSVGElement>

export function XMarkIcon(props: XMarkIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 5l6 6M11 5l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
