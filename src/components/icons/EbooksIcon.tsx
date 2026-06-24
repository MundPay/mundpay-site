import type { SVGProps } from 'react'

type EbooksIconProps = SVGProps<SVGSVGElement>

export function EbooksIcon({ className = 'h-[22px] w-[18px]', ...props }: EbooksIconProps) {
  return (
    <svg viewBox="-1 -1 18 22" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 1.5C2.05964 1.5 1.5 2.05964 1.5 2.75V14.7999C1.87503 14.6081 2.29989 14.5 2.75 14.5H14.5V1.5H2.75ZM14.5 16H2.75C2.05964 16 1.5 16.5596 1.5 17.25C1.5 17.9404 2.05964 18.5 2.75 18.5H14.5V16ZM0 17.25V2.75C0 1.23122 1.23122 0 2.75 0H16V20H2.75C1.23122 20 0 18.7688 0 17.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
