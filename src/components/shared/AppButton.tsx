import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'

type AppButtonProps = ComponentProps<typeof Button>

export function AppButton({ className, ...props }: AppButtonProps) {
  return (
    <Button
      className={cn(
        'h-12 w-full cursor-pointer rounded-[9px] bg-[#A2D035] font-space-grotesk text-[15px] font-bold uppercase tracking-[-0.02em] text-[#050700] shadow-[0_0_24px_rgba(162,208,53,0.14)] hover:bg-[#ADE331] focus-visible:border-[#A2D035] focus-visible:ring-[#A2D035]/25 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  )
}
