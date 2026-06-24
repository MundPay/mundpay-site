import type { SVGProps } from 'react'

type FacebookIconProps = SVGProps<SVGSVGElement>

export function FacebookIcon(props: FacebookIconProps) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" {...props}>
      <path
        d="M9.45 14V8.25h1.85a.8.8 0 0 0 0-1.6H9.45v-.9c0-.9.28-1.22 1.2-1.22h.5a.8.8 0 1 0 0-1.6h-.56c-1.85 0-2.85.92-2.85 2.82v.9H6.6a.8.8 0 0 0 0 1.6h1.14V14Z"
        fill="currentColor"
      />
    </svg>
  )
}
