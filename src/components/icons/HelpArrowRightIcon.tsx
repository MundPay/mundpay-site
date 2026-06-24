import type { SVGProps } from 'react'

type HelpArrowRightIconProps = SVGProps<SVGSVGElement>

export function HelpArrowRightIcon(props: HelpArrowRightIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
