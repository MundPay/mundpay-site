import type { SVGProps } from 'react'

type DigitalProductsIconProps = SVGProps<SVGSVGElement>

export function DigitalProductsIcon({ className = 'h-[22px] w-[18px]', ...props }: DigitalProductsIconProps) {
  return (
    <svg viewBox="-1 -1 18 22" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.25C0 0.559644 0.559644 0 1.25 0H14.75C15.4404 0 16 0.559644 16 1.25V5.25C16 5.94036 15.4404 6.5 14.75 6.5H14.5V18.75C14.5 19.4404 13.9404 20 13.25 20H2.75C2.05964 20 1.5 19.4404 1.5 18.75V6.5H1.25C0.559645 6.5 0 5.94036 0 5.25V1.25ZM3 9.5V15.5H6V9.5H3ZM3 17H7.5V8H3V6.5H13V18.5H3V17ZM14.5 5H1.5V1.5H14.5V5Z"
        fill="currentColor"
      />
    </svg>
  )
}
