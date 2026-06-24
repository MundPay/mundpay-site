import { mundpayAssets } from '../../../assets/mundpayAssets'

type CustomerStoriesPatternEdgeProps = {
  side: 'left' | 'right'
}

export function CustomerStoriesPatternEdge({ side }: CustomerStoriesPatternEdgeProps) {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 w-[20px] opacity-25"
      style={{
        [side]: 0,
        backgroundImage: `url(${mundpayAssets.heroTexture})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'left top',
        backgroundSize: '31.5px auto',
      }}
    />
  )
}
