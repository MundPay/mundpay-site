import type { SVGProps } from 'react'

type TagOutlineIconProps = SVGProps<SVGSVGElement>

export function TagOutlineIcon(props: TagOutlineIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.2 4.2h.01M8.2 2.5H3.5v4.7l5 5a1.2 1.2 0 0 0 1.7 0l2.9-2.9a1.2 1.2 0 0 0 0-1.7l-4.9-5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
