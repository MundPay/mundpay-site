import type { SVGProps } from 'react'

type PixIconProps = SVGProps<SVGSVGElement>

export function PixIcon(props: PixIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 2.8 13.4 6.2 10 9.6 6.6 6.2 10 2.8ZM3 10l3.4-3.4L9.8 10l-3.4 3.4L3 10Zm7 0 3.4-3.4L16.8 10l-3.4 3.4L10 10Zm0 .4 3.4 3.4L10 17.2l-3.4-3.4L10 10.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
