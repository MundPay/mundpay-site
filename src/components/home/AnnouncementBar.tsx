import { mundpayAssets } from '../../assets/mundpayAssets'
import { useTranslation } from 'react-i18next'

const announcement = {
  href: 'https://api.avanttocrm.com/widget/booking/mC0dSNXX0Ha89S3s0FlS',
}

const announcementBarClassName =
  'group fixed inset-x-0 top-0 z-50 flex h-9 w-full items-center justify-center overflow-hidden bg-[#050700] py-3 text-center font-space-grotesk text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#EAEEE4] transition-[filter] duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#A2D035]'

const maskStyle = {
  mask: `url(${mundpayAssets.announcementMask}) center bottom / cover no-repeat luminance`,
  WebkitMask: `url(${mundpayAssets.announcementMask}) center bottom / cover no-repeat`,
}

const noiseStyle = {
  backgroundImage: `url(${mundpayAssets.noiseTexture})`,
  backgroundRepeat: 'repeat',
  backgroundPosition: 'left top',
  backgroundSize: '128px auto',
}

const linesStyle = {
  backgroundImage: `url(${mundpayAssets.announcementLines})`,
  backgroundRepeat: 'repeat',
  backgroundPosition: 'left top',
  backgroundSize: '16px auto',
  transform: 'rotate(90deg)',
}

function AnnouncementBarBackground() {
  return (
    <>
      <span
        className="absolute inset-0 z-[1] h-full w-full flex-none overflow-visible bg-[#09090B] [filter:saturate(2)]"
        style={maskStyle}
      >
        <span className="absolute inset-0 z-[1] overflow-hidden bg-[#A2D035] mix-blend-screen" />
        <span
          className="absolute inset-0 z-[3] overflow-visible opacity-40"
          style={noiseStyle}
        />
        <span
          className="absolute bottom-[-582px] left-[calc(50%-18px)] top-[-582px] z-0 w-9 overflow-hidden opacity-100 invert mix-blend-screen"
          style={linesStyle}
        />
      </span>
      <span className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-px w-[838px] max-w-full -translate-x-1/2 overflow-hidden bg-[#EAEEE4]/10 [mask:linear-gradient(270deg,transparent_0%,rgba(0,0,0,.5)_52.2523%,transparent_100%)]" />
    </>
  )
}

export function AnnouncementBar() {
  const { t } = useTranslation()
  const announcementText = t('home.announcement.text')

  return (
    <a
      className={announcementBarClassName}
      href={announcement.href}
      target="_blank"
      rel="noopener"
      aria-label={announcementText}
    >
      <span className="relative z-[5] whitespace-nowrap mix-blend-screen">
        {announcementText}
      </span>
      <AnnouncementBarBackground />
    </a>
  )
}
