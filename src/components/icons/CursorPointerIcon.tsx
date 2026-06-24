import type { SVGProps } from 'react'

type CursorPointerIconProps = SVGProps<SVGSVGElement>

export function CursorPointerIcon(props: CursorPointerIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 3.5 18.5 13 12.5 14.2 9.5 20.2 5 3.5Z"
        fill="white"
        stroke="#18181B"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
