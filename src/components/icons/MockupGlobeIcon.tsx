import type { SVGProps } from 'react'

type MockupGlobeIconProps = SVGProps<SVGSVGElement>

export function MockupGlobeIcon({ className = 'size-[20px]', ...props }: MockupGlobeIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3.8 12h16.4M12 3.5c2.3 2.3 3.4 5.1 3.4 8.5s-1.1 6.2-3.4 8.5c-2.3-2.3-3.4-5.1-3.4-8.5s1.1-6.2 3.4-8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
