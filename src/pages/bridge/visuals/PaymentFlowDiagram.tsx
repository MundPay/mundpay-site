import { useEffect, useRef } from 'react'

export function PaymentFlowDiagram({ paused }: { paused: boolean }) {
  const diagramRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (paused) diagramRef.current?.pauseAnimations()
    else diagramRef.current?.unpauseAnimations()
  }, [paused])

  return (
    <svg ref={diagramRef} aria-hidden="true" viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="fdots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#050700" opacity=".22" />
        </pattern>
      </defs>
      <rect width="1000" height="420" fill="url(#fdots)" />
      <path id="fp1" className="lane" d="M140 300 C 260 300, 300 120, 500 120" />
      <path id="fp2" className="lane" d="M500 120 C 700 120, 740 300, 860 300" />
      <path className="lane ghost" d="M140 300 C 400 380, 600 380, 860 300" />
      <circle className="pkt" r="7">
        <animateMotion dur="3.2s" begin="0s" repeatCount="indefinite">
          <mpath href="#fp1" />
        </animateMotion>
      </circle>
      <circle className="pkt" r="7">
        <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite">
          <mpath href="#fp1" />
        </animateMotion>
      </circle>
      <circle className="pkt usdt" r="7">
        <animateMotion dur="3.2s" begin=".8s" repeatCount="indefinite">
          <mpath href="#fp2" />
        </animateMotion>
      </circle>
      <circle className="pkt usdt" r="7">
        <animateMotion dur="3.2s" begin="2.4s" repeatCount="indefinite">
          <mpath href="#fp2" />
        </animateMotion>
      </circle>
    </svg>
  )
}
