import type { SVGProps } from 'react'

type FinancialWalletIconProps = SVGProps<SVGSVGElement>

export function FinancialWalletIcon(props: FinancialWalletIconProps) {
  return (
    <svg viewBox="-1 -1 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M0 4C0 3.64638 0.140476 3.30724 0.390524 3.05719C0.640573 2.80714 0.979711 2.66667 1.33333 2.66667H10.6667C11.0203 2.66667 11.3594 2.80714 11.6095 3.05719C11.8595 3.30724 12 3.64638 12 4M0 5.33333H2C2.53333 5.33333 3.06667 5.53333 3.4 5.93333L4.13333 6.53333C5.2 7.6 6.86667 7.6 7.93333 6.53333L8.66667 5.93333C9 5.6 9.53333 5.33333 10.0667 5.33333H12M1.33333 0H10.6667C11.403 0 12 0.596954 12 1.33333V10.6667C12 11.403 11.403 12 10.6667 12H1.33333C0.596954 12 0 11.403 0 10.6667V1.33333C0 0.596954 0.596954 0 1.33333 0Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
