import type { ReactNode } from 'react'

type RefundPolicySectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function RefundPolicySection({ id, title, children }: RefundPolicySectionProps) {
  return (
    <section aria-labelledby={id} className="min-w-0">
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}
