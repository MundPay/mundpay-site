import type { SVGProps } from 'react'

type MockupBatteryIconProps = SVGProps<SVGSVGElement>

export function MockupBatteryIcon({ className = 'h-[8px] w-[13px]', ...props }: MockupBatteryIconProps) {
  return (
    <svg viewBox="0 0 22 14" className={className} fill="none" aria-hidden="true" {...props}>
      <rect x="1" y="2.5" width="16" height="9" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M19 5.2v3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="4" y="5" width="4" height="4" rx="1" fill="currentColor" opacity=".8" />
      <rect x="9" y="5" width="4" height="4" rx="1" fill="currentColor" opacity=".8" />
    </svg>
  )
}
