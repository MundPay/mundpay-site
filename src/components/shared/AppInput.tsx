import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'
import { Input } from '../ui/input'

type AppInputProps = ComponentProps<typeof Input>

export function AppInput({ className, ...props }: AppInputProps) {
  return (
    <Input
      className={cn(
        'h-13 rounded-[9px] border-[#EAEEE4]/15 bg-black/20 px-3.5 font-space-grotesk text-[15px] text-[#EAEEE4] placeholder:text-[#EAEEE4]/45 focus-visible:border-[#A2D035]/65 focus-visible:ring-[#A2D035]/15 disabled:bg-black/20',
        className,
      )}
      {...props}
    />
  )
}
