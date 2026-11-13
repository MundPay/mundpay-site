export function getNextIndex(
  key: string,
  index: number,
  length: number,
  axis: 'both' | 'vertical' = 'both',
) {
  if (key === 'Home') return 0
  if (key === 'End') return length - 1
  if (key === 'ArrowDown' || (axis === 'both' && key === 'ArrowRight')) return (index + 1) % length
  if (key === 'ArrowUp' || (axis === 'both' && key === 'ArrowLeft')) return (index + length - 1) % length
  return null
}
