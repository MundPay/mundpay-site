import type { ComponentType, ReactNode, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'

type SuccessPlatformCardProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  translationKey: string
}

export function SuccessPlatformCard({ Icon, translationKey }: SuccessPlatformCardProps) {
  const { t } = useTranslation()

  return (
    <article className="relative flex min-h-[140px] flex-col justify-between border-r border-b border-[#EAEEE4]/10 px-5 py-6 min-[811px]:min-h-[160px] min-[811px]:px-7 min-[811px]:py-8 min-[1201px]:h-[186px] min-[1201px]:px-[30px] min-[1201px]:py-[37px] [&:nth-child(2n)]:border-r-0 [&:nth-child(n+7)]:border-b-0 min-[1201px]:[&:nth-child(2n)]:border-r min-[1201px]:[&:nth-child(4n)]:border-r-0 min-[1201px]:[&:nth-child(n+5)]:border-b-0">
      <IconBox>
        <Icon />
      </IconBox>
      <h3 className="text-wrap font-rethink-sans text-[16px] font-bold leading-[1.2] tracking-[-0.04em] text-[#EAEEE4]/75 min-[811px]:text-[18px] min-[1201px]:text-[20px]">
        {t(`home.successPlatform.items.${translationKey}`)}
      </h3>
    </article>
  )
}

function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-9 items-center justify-center bg-white/[0.06] text-[#A2D035] min-[1201px]:size-10">
      {children}
    </div>
  )
}
