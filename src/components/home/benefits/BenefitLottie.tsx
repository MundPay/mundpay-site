import type { ComponentProps } from 'react'
import * as LottieReact from 'lottie-react'

const Lottie = (LottieReact.default as unknown as { default: typeof LottieReact.default }).default

type BenefitLottieProps = Omit<
  ComponentProps<typeof Lottie>,
  'autoplay' | 'loop' | 'rendererSettings'
>

export function BenefitLottie(props: BenefitLottieProps) {
  return (
    <Lottie
      autoplay
      loop
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
      {...props}
    />
  )
}
