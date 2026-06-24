import { useState, type CSSProperties } from 'react'
import { paymentLogoSlots } from './globalSalesData'
import { paymentMethodLogos } from './paymentMethodLogos'

type PaymentLogoSlot = (typeof paymentLogoSlots)[number]

const paymentLogoStage = {
  x: 192,
  y: 8,
}

function getPaymentLogoStyle(slot: PaymentLogoSlot, isHovering: boolean) {
  return {
    left: slot.x - paymentLogoStage.x,
    top: slot.y - paymentLogoStage.y,
    opacity: isHovering ? Math.min(slot.opacity + 0.18, 1) : slot.opacity,
    filter: isHovering ? 'brightness(1.08)' : 'brightness(0.82)',
    transform: isHovering ? `translate3d(0, ${slot.drop}px, 0)` : 'translate3d(0, 0, 0)',
  } as CSSProperties
}

export function PaymentMethodsAnimation() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="absolute inset-0 cursor-default overflow-hidden [mask-image:linear-gradient(0deg,transparent_0%,#000_18%,#000_78%,transparent_100%)]"
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <div className="absolute left-1/2 top-2 h-[146px] w-[250px] -translate-x-1/2 origin-top scale-[0.9] min-[811px]:scale-100">
        {paymentMethodLogos.slice(0, paymentLogoSlots.length).map((method, index) => {
          const slot = paymentLogoSlots[index]

          return (
            <div
              key={method.label}
              className="absolute flex h-[28px] w-[48px] items-center justify-center transition-[filter,opacity,transform] duration-150 ease-out"
              style={getPaymentLogoStyle(slot, isHovering)}
            >
              {method.src ? (
                <img
                  src={method.src}
                  alt=""
                  className="block h-[28px] w-[48px] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.34)]"
                  loading="lazy"
                />
              ) : (
                <span className="rounded-[7px] bg-[#F5F5F0] px-[7px] py-[6px] font-space-grotesk text-[9px] font-bold leading-none tracking-[-0.04em] text-[#050700] shadow-[0_8px_18px_rgba(0,0,0,0.36)]">
                  {method.label}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
