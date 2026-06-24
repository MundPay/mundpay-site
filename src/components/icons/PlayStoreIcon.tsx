import type { SVGProps } from 'react'

type PlayStoreIconProps = SVGProps<SVGSVGElement>

export function PlayStoreIcon(props: PlayStoreIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.5 3.6v16.8l9-8.4-9-8.4Zm9.7 7.7 2.3-2.1L6.4 3.4l7.8 7.9Zm0 1.4-7.8 7.9 10.1-5.8-2.3-2.1Zm3.3-2.9-2.6 2.2 2.6 2.2 1.5-.9c1.3-.7 1.3-1.9 0-2.6l-1.5-.9Z"
      />
    </svg>
  )
}
