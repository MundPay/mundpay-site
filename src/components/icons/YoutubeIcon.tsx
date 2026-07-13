import type { SVGProps } from 'react'

type YoutubeIconProps = SVGProps<SVGSVGElement>

export function YoutubeIcon(props: YoutubeIconProps) {
  return (
    <svg viewBox="0 0 20 16" aria-hidden="true" {...props}>
      <path
        d="M11.667 1.333L8.333 1.333C6 1.333 4.833 1.333 3.942 1.787C3.158 2.187 2.52 2.824 2.121 3.608C1.667 4.5 1.667 5.666 1.667 8C1.667 10.333 1.667 11.5 2.121 12.392C2.52 13.176 3.158 13.813 3.942 14.212C4.833 14.667 6 14.667 8.333 14.667L11.667 14.667C14 14.667 15.167 14.667 16.058 14.212C16.842 13.813 17.48 13.176 17.879 12.392C18.333 11.5 18.333 10.333 18.333 8C18.333 5.666 18.333 4.5 17.879 3.608C17.48 2.824 16.842 2.187 16.058 1.787C15.167 1.333 14 1.333 11.667 1.333Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.28"
      />
      <path
        d="M6.484 3.276C7.044 3.596 7.044 4.404 6.484 4.724L3.163 6.621C2.608 6.938 1.917 6.537 1.917 5.897L1.917 2.103C1.917 1.463 2.608 1.062 3.163 1.379Z"
        transform="translate(6 4)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
