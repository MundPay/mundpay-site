import { useEffect, useRef, useState } from 'react'
import { formatNumber } from './bridgeFormat'
import { useBridgeTranslation } from './useBridgeTranslation'

type BridgeCountProps = {
  value: number
  digits?: 0 | 2
  prefix?: string
  suffix?: string
  paused: boolean
}

export function BridgeCount({ value, digits = 0, prefix = '', suffix = '', paused }: BridgeCountProps) {
  const { language } = useBridgeTranslation()
  const counterRef = useRef<HTMLSpanElement>(null)
  const progress = useRef(0)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(value)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(counter)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (
      !visible ||
      paused ||
      progress.current >= 1 ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    let last = performance.now()
    let frame = requestAnimationFrame(tick)

    function tick(now: number) {
      progress.current = Math.min(1, progress.current + (now - last) / 1400)
      last = now
      setCount(value * (1 - (1 - progress.current) ** 3))
      if (progress.current < 1) frame = requestAnimationFrame(tick)
    }

    return () => cancelAnimationFrame(frame)
  }, [paused, value, visible])

  return (
    <span ref={counterRef}>
      {prefix}
      {formatNumber(language, count, digits)}
      {suffix}
    </span>
  )
}
