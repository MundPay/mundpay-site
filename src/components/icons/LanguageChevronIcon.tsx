import type { SVGProps } from 'react'

type LanguageChevronIconProps = SVGProps<SVGSVGElement>

export function LanguageChevronIcon(props: LanguageChevronIconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 4.5L6 8.5L10 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
