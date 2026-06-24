import { mundpayAssets } from '../../assets/mundpayAssets'

type LogoProps = {
  compact?: boolean
  dark?: boolean
  className?: string
  imageClassName?: string
}

export function Logo({ compact = false, dark = false, className = '', imageClassName }: LogoProps) {
  return (
    <a href="/" className={`inline-flex items-center ${className}`}>
      <img
        src={compact ? mundpayAssets.logoMark : dark ? mundpayAssets.logoBlack : mundpayAssets.logoWhite}
        alt="mundpay"
        className={imageClassName ?? (compact ? 'size-5' : 'h-6 w-auto')}
      />
    </a>
  )
}
