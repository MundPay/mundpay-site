import type { CSSProperties } from 'react'

export function bridgeStyle(property: '--i' | '--h', value: string | number): CSSProperties {
  return { [property]: value } as CSSProperties
}
