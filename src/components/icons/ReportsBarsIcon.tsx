import type { SVGProps } from 'react'

type ReportsBarsIconProps = SVGProps<SVGSVGElement>

export function ReportsBarsIcon(props: ReportsBarsIconProps) {
  return (
    <svg viewBox="-1 -1 10 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 11.3334V4.66675M8 11.3334V0.666748M0 11.3334V8.66675"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
