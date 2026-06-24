import type { SVGProps } from 'react'

type MockupTrendIconProps = SVGProps<SVGSVGElement>

export function MockupTrendIcon({ className = 'h-[12px] w-[22px]', ...props }: MockupTrendIconProps) {
  return (
    <svg viewBox="0 0 22 12" className={className} fill="none" aria-hidden="true" {...props}>
      <path d="m2 9 5-5 4 3 7-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 1h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
