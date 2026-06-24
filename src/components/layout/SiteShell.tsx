import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SiteShellProps = {
  children: ReactNode
  className?: string
}

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <main
      className={twMerge(
        'min-h-screen overflow-x-clip bg-[#050700] text-white',
        className,
      )}
    >
      {children}
    </main>
  )
}
