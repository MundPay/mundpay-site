import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import closeIcon from '../../assets/image/e3ed09eaf7-G939BVW7HdEqLMLKjDFkYMIyqZg.svg'
import buyerIcon from '../../assets/image/ucrdUw5fOYlcHF2SqVOqwU6IMQ.svg'
import sellerIcon from '../../assets/image/9OHlTMVAEgceHueHFOC3oGe3eY.svg'
import affiliateIcon from '../../assets/image/9N73fUbWx8v7I8xE5uxLAqDcdDM.svg'

type StartNowModalProps = {
  isOpen: boolean
  onClose: () => void
}

const profileOptions = [
  {
    key: 'buyer',
    href: 'https://orders.mundpay.com/',
    icon: buyerIcon,
  },
  {
    key: 'seller',
    href: 'https://login.mundpay.com/register',
    icon: sellerIcon,
  },
  {
    key: 'affiliate',
    href: 'https://login.mundpay.com/register',
    icon: affiliateIcon,
  },
] as const

export function StartNowModal({ isOpen, onClose }: StartNowModalProps) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-now-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-[640px] rounded-[24px] border border-[#EAEEE4]/[0.05] bg-[#09090B] p-8 text-left shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t('home.startNowModal.closeLabel')}
          onClick={onClose}
          className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-[#EAEEE4]/[0.05] transition hover:bg-[#EAEEE4]/10"
        >
          <img src={closeIcon} alt="" className="size-6" />
        </button>

        <div className="pr-12">
          <h2
            id="start-now-modal-title"
            className="font-rethink-sans text-[24px] font-bold leading-[1.2] tracking-[-0.04em] text-[#EAEEE4]"
          >
            {t('home.startNowModal.title')}
          </h2>
          <p className="mt-2 font-space-grotesk text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-[#EAEEE4]/80">
            {t('home.startNowModal.description')}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-4">
          {profileOptions.map((option) => (
            <a
              key={option.key}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : undefined}
              rel={option.href.startsWith('http') ? 'noopener' : undefined}
              className="group grid min-h-[102px] grid-cols-[88px_1fr] border border-[#EAEEE4]/[0.05] bg-[#EAEEE4]/[0.01] transition hover:border-[#EAEEE4]/[0.09] hover:bg-[#EAEEE4]/[0.025]"
            >
              <span className="flex items-center justify-center border-r border-[#EAEEE4]/[0.05]">
                <span className="flex size-14 items-center justify-center rounded-full border border-[#EAEEE4]/[0.05] text-[#EAEEE4]/70 transition group-hover:border-[#EAEEE4]/[0.09] group-hover:text-[#EAEEE4]">
                  <img src={option.icon} alt="" className="size-7 object-contain" aria-hidden="true" />
                </span>
              </span>
              <span className="flex min-w-0 flex-col justify-center px-4 py-4 sm:px-5">
                <span className="font-rethink-sans text-[16px] font-bold leading-[1.5] tracking-[-0.04em] text-[#EAEEE4]">
                  {t(`home.startNowModal.options.${option.key}.title`)}
                </span>
                <span className="mt-1 font-space-grotesk text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-[#EAEEE4]/80">
                  {t(`home.startNowModal.options.${option.key}.description`)}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
