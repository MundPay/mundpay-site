import { mundpayAssets } from '../../assets/mundpayAssets'
import type { CSSProperties } from 'react'

const heroAssetStyle = {
  '--hero-mask': `url(${mundpayAssets.heroMask})`,
  '--hero-texture': `url(${mundpayAssets.heroTexture})`,
} as CSSProperties

const illustraMaskStyle = {
  ...heroAssetStyle,
  mask: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 100%), radial-gradient(50% 50% at 49.5%, rgba(0, 0, 0, 0.15) 0%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMask:
    'linear-gradient(180deg, transparent 0%, #000 12%, #000 100%), radial-gradient(50% 50% at 49.5%, rgba(0, 0, 0, 0.15) 0%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
} as CSSProperties

const gridLineCount = 5

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-visible bg-[#050700]">
      <div
        data-framer-name="Circle"
        className="absolute left-1/2 top-0 z-0 aspect-[1.20968] w-full max-w-300 -translate-x-1/2 overflow-visible bg-[linear-gradient(#b3b3b3_0%,#828282_100%)] mix-blend-overlay [mask:var(--hero-mask)_top/cover_no-repeat_alpha] [-webkit-mask:var(--hero-mask)_top/cover_no-repeat]"
        style={heroAssetStyle}
      />
      <div className="absolute left-1/2 top-32 z-0 h-[620px] w-screen -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(162,208,53,0.055)_0%,rgba(162,208,53,0.029)_40%,rgba(162,208,53,0.009)_66%,transparent_88%)]" />
      <div className="absolute inset-x-0 top-0 z-0 h-48 bg-[linear-gradient(180deg,#050700_0%,rgba(5,7,0,0.96)_34%,rgba(5,7,0,0.72)_68%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-64 bg-[linear-gradient(0deg,#050700_0%,rgba(5,7,0,0.8)_42%,transparent_100%)]" />
      <div className="absolute left-1/2 top-10 z-0 h-[548px] w-[min(1230px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden">
        <img
          src={mundpayAssets.logoMark}
          alt=""
          className="absolute left-1/2 -top-[96px] h-[1580px] w-[1580px] max-w-none -translate-x-1/2 opacity-[0.024] mix-blend-screen"
        />
      </div>
      <div
        data-framer-name="Illustra"
        className="absolute bottom-0 left-1/2 top-0 z-0 min-h-[480px] w-[calc(100vw-80px)] -translate-x-1/2 overflow-visible"
        style={illustraMaskStyle}
      >
        <div data-framer-name="Color" className="absolute left-0 top-0 h-full w-full overflow-visible bg-[#A2D035]" />
        <div className="absolute bottom-0 left-0 top-0 w-full overflow-visible mix-blend-multiply invert">
          <div className="hero-texture-pattern absolute inset-0 border-0" />
        </div>
        <div data-framer-name="Light" className="absolute bottom-0 left-0 top-0 w-full overflow-visible bg-[#A2D035] opacity-[0.18]" />
      </div>
      <div
        data-framer-name="Lines"
        className="absolute inset-0 z-[1] flex items-center justify-center overflow-visible"
      >
        <div className="flex h-full w-full max-w-300 overflow-hidden">
          {Array.from({ length: gridLineCount }).map((_, index) => (
            <div
              key={index}
              className={
                index === gridLineCount - 1
                  ? 'h-full w-px flex-1 border-x border-[#EAEEE40D]'
                  : 'h-full w-px flex-1 border-l border-[#EAEEE40D]'
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
