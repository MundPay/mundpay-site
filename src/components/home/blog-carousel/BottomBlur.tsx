const blurLayerCount = 8

export function BottomBlur() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {Array.from({ length: blurLayerCount }, (_, index) => {
        const blur = Math.pow(2, index) / 18
        const start = index * 12.5
        const mid = start + 12.5
        const end = Math.min(start + 37.5, 100)

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              WebkitMaskImage: `linear-gradient(to bottom, transparent ${start}%, black ${mid}%, black ${Math.min(mid + 12.5, 100)}%, transparent ${end}%)`,
              maskImage: `linear-gradient(to bottom, transparent ${start}%, black ${mid}%, black ${Math.min(mid + 12.5, 100)}%, transparent ${end}%)`,
            }}
          />
        )
      })}
    </div>
  )
}
