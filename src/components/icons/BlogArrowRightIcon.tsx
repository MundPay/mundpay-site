import type { SVGProps } from 'react'

type BlogArrowRightIconProps = SVGProps<SVGSVGElement>

export function BlogArrowRightIcon(props: BlogArrowRightIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
