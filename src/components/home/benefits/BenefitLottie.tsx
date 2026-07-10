import { useEffect, useRef, type ComponentProps } from 'react'
import * as LottieReact from 'lottie-react'
import type { LottieRefCurrentProps } from 'lottie-react'

const Lottie = (LottieReact.default as unknown as { default: typeof LottieReact.default }).default
const benefitLottieSpeed = 0.82

type BenefitLottieProps = Omit<
  ComponentProps<typeof Lottie>,
  'autoplay' | 'loop' | 'rendererSettings' | 'lottieRef'
>

export function BenefitLottie({ onDOMLoaded, ...props }: BenefitLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  useEffect(() => {
    lottieRef.current?.setSpeed(benefitLottieSpeed)
  }, [])

  return (
    <Lottie
      autoplay
      loop
      lottieRef={lottieRef}
      onDOMLoaded={(event) => {
        lottieRef.current?.setSpeed(benefitLottieSpeed)
        onDOMLoaded?.(event)
      }}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
      {...props}
    />
  )
}
