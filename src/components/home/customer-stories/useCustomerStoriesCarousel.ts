import { useEffect, useState } from 'react'

type UseCustomerStoriesCarouselOptions = {
  autoAdvanceDelay: number
  storyCount: number
}

export function useCustomerStoriesCarousel({ autoAdvanceDelay, storyCount }: UseCustomerStoriesCarouselOptions) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const shift = (direction: -1 | 1) => {
    if (direction === 1) {
      setTransitionEnabled(true)
      setSlideIndex((current) => current + 1)
      return
    }

    setSlideIndex((current) => {
      if (current > 0) {
        setTransitionEnabled(true)
        return current - 1
      }

      setTransitionEnabled(false)
      requestAnimationFrame(() => {
        setSlideIndex(storyCount)
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
          setSlideIndex(storyCount - 1)
        })
      })

      return current
    })
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTransitionEnabled(true)
      setSlideIndex((current) => current + 1)
    }, autoAdvanceDelay)

    return () => window.clearInterval(interval)
  }, [autoAdvanceDelay])

  const handleTransitionEnd = () => {
    if (slideIndex < storyCount) {
      return
    }

    setTransitionEnabled(false)
    setSlideIndex(0)
    requestAnimationFrame(() => setTransitionEnabled(true))
  }

  return {
    handleTransitionEnd,
    shift,
    slideIndex,
    transitionEnabled,
  }
}
