import type { SVGProps } from 'react'

type CardIconProps = SVGProps<SVGSVGElement>

export function CardIcon(props: CardIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.2"
        y="5.2"
        width="13.6"
        height="9.6"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3.8 8.2h12.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
