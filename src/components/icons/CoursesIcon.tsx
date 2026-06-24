import type { SVGProps } from 'react'

type CoursesIconProps = SVGProps<SVGSVGElement>

export function CoursesIcon({ className = 'h-5 w-[18px]', ...props }: CoursesIconProps) {
  return (
    <svg viewBox="0 0 18 20" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M16.75 1H9.75V0H8.25V1H1.25C0.56 1 0 1.56 0 2.25V13.25C0 13.94 0.56 14.5 1.25 14.5H4.135L1.37 18.845L2.635 19.65L5.915 14.495H8.255V19.995H9.755V14.495H12.095L15.375 19.65L16.64 18.845L13.875 14.5H16.76C17.45 14.5 18.01 13.94 18.01 13.25V2.25C18.01 1.56 17.45 1 16.76 1H16.75ZM16.5 13H1.5V2.5H16.5V13Z"
        fill="currentColor"
      />
    </svg>
  )
}
