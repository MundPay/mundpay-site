import { useRef, type ReactNode } from 'react'
import { getNextIndex } from './bridgeKeyboard'

type BridgeTabsProps = {
  label: string
  className: string
  panel: string
  items: readonly { id: string; label: string }[]
  active: number
  onChange: (index: number) => void
  vertical?: boolean
  children?: ReactNode
}

export function BridgeTabs({
  label,
  className,
  panel,
  items,
  active,
  onChange,
  vertical,
  children,
}: BridgeTabsProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  return (
    <div
      className={className}
      role="tablist"
      aria-label={label}
      aria-orientation={vertical ? 'vertical' : undefined}
    >
      {children}
      {items.map((item, index) => (
        <button
          key={item.id}
          id={item.id}
          type="button"
          role="tab"
          ref={(button) => {
            buttons.current[index] = button
          }}
          aria-selected={active === index}
          aria-controls={panel}
          tabIndex={active === index ? 0 : -1}
          onClick={() => onChange(index)}
          onKeyDown={(event) => {
            const next = getNextIndex(event.key, index, items.length)
            if (next === null) return
            event.preventDefault()
            onChange(next)
            buttons.current[next]?.focus()
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
