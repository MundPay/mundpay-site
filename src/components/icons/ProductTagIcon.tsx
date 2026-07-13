import type { SVGProps } from 'react'

type ProductTagIconProps = SVGProps<SVGSVGElement>

export function ProductTagIcon(props: ProductTagIconProps) {
  return (
    <svg viewBox="-1 -1 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.66683 3.66659H3.6735M7.00016 0.333252H0.333496V6.99992L6.52683 13.1933C7.1535 13.8199 8.18016 13.8199 8.80683 13.1933L13.1935 8.80659C13.8202 8.17992 13.8202 7.15325 13.1935 6.52659L7.00016 0.333252Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
