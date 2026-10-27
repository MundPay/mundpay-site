import aiToolsAnimation from '../../../assets/lottie/ai-tools.json'
import type { SupportedLanguage } from '../../../i18n/resources'

const fontName = 'SpaceGrotesk-Regular'
const amountRows = [
  { index: 4, amount: 50000, y: -8 },
  { index: 6, amount: 55000, y: 16 },
  { index: 8, amount: 65000, y: 40 },
] as const

function textDocument(text: string, size: number, color: number[]) {
  return {
    d: { k: [{ t: 0, s: { t: text, f: fontName, s: size, j: 0, tr: 0, lh: size * 1.2, ls: 0, fc: color } }] },
    m: { g: 1, a: { a: 0, k: [0, 0] } },
    p: {},
    a: [],
  }
}

// Keep the original chart, glow, badge and amount-scroll curves. Only the
// English version replaces outlined Portuguese text with native Lottie text.
export function createAiToolsAnimation(language: SupportedLanguage, earningsLabel: string) {
  const animation = structuredClone(aiToolsAnimation)
  // Lottie mutates and completes the supplied data. Never give either locale
  // the imported source object: the next language must start from clean data.
  if (language === 'pt-BR') return animation
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return {
    ...animation,
    fonts: {
      list: [{ fName: fontName, fFamily: 'Space Grotesk', fStyle: 'Regular', ascent: 75 }],
    },
    layers: animation.layers.map((layer) => layer.ind === 30 ? {
      ...layer,
      ty: 5,
      shapes: [],
      ks: {
        ...layer.ks,
        p: { a: 0, k: [24.37, 109.4, 0] },
        s: { a: 0, k: [89.24, 89.24, 100] },
      },
      t: textDocument(earningsLabel, 11.2, [0.92, 0.93, 0.895]),
    } : layer),
    assets: animation.assets.map((asset) => asset.id === '1' ? {
      ...asset,
      layers: asset.layers.map((layer) => {
        const row = amountRows.find(({ index }) => index === layer.ind)
        if (!row) return layer

        return {
          ...layer,
          ty: 5,
          shapes: [],
          ks: {
            ...layer.ks,
            p: {
              a: 1,
              k: [
                { t: 31, s: [-44.04, row.y + 5.09, 0], o: { x: [0.5], y: [-0.5] }, i: { x: [0.2], y: [1] } },
                { t: 94, s: [-44.04, row.y - 22.77 + 5.09, 0], o: { x: [0.5], y: [-0.5] }, i: { x: [0.2], y: [1] } },
                { t: 101, s: [-44.04, row.y - 24 + 5.09, 0], o: { x: [0.5], y: [-0.5] }, i: { x: [0.2], y: [1] } },
                { t: 200, s: [-44.04, row.y - 49 + 5.09, 0] },
              ],
            },
          },
          t: textDocument(formatter.format(row.amount), 14, [0.636, 0.816, 0.21]),
        }
      }),
    } : asset),
  }
}
