import type { SVGProps } from 'react'

type ListLinesIconProps = SVGProps<SVGSVGElement>

export function ListLinesIcon(props: ListLinesIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 4h6M6.5 8h6M6.5 12h6M3.5 4h.01M3.5 8h.01M3.5 12h.01"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
