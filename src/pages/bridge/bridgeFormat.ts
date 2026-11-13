import type { BridgeLocale } from './bridgeRouting'

const locales = { 'pt-BR': 'pt-BR', en: 'en-US', es: 'es-419' } as const
const currencyDigits = { BRL: 2, MXN: 2, PEN: 2, USD: 2, COP: 0, CLP: 0, ARS: 0 } as const
const numberFormats = {
  'pt-BR': [0, 2].map(makeNumberFormat('pt-BR')),
  en: [0, 2].map(makeNumberFormat('en')),
  es: [0, 2].map(makeNumberFormat('es')),
}

function makeNumberFormat(language: BridgeLocale) {
  return (digits: number) =>
    new Intl.NumberFormat(locales[language], {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })
}

export function formatNumber(language: BridgeLocale, value: number, digits: 0 | 2 = 0) {
  return numberFormats[language][digits === 0 ? 0 : 1].format(value)
}

export function formatMoney(
  language: BridgeLocale,
  currency: keyof typeof currencyDigits,
  value: number,
) {
  const digits = currencyDigits[currency]
  return new Intl.NumberFormat(locales[language], {
    style: 'currency',
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)
}
