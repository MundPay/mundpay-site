import { useTranslation } from 'react-i18next'
import type { Feature } from './featuresData'

type FeatureStackItemProps = {
  feature: Feature
}

export function FeatureStackItem({ feature }: FeatureStackItemProps) {
  const { t } = useTranslation()

  return (
    <article className="border-b border-[#0507001A] bg-[#EAEEE4] p-4">
      <h3 className="font-rethink-sans text-[18px] font-bold leading-[1.25] tracking-[-0.04em] text-[#050700]">
        {t(`home.features.items.${feature.translationKey}.title`)}
      </h3>

      <div className="mt-3 w-full overflow-hidden border border-[#0507001A] bg-[#EAEEE4] shadow-[0_20px_80px_rgba(5,7,0,0.04)]">
        <div className="flex h-5 items-center gap-1.5 border-b border-[#0507001A] px-2.5">
          <span className="size-1.5 rounded-full bg-[#0507001A]" />
          <span className="size-1.5 rounded-full bg-[#0507001A]" />
          <span className="size-1.5 rounded-full bg-[#0507001A]" />
        </div>
        <video
          className="block aspect-[16/9] w-full bg-[#050700] object-cover"
          src={feature.media}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <p className="mt-3 font-space-grotesk text-[15px] font-normal leading-[1.45] tracking-[-0.02em] text-[#050700]">
        {t(`home.features.items.${feature.translationKey}.description`)}
      </p>
    </article>
  )
}
