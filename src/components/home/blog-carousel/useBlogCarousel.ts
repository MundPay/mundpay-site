import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'

type UseBlogCarouselOptions = {
  autoplayDelay: number
  dragThreshold: number
  itemCount: number
}

export function useBlogCarousel({ autoplayDelay, dragThreshold, itemCount }: UseBlogCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(1)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragOffsetRef = useRef(0)
  const autoplayPaused = useRef(false)

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + itemCount) % itemCount)
  }, [itemCount])

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!autoplayPaused.current) {
        goTo(activeIndex + 1)
      }
    }, autoplayDelay)

    return () => window.clearInterval(interval)
  }, [activeIndex, autoplayDelay, goTo])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    autoplayPaused.current = true
    dragStartX.current = event.clientX
    dragOffsetRef.current = 0
    setIsDragging(true)
    setDragOffset(0)
    event.currentTarget.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return
    }

    const nextOffset = event.clientX - dragStartX.current
    dragOffsetRef.current = nextOffset
    setDragOffset(nextOffset)
  }

  const finishDrag = () => {
    if (!isDragging) {
      return
    }

    const finalOffset = dragOffsetRef.current

    if (finalOffset <= -dragThreshold) {
      goTo(activeIndex + 1)
    } else if (finalOffset >= dragThreshold) {
      goTo(activeIndex - 1)
    }

    setIsDragging(false)
    dragOffsetRef.current = 0
    setDragOffset(0)
    window.setTimeout(() => {
      autoplayPaused.current = false
    }, 900)
  }

  return {
    activeIndex,
    dragOffset,
    finishDrag,
    goTo,
    handlePointerDown,
    handlePointerMove,
    isDragging,
  }
}
