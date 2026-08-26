import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

type DrawerDirection = 'top' | 'right' | 'bottom' | 'left'
type DrawerTone = 'dark' | 'light'

type AppDrawerProps = {
  children: ReactNode
  className?: string
  direction?: DrawerDirection
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
  tone?: DrawerTone
  trigger: ReactNode
}

export function AppDrawer({
  children,
  className,
  direction = 'left',
  onOpenChange,
  open,
  title,
  tone = 'dark',
  trigger,
}: AppDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction={direction}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent
        className={cn(
          'border-[#EAEEE4]/10 bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] text-[#EAEEE4] shadow-[0_16px_48px_rgba(0,0,0,0.28)]',
          'data-[vaul-drawer-direction=bottom]:max-h-[85dvh] data-[vaul-drawer-direction=bottom]:rounded-t-[32px] data-[vaul-drawer-direction=bottom]:border-x-0 data-[vaul-drawer-direction=bottom]:border-b-0 data-[vaul-drawer-direction=bottom]:px-4 data-[vaul-drawer-direction=bottom]:pb-[max(24px,env(safe-area-inset-bottom))] data-[vaul-drawer-direction=bottom]:pt-0',
          'data-[vaul-drawer-direction=left]:w-[min(88vw,360px)] data-[vaul-drawer-direction=left]:max-w-none data-[vaul-drawer-direction=left]:rounded-r-[32px] data-[vaul-drawer-direction=left]:border-y-0 data-[vaul-drawer-direction=left]:border-l-0 data-[vaul-drawer-direction=left]:px-4 data-[vaul-drawer-direction=left]:pb-[max(24px,env(safe-area-inset-bottom))] data-[vaul-drawer-direction=left]:pt-[max(24px,env(safe-area-inset-top))]',
          'data-[vaul-drawer-direction=right]:w-[min(88vw,360px)] data-[vaul-drawer-direction=right]:max-w-none data-[vaul-drawer-direction=right]:rounded-l-[32px] data-[vaul-drawer-direction=right]:border-y-0 data-[vaul-drawer-direction=right]:border-r-0 data-[vaul-drawer-direction=right]:px-4 data-[vaul-drawer-direction=right]:pb-[max(24px,env(safe-area-inset-bottom))] data-[vaul-drawer-direction=right]:pt-[max(24px,env(safe-area-inset-top))]',
          'data-[vaul-drawer-direction=top]:max-h-[85dvh] data-[vaul-drawer-direction=top]:rounded-b-[32px] data-[vaul-drawer-direction=top]:border-x-0 data-[vaul-drawer-direction=top]:border-t-0 data-[vaul-drawer-direction=top]:px-4 data-[vaul-drawer-direction=top]:pb-6 data-[vaul-drawer-direction=top]:pt-[max(24px,env(safe-area-inset-top))]',
          '[&>div:first-child]:mt-3 [&>div:first-child]:h-1 [&>div:first-child]:w-12 [&>div:first-child]:bg-[#EAEEE4]/20',
          tone === 'light' &&
            'border-[#050700]/10 bg-[#EAEEE4] text-[#050700] [&>div:first-child]:bg-[#050700]/20',
          className,
        )}
      >
        <DrawerHeader className="sr-only">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}
