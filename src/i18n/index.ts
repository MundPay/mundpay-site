import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  defaultLanguage,
  resources,
  supportedLanguages,
  type SupportedLanguage,
} from './resources'

const languageStorageKey = 'mundpay-language'
const initialLanguage = getStoredLanguage()

function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage)
}

function getStoredLanguage() {
  try {
    const storedLanguage = globalThis.localStorage?.getItem(languageStorageKey)

    if (storedLanguage && isSupportedLanguage(storedLanguage)) {
      return storedLanguage
    }
  } catch {
    return defaultLanguage
  }

  return defaultLanguage
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
