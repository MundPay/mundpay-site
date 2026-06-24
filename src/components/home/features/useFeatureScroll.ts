import { useEffect, useRef, useState } from 'react'

const tabSwitchStart = 0.08
const tabSwitchSpan = 0.84
const menuSettledOffset = 168
const menuSettleProgress = 0.16

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))

export function useFeatureScroll(featureCount: number) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateActiveFeature = () => {
      const element = scrollRef.current

      if (!element) {
        return
      }

      const rect = element.getBoundingClientRect()
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight)
      const stickyTrigger = window.innerHeight * 0.4
      const progress = clamp((stickyTrigger - rect.top) / scrollableDistance)
      const tabProgress = clamp((progress - tabSwitchStart) / tabSwitchSpan)
      const nextIndex = Math.min(featureCount - 1, Math.floor(tabProgress * featureCount))

      setScrollProgress(progress)
      setActiveIndex(nextIndex)
    }

    updateActiveFeature()
    window.addEventListener('scroll', updateActiveFeature, { passive: true })
    window.addEventListener('resize', updateActiveFeature)

    return () => {
      window.removeEventListener('scroll', updateActiveFeature)
      window.removeEventListener('resize', updateActiveFeature)
    }
  }, [featureCount])

  const handleTabClick = (index: number) => {
    const element = scrollRef.current

    if (!element) {
      return
    }

    const pageTop = element.getBoundingClientRect().top + window.scrollY
    const stickyTrigger = window.innerHeight * 0.4
    const scrollableDistance = Math.max(1, element.offsetHeight - window.innerHeight)
    const progress = tabSwitchStart + tabSwitchSpan * ((index + 0.5) / featureCount)

    window.scrollTo({
      top: pageTop + scrollableDistance * progress - stickyTrigger,
      behavior: 'smooth',
    })
  }

  const menuOffset = menuSettledOffset * clamp(scrollProgress / menuSettleProgress)

  return {
    activeIndex,
    handleTabClick,
    menuOffset,
    scrollRef,
  }
}
