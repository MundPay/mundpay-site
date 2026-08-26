import type { ReactNode } from 'react'
import { XMarkIcon } from '../icons/XMarkIcon'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

type AppDialogProps = {
  children: ReactNode
  closeLabel: string
  description?: string
  headerContent?: ReactNode
  hideIntro?: boolean
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
}

export function AppDialog({
  children,
  closeLabel,
  description,
  headerContent,
  hideIntro = false,
  onOpenChange,
  open,
  title,
}: AppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100dvh-2rem)] w-full max-w-[430px] gap-0 overflow-y-auto rounded-[18px] border border-[#A2D035]/35 bg-[radial-gradient(circle_at_top,rgba(162,208,53,0.14),transparent_34%),linear-gradient(180deg,#10150B_0%,#09090B_34%,#050700_100%)] p-6 text-[#EAEEE4] shadow-[0_0_0_6px_rgba(162,208,53,0.05),0_28px_90px_rgba(0,0,0,0.7)] ring-0 sm:p-7"
      >
        <DialogClose asChild>
          <button
            type="button"
            aria-label={closeLabel}
            className="absolute right-4 top-4 flex size-9 cursor-pointer items-center justify-center rounded-full text-[#EAEEE4]/75 transition hover:bg-[#EAEEE4]/5 hover:text-[#EAEEE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2D035]"
          >
            <XMarkIcon className="size-6" />
          </button>
        </DialogClose>

        <DialogHeader className="items-center gap-3 px-8 text-center">
          {headerContent}
          <DialogTitle
            className={
              hideIntro
                ? 'sr-only'
                : 'font-rethink-sans text-[26px] font-bold uppercase leading-tight tracking-[-0.04em] text-[#EAEEE4]'
            }
          >
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription
              className={
                hideIntro
                  ? 'sr-only'
                  : 'font-space-grotesk text-[14px] leading-normal text-[#EAEEE4]/65'
              }
            >
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        <div className="mt-6">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
