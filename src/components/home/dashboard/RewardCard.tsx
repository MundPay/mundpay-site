import { mundpayAssets } from '../../../assets/mundpayAssets'

export function RewardCard() {
  return (
    <div className="hidden max-h-[323px] max-w-[255.89px] overflow-hidden rounded-xl border border-[#27272a] bg-[#09090b] md:block">
      <img
        src={mundpayAssets.nextRewardPreview}
        alt="Proxima premiacao"
        className="block h-auto max-h-[323px] w-full max-w-[255.89px]"
      />
    </div>
  )
}
