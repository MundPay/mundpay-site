import type { SVGProps } from 'react'

type ReferSparkIconProps = SVGProps<SVGSVGElement>

export function ReferSparkIcon(props: ReferSparkIconProps) {
  return (
    <svg viewBox="-1 -1 15 15" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.71419 9.71399L12.5429 12.5427M3.79219 0.492676L4.31019 2.42401M2.42419 4.31001L0.492188 3.79201M8.30019 1.70001L6.88552 3.11468M3.11419 6.88534L1.70085 8.30001M5.00016 5L8.3335 13L9.51616 9.516L13.0002 8.33333L5.00016 5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
