import type { SVGProps } from 'react'

type SubscriptionsCycleIconProps = SVGProps<SVGSVGElement>

export function SubscriptionsCycleIcon(props: SubscriptionsCycleIconProps) {
  return (
    <svg viewBox="-1 -1 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.32263 0.00631007 2.71265 0.660816 1.50667 1.82667L0 3.33333M0 3.33333V0M0 3.33333H3.33333M0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C7.67737 11.9937 9.28735 11.3392 10.4933 10.1733L12 8.66667M12 8.66667H8.66667M12 8.66667V12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
