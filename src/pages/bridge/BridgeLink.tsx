import type { ReactNode } from 'react'
import { BridgeArrowIcon } from './icons/BridgeArrowIcon'

type BridgeLinkProps = {
  children: ReactNode
  className: string
  href: string
  external?: boolean
}

export function BridgeLink({ children, className, href, external }: BridgeLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span>{children}</span>
      <span className="arr">
        <BridgeArrowIcon />
      </span>
    </a>
  )
}
