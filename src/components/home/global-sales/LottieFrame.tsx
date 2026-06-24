type LottieFrameProps = {
  src: string
  title: string
}

export function LottieFrame({ src, title }: LottieFrameProps) {
  return (
    <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,#000_0%,#000_52%,transparent_82%)]">
      <iframe
        src={src}
        title={title}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation"
      />
    </div>
  )
}
