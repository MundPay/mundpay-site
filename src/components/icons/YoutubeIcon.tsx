import type { SVGProps } from 'react'

type YoutubeIconProps = SVGProps<SVGSVGElement>

export function YoutubeIcon(props: YoutubeIconProps) {
  return (
    <svg viewBox="0 0 20 16" aria-hidden="true" {...props}>
      <path
        d="M11.67 1.33H8.33c-2.33 0-3.5 0-4.39.46A4.16 4.16 0 0 0 2.12 3.6C1.67 4.5 1.67 5.67 1.67 8s0 3.5.45 4.4a4.16 4.16 0 0 0 1.82 1.81c.89.46 2.06.46 4.39.46h3.34c2.33 0 3.5 0 4.39-.46a4.16 4.16 0 0 0 1.82-1.81c.45-.9.45-2.07.45-4.4s0-3.5-.45-4.4a4.16 4.16 0 0 0-1.82-1.81c-.89-.46-2.06-.46-4.39-.46Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8.25 5.65v4.7L12.35 8Z" fill="currentColor" />
    </svg>
  )
}
