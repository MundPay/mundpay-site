import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      lerp: 0.09,
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}
