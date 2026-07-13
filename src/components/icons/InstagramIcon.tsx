import type { SVGProps } from 'react'

type InstagramIconProps = SVGProps<SVGSVGElement>

export function InstagramIcon(props: InstagramIconProps) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" {...props}>
      <path
        d="M1.833 5.016C1.539 5.858 1.539 6.905 1.539 9C1.539 11.095 1.539 12.142 1.833 12.984C2.361 14.492 3.547 15.678 5.055 16.205C5.897 16.5 6.944 16.5 9.039 16.5C11.133 16.5 12.181 16.5 13.023 16.205C14.531 15.678 15.716 14.492 16.244 12.984C16.539 12.142 16.539 11.095 16.539 9C16.539 6.905 16.539 5.858 16.244 5.016C15.716 3.508 14.531 2.322 13.023 1.795C12.181 1.5 11.133 1.5 9.039 1.5C6.944 1.5 5.897 1.5 5.055 1.795C3.547 2.322 2.361 3.508 1.833 5.016Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.28"
      />
      <path
        d="M9.205 1.833L9.214 1.833M8.187 5.533C8.285 6.195 8.172 6.872 7.863 7.466C7.555 8.06 7.067 8.542 6.469 8.843C5.871 9.144 5.194 9.248 4.533 9.142C3.872 9.036 3.262 8.724 2.788 8.25C2.315 7.777 2.003 7.167 1.897 6.506C1.79 5.845 1.895 5.167 2.196 4.569C2.497 3.972 2.979 3.484 3.573 3.175C4.167 2.867 4.843 2.754 5.505 2.852C6.181 2.952 6.806 3.267 7.289 3.75C7.772 4.233 8.086 4.858 8.187 5.533Z"
        transform="translate(3.5 3.5)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
