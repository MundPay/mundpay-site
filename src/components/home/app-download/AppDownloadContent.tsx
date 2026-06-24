import { useTranslation } from 'react-i18next'
import { appStoreLinks } from './appDownloadData'
import { StoreButton } from './StoreButton'

export function AppDownloadContent() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-center border-t border-[#EAEEE4]/10 px-5 py-8 min-[811px]:border-l min-[811px]:border-t-0 min-[811px]:px-8 min-[811px]:py-0 min-[1201px]:px-10">
      <div>
        <h2 className="font-rethink-sans text-[30px] font-bold leading-[1.1] tracking-[-0.05em] text-[#EAEEE4] min-[811px]:text-[34px] min-[1201px]:text-[40px]">
          {t('home.appDownload.title')}
        </h2>
        <p className="mt-[10px] font-space-grotesk text-[15px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#EAEEE4]/68 min-[811px]:text-[16px] min-[1201px]:mt-[12px] min-[1201px]:text-[18px]">
          {t('home.appDownload.subtitle')}
        </p>
      </div>

      <div className="mt-7 min-[1201px]:mt-[42px]">
        <p className="max-w-[470px] font-space-grotesk text-[15px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#EAEEE4]/62 min-[811px]:text-[16px] min-[1201px]:text-[18px]">
          {t('home.appDownload.description')}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 min-[811px]:gap-[16px] min-[1201px]:mt-[30px]">
          {appStoreLinks.map((store) => (
            <StoreButton key={store.type} label={store.label} type={store.type} href={store.href} />
          ))}
        </div>
      </div>
    </div>
  )
}
