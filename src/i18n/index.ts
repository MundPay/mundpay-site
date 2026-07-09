import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  defaultLanguage,
  resources,
  supportedLanguages,
  type SupportedLanguage,
} from './resources'
import { getPathLanguage, normalizeLanguage } from './languageRouting'

const languageStorageKey = 'mundpay-language'
const queryLanguageKey = 'lang'
const initialLanguage = getInitialLanguage()

function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage)
}

function getQueryLanguage(): SupportedLanguage | null {
  try {
    return normalizeLanguage(
      new URLSearchParams(globalThis.location?.search).get(queryLanguageKey),
    )
  } catch {
    return null
  }
}

function getStoredLanguage(): SupportedLanguage | null {
  try {
    const storedLanguage = globalThis.localStorage?.getItem(languageStorageKey)

    if (storedLanguage && isSupportedLanguage(storedLanguage)) {
      return storedLanguage
    }
  } catch {
    return null
  }

  return null
}

function getDomainLanguage(): SupportedLanguage | null {
  try {
    const hostname = globalThis.location?.hostname?.toLowerCase()

    if (!hostname) return null

    if (hostname.endsWith('.com.br')) return 'pt-BR'
    if (hostname.endsWith('.com')) return 'en'
  } catch {
    return null
  }

  return null
}

function getRouteLanguage(): SupportedLanguage | null {
  try {
    return getPathLanguage(globalThis.location?.pathname ?? '')
  } catch {
    return null
  }
}

function getInitialLanguage() {
  return (
    getRouteLanguage() ??
    getQueryLanguage() ??
    getDomainLanguage() ??
    getStoredLanguage() ??
    defaultLanguage
  )
}

i18next.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: defaultLanguage,
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
})

try {
  globalThis.document?.documentElement.setAttribute('lang', initialLanguage)
} catch {
  // The document object is not available outside the browser.
}

i18next.on('languageChanged', (language) => {
  if (!isSupportedLanguage(language)) return

  try {
    globalThis.localStorage?.setItem(languageStorageKey, language)
    globalThis.document?.documentElement.setAttribute('lang', language)
  } catch {
    return
  }
})

export { i18next }
