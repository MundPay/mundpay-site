import type { SVGProps } from 'react'

type MockupCheckIconProps = SVGProps<SVGSVGElement>

export function MockupCheckIcon({ className = 'h-[12px] w-[22px]', ...props }: MockupCheckIconProps) {
  return (
    <svg viewBox="0 0 22 12" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="m2 6 3 3 6-6M10 8l2 2 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
