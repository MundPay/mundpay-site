import type { SVGProps } from 'react'

type MembersCapIconProps = SVGProps<SVGSVGElement>

export function MembersCapIcon(props: MembersCapIconProps) {
  return (
    <svg viewBox="-1 -1 16 12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.6668 3.66659V7.66659M13.6668 3.66659L7.00016 0.333252L0.333496 3.66659L7.00016 6.99992L13.6668 3.66659ZM3.00016 4.99992V8.33325C5.00016 10.3333 9.00016 10.3333 11.0002 8.33325V4.99992"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
