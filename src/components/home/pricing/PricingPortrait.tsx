import { mundpayAssets } from '../../../assets/mundpayAssets'

export function PricingPortrait() {
  return (
    <div className="relative hidden h-full overflow-hidden min-[1201px]:block">
      <img
        src={mundpayAssets.pricingPortrait}
        alt=""
        className="absolute left-[40px] top-[40px] h-[623px] w-[560px] max-w-none object-contain"
        loading="lazy"
      />
    </div>
  )
}
