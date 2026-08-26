import { useTranslation } from 'react-i18next'
import cursorIcon from '../../../assets/image/f70d7b7b02-2zc2T1c7G9S0q2bV9CIwfQk2aYQ.svg'
import { languageChips } from './globalSalesData'

const languageRows = [
  languageChips.slice(0, 3),
  languageChips.slice(3, 7),
  languageChips.slice(7, 10),
]

export function LanguagesAnimation() {
  const { t } = useTranslation()

  return (
    <div className="absolute inset-x-3 top-[46px] flex flex-col items-center gap-y-[10px] [mask-image:radial-gradient(ellipse_at_center,#000_0%,#000_68%,transparent_100%)] min-[811px]:inset-x-8 min-[1201px]:inset-x-[58px]">
      {languageRows.map((row) => (
        <div key={row.map((chip) => chip.id).join('-')} className="flex items-center justify-center gap-x-2 min-[811px]:gap-x-[12px]">
          {row.map((chip) => (
            <div
              key={chip.id}
              className="flex items-center gap-[5px] rounded-full border border-white/10 bg-[#ffffff0f] py-1 pl-1 pr-2 font-space-grotesk text-[12px] font-semibold leading-none text-white/70 shadow-[0_0_20px_rgba(162,208,53,0.04)] min-[811px]:pr-3 min-[811px]:text-[14px]"
            >
              <img
                src={chip.flag}
                alt=""
                aria-hidden="true"
                className="size-6 shrink-0 rounded-full border border-white/10 object-cover"
              />
              {'alternateId' in chip ? (
                <span className="relative grid h-[1em] whitespace-nowrap">
                  <span className="global-language-label-current [grid-area:1/1]">
                    {t(`home.globalSales.languageNames.${chip.id}`)}
                  </span>
                  <span className="global-language-label-alternate [grid-area:1/1]">
                    {t(`home.globalSales.languageNames.${chip.alternateId}`)}
                  </span>
                </span>
              ) : (
                <span className="whitespace-nowrap">
                  {t(`home.globalSales.languageNames.${chip.id}`)}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
      <img
        src={cursorIcon}
        alt=""
        aria-hidden="true"
        className="global-language-cursor absolute left-[32%] top-[23px] size-6 min-[1201px]:left-[154px]"
      />
    </div>
  )
}
