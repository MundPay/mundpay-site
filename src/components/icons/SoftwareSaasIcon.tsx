import type { SVGProps } from 'react'

type SoftwareSaasIconProps = SVGProps<SVGSVGElement>

export function SoftwareSaasIcon({ className = 'h-[19px] w-5', ...props }: SoftwareSaasIconProps) {
  return (
    <svg viewBox="0 0 20 19" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 1.5C3.06 1.5 2.5 2.06 2.5 2.75V13.5H11.5V15H1.5V15.25C1.5 15.94 2.06 16.5 2.75 16.5H11.5V18H2.75C1.235 18 0 16.765 0 15.25V13.5H1V2.75C1 1.235 2.235 0 3.75 0H16.25C17.765 0 19 1.235 19 2.75V6.5H17.5V2.75C17.5 2.06 16.94 1.5 16.25 1.5H3.75ZM14.25 8H18.75C19.44 8 20 8.56 20 9.25V17.75C20 18.44 19.44 19 18.75 19H14.25C13.56 19 13 18.44 13 17.75V9.25C13 8.56 13.56 8 14.25 8ZM14.5 17.5H18.5V9.5H14.5V17.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
