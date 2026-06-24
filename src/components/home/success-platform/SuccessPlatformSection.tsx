import { useTranslation } from 'react-i18next'
import { SuccessPlatformCard } from './SuccessPlatformCard'
import { successItems } from './successPlatformData'

export function SuccessPlatformSection() {
  const { t } = useTranslation()

  return (
    <section className="relative z-[2] w-full overflow-hidden border-b border-[#EAEEE4]/10 bg-[#050700] text-[#EAEEE4]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col px-4 py-20 min-[811px]:px-8 min-[1201px]:h-[704px] min-[1201px]:px-0 min-[1201px]:py-0 min-[1201px]:pt-[104px]">
        <header className="grid grid-cols-1 items-start gap-6 min-[811px]:grid-cols-2 min-[1201px]:grid-cols-[560px_560px]">
          <h2 className="font-rethink-sans text-[30px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4] min-[811px]:text-[34px] min-[1201px]:text-[40px]">
            {t('home.successPlatform.title.lineOne')}
            <br />
            {t('home.successPlatform.title.lineTwo')}
          </h2>
          <p className="max-w-[520px] font-space-grotesk text-[16px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#EAEEE4]/70 min-[811px]:justify-self-end min-[811px]:pt-[10px] min-[1201px]:max-w-[420px] min-[1201px]:pt-[16px] min-[1201px]:text-[18px]">
            {t('home.successPlatform.description')}
          </p>
        </header>

        <div className="mt-10 grid w-full grid-cols-2 border border-[#EAEEE4]/10 min-[811px]:mt-[48px] min-[1201px]:mt-[56px] min-[1201px]:h-[372px] min-[1201px]:grid-cols-4 min-[1201px]:grid-rows-2">
          {successItems.map((item) => (
            <SuccessPlatformCard key={item.translationKey} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
