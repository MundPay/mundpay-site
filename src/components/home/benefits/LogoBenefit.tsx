import { mundpayAssets } from '../../../assets/mundpayAssets'

export function LogoBenefit() {
  return (
    <div className="relative hidden min-h-[384px] overflow-hidden border-l border-t border-[#EAEEE40D] bg-[#050700] min-[1201px]:block min-[1201px]:h-[480px]">
      <div className="absolute inset-0 grid place-items-center">
        <img
          src={mundpayAssets.logoMark}
          alt=""
          className="size-[min(76vw,360px)] opacity-100"
        />
      </div>
    </div>
  )
}
