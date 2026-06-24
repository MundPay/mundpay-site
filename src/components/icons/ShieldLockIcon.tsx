import type { SVGProps } from 'react'

type ShieldLockIconProps = SVGProps<SVGSVGElement>

export function ShieldLockIcon(props: ShieldLockIconProps) {
  return (
    <svg viewBox="0 0 26 30" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 .25 24.6 3.35c.78.21 1.32.92 1.32 1.73v11.75c0 3.45-1.86 6.67-4.84 8.39L13 29.9l-8.08-4.67A9.69 9.69 0 0 1 .08 16.83V5.08c0-.8.55-1.52 1.33-1.73L13 .25Zm7 23.1a7.52 7.52 0 0 0 3.77-6.52V5.36L13 2.47 2.23 5.36v11.47A7.52 7.52 0 0 0 6 23.35l7 4.04 7-4.04ZM8.7 12.88V11.4a4.3 4.3 0 0 1 8.61 0v1.48c.82.16 1.44.89 1.44 1.76v4.31c0 .99-.81 1.79-1.8 1.79h-7.9c-.99 0-1.8-.8-1.8-1.79v-4.31c0-.87.62-1.6 1.45-1.76ZM9.4 15v3.59h7.19V15H9.4Zm5.75-2.15v-1.44a2.15 2.15 0 0 0-4.31 0v1.44h4.31Z"
        fill="currentColor"
      />
    </svg>
  )
}
