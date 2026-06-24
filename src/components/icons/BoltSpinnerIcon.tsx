import type { SVGProps } from 'react'

type BoltSpinnerIconProps = SVGProps<SVGSVGElement>

export function BoltSpinnerIcon(props: BoltSpinnerIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 2v2M8 12v2M3.75 3.75l1.4 1.4M10.85 10.85l1.4 1.4M2 8h2M12 8h2M3.75 12.25l1.4-1.4M10.85 5.15l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
