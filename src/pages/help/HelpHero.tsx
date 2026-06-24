import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../assets/mundpayAssets'
import { HelpArrowRightIcon } from '../../components/icons/HelpArrowRightIcon'
import { helpContacts, helpHeroCopy } from './helpData'

export function HelpHero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid w-full max-w-[1175px] items-center gap-12 border-x border-[#EAEEE4]/[0.04] px-8 py-20 md:min-h-[620px] md:grid-cols-[1fr_438px] md:px-8 lg:px-10">
      <div className="max-w-[580px] font-space-grotesk">
        <h1 className="font-rethink-sans text-[40px] font-black leading-[0.98] tracking-[-0.045em] text-[#EAEEE4] sm:text-[48px]">
          {t('help.hero.title')}
        </h1>

        <div className="mt-9 space-y-5 text-[18px] font-medium leading-[1.45] tracking-[-0.02em] text-[#EAEEE4]/75">
          <p>{t('help.hero.intro')}</p>
          <p>
            <strong className="font-bold text-[#EAEEE4]">{t('help.hero.noteTitle')}</strong>
            <br />
            {t('help.hero.note')}
          </p>
          <p>
            <strong className="font-bold text-[#EAEEE4]">{t('help.hero.supportHoursTitle')}</strong>
            <br />
            {t('help.hero.supportHours')}
          </p>
        </div>

        <div className="mt-8 grid gap-7">
          {helpContacts.map((contact) => (
            <div key={contact.labelKey}>
              <p className="font-space-grotesk text-[17px] font-medium leading-none text-[#EAEEE4]/75">
                {t(`help.contacts.${contact.labelKey}`)}
              </p>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener' : undefined}
                className="mt-2 block font-space-grotesk text-[18px] font-medium leading-none tracking-[-0.02em] text-[#EAEEE4] underline decoration-[#EAEEE4]/60 underline-offset-2 transition hover:text-[#A2D035] hover:decoration-[#A2D035]"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        <a
          href={helpHeroCopy.chatHref}
          target="_blank"
          rel="noopener"
          className="group relative mt-8 inline-flex h-[56px] w-[196px] items-center overflow-hidden rounded-full bg-[#A2D035] px-6 font-space-grotesk text-[14px] font-bold uppercase leading-none tracking-[-0.03em] text-[#050700] shadow-[inset_0_1px_1px_rgba(255,255,255,0.16),0_1px_1px_rgba(0,0,0,0.25),0_0_0_0_rgba(162,208,53,0.2)] transition-[box-shadow] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16),0_1px_1px_rgba(0,0,0,0.25),0_0_0_8px_rgba(162,208,53,0.22)]"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-px left-px right-px top-px rounded-full bg-gradient-to-b from-[#0B0B0E] to-[#050700] opacity-0 shadow-[0_0_18px_rgba(5,7,0,0.36)] transition-[bottom,left,opacity,right,top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bottom-[5px] group-hover:left-[145px] group-hover:right-[5px] group-hover:top-[5px] group-hover:opacity-100"
          />
          <span className="relative z-[1] whitespace-nowrap">
            {t('help.hero.chatLabel')}
          </span>
          <span className="absolute right-1 top-1/2 z-[1] flex size-12 -translate-y-1/2 items-center justify-center text-[#050700] transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:text-[#EAEEE4]">
            <HelpArrowRightIcon className="size-5" />
          </span>
        </a>
      </div>

      <div className="hidden border-[10px] border-[#A2D035] md:block">
        <img src={mundpayAssets.helpSupportImage} alt="" className="h-auto w-full object-cover" />
      </div>
    </section>
  )
}
