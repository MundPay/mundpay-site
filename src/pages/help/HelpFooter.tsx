import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import footerBackgroundLogo from '../../assets/image/68eef8a3d3-tzjzM5myUA2OJRfcZIQ43LjdT88.svg'
import { mundpayAssets } from '../../assets/mundpayAssets'
import { FacebookIcon } from '../../components/icons/FacebookIcon'
import { InstagramIcon } from '../../components/icons/InstagramIcon'
import { EuropeanUnionFlagIcon } from '../../components/icons/EuropeanUnionFlagIcon'
import { UnitedStatesFlagIcon } from '../../components/icons/UnitedStatesFlagIcon'
import { YoutubeIcon } from '../../components/icons/YoutubeIcon'
import { helpFooterColumns, helpOffices, helpSocialLinks, helpStoreLinks } from './helpData'
import { HelpStoreButton } from './HelpStoreButton'

const socialIconByType = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const

export function HelpFooter() {
  const { t } = useTranslation()

  return (
    <footer className="relative min-h-[603px] overflow-hidden bg-black px-6 pb-10 pt-[168px] font-space-grotesk text-[#EAEEE4] min-[811px]:px-10 min-[1201px]:h-[603px] min-[1201px]:px-0">
      <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center min-[811px]:top-4">
        <div
          className="h-[96px] w-[min(760px,145vw)] bg-[#18181B] opacity-75 min-[811px]:w-[570px]"
          style={{
            mask: `url(${footerBackgroundLogo}) center / contain no-repeat alpha`,
            WebkitMask: `url(${footerBackgroundLogo}) center / contain no-repeat`,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1128px] grid-cols-1 items-start gap-12 min-[811px]:grid-cols-[minmax(260px,430px)_1fr] min-[811px]:gap-10 min-[1201px]:grid-cols-[580px_1fr] min-[1201px]:gap-0">
        <div className="flex flex-col items-center min-[811px]:items-start">
          <Link to="/" className="block w-fit" aria-label={t('help.footer.homeLabel')}>
            <img src={mundpayAssets.logoWhite} alt="mundpay" className="h-[30px] w-auto" />
          </Link>

          <div className="mt-7 flex items-center gap-8 text-white/65 min-[1201px]:mt-[33px]">
            {helpSocialLinks.map((social) => {
              const Icon = socialIconByType[social.icon]
              const iconClassName = social.icon === 'youtube' ? 'h-4 w-5' : 'size-[18px]'

              return (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition hover:text-[#EAEEE4]"
                >
                  <Icon className={iconClassName} />
                </a>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[13px] font-semibold leading-none text-[#EAEEE4]/35 min-[811px]:justify-start min-[1201px]:mt-[52px] min-[1201px]:gap-[18px] min-[1201px]:text-[16px]">
            <span>&copy;2026</span>
            <span className="text-white/35">|</span>
            <span>MUNDPAY</span>
            <span className="text-white/35">|</span>
            <span>{t('help.footer.copyright.allRightsReserved')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10 min-[811px]:grid-cols-3 min-[811px]:gap-[20px] min-[1201px]:grid-cols-[190px_165px_150px]">
          {helpFooterColumns.map((column) => (
            <nav
              key={column.key}
              className={column.key === 'legal' ? 'col-span-2 min-[811px]:col-span-1' : undefined}
            >
              <h2 className="text-[12px] font-bold uppercase leading-none tracking-[0.06em] text-[#EAEEE4]/40">
                {t(`help.footer.columns.${column.key}.title`)}
              </h2>
              <div className="mt-6 flex flex-col gap-6 min-[1201px]:mt-[28px] min-[1201px]:gap-[28px]">
                {column.links.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener' : undefined}
                    className="text-[14px] font-semibold leading-none text-[#EAEEE4]/65 transition hover:text-[#EAEEE4]"
                  >
                    {t(`help.footer.columns.${column.key}.links.${item.key}`)}
                  </a>
                ))}
              </div>

              {column.key === 'site' ? (
                <div className="mt-6 flex flex-col gap-[10px] min-[1201px]:mt-[28px]">
                  {helpStoreLinks.map((store) => (
                    <HelpStoreButton key={store.icon} href={store.href} icon={store.icon} label={store.label} />
                  ))}
                </div>
              ) : null}
            </nav>
          ))}
        </div>
      </div>

      <div className="relative z-[2] mx-auto mt-12 max-w-[1128px]">
        <div data-footer-divider className="h-px w-full bg-[#A2D035]/35" />
        <div data-footer-offices className="mt-7 grid grid-cols-1 gap-4 min-[811px]:grid-cols-3 min-[811px]:gap-6 min-[1201px]:grid-cols-[345px_345px_1fr] min-[1201px]:gap-[38px]">
          {helpOffices.map((office) => (
            <div key={office.text} className="flex items-start gap-[10px] text-[10px] font-semibold leading-[1.35] text-[#EAEEE4]/65">
              {office.flag === 'us' ? (
                <UnitedStatesFlagIcon className="size-5 flex-none" />
              ) : (
                <EuropeanUnionFlagIcon className="size-5 flex-none" />
              )}
              <p>{office.text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
