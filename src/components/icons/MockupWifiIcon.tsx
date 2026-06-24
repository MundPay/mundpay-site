import type { SVGProps } from 'react'

type MockupWifiIconProps = SVGProps<SVGSVGElement>

export function MockupWifiIcon({ className = 'h-[9px] w-[12px]', ...props }: MockupWifiIconProps) {
  return (
    <svg viewBox="0 0 24 18" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7.1a11.3 11.3 0 0 1 16 0M7.4 10.5a6.5 6.5 0 0 1 9.2 0M10.6 13.8a2 2 0 0 1 2.8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
