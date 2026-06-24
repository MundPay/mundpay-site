import type { SVGProps } from 'react'

type InstagramIconProps = SVGProps<SVGSVGElement>

export function InstagramIcon(props: InstagramIconProps) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" {...props}>
      <path
        d="M1.8 5.05C1.5 5.9 1.5 6.94 1.5 9s0 3.1.3 3.95c.53 1.5 1.7 2.68 3.2 3.2.86.3 1.9.3 4 .3s3.14 0 4-.3c1.5-.52 2.67-1.7 3.2-3.2.3-.86.3-1.9.3-3.95s0-3.1-.3-3.95c-.53-1.5-1.7-2.68-3.2-3.2-.86-.3-1.9-.3-4-.3s-3.14 0-4 .3c-1.5.52-2.67 1.7-3.2 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12.75 4.7h.01M11.25 9.35a2.7 2.7 0 1 1-5.39-.7 2.7 2.7 0 0 1 5.39.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.35"
      />
    </svg>
  )
}
