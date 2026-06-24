import type { SVGProps } from 'react'

type MentorshipsIconProps = SVGProps<SVGSVGElement>

export function MentorshipsIcon({ className = 'h-[10px] w-5', ...props }: MentorshipsIconProps) {
  return (
    <svg viewBox="0 0 20 10" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M15.75 0.75C14.37 0.75 13.145 1.415 12.37 2.435C10.85 1.865 9.15 1.865 7.63 2.435C6.855 1.415 5.63 0.75 4.25 0.75C1.905 0.75 0 2.655 0 5C0 7.345 1.905 9.25 4.25 9.25C6.595 9.25 8.5 7.345 8.5 5C8.5 4.575 8.435 4.165 8.32 3.78C9.405 3.415 10.595 3.415 11.68 3.78C11.565 4.165 11.5 4.575 11.5 5C11.5 7.345 13.405 9.25 15.75 9.25C18.095 9.25 20 7.345 20 5C20 2.655 18.095 0.75 15.75 0.75ZM4.25 7.75C2.735 7.75 1.5 6.515 1.5 5C1.5 3.485 2.735 2.25 4.25 2.25C5.765 2.25 7 3.485 7 5C7 6.515 5.765 7.75 4.25 7.75ZM15.75 7.75C14.235 7.75 13 6.515 13 5C13 3.485 14.235 2.25 15.75 2.25C17.265 2.25 18.5 3.485 18.5 5C18.5 6.515 17.265 7.75 15.75 7.75Z"
        fill="currentColor"
      />
    </svg>
  )
}
