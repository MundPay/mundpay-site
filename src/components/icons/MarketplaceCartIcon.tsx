import type { SVGProps } from 'react'

type MarketplaceCartIconProps = SVGProps<SVGSVGElement>

export function MarketplaceCartIcon(props: MarketplaceCartIconProps) {
  return (
    <svg viewBox="-1 -1 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M0.366699 0.366699H1.70003L3.47337 8.6467C3.53842 8.94994 3.70715 9.22102 3.95051 9.41327C4.19387 9.60553 4.49664 9.70693 4.8067 9.70003H11.3267C11.6301 9.69954 11.9244 9.59556 12.1607 9.40526C12.3971 9.21495 12.5615 8.94972 12.6267 8.65337L13.7267 3.70003H2.41337M5 13C5 13.3682 4.70152 13.6667 4.33333 13.6667C3.96514 13.6667 3.66667 13.3682 3.66667 13C3.66667 12.6318 3.96514 12.3333 4.33333 12.3333C4.70152 12.3333 5 12.6318 5 13ZM12.3333 13C12.3333 13.3682 12.0349 13.6667 11.6667 13.6667C11.2985 13.6667 11 13.3682 11 13C11 12.6318 11.2985 12.3333 11.6667 12.3333C12.0349 12.3333 12.3333 12.6318 12.3333 13Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
