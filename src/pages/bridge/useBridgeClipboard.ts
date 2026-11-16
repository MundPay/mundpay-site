import { useEffect, useRef, useState } from 'react'

export function useBridgeClipboard() {
  const [copied, setCopied] = useState<string>()
  const timeout = useRef<number>(undefined)

  useEffect(() => () => window.clearTimeout(timeout.current), [])

  async function copy(text: string, id: string) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const focused = document.activeElement
      const field = document.createElement('textarea')
      field.value = text
      field.readOnly = true
      field.style.cssText = 'position:fixed;opacity:0'
      document.body.append(field)
      field.select()
      try {
        if (!document.execCommand('copy')) return
      } catch {
        return
      } finally {
        field.remove()
        if (focused instanceof HTMLElement) focused.focus({ preventScroll: true })
      }
    }

    setCopied(id)
    window.clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => setCopied(undefined), 1600)
  }

  return { copy, copied }
}
