import { defaultLanguage, type SupportedLanguage } from './resources'

export const languageRoutePrefixes = ['en', 'pt'] as const

export type LanguageRoutePrefix = (typeof languageRoutePrefixes)[number]

type WithLanguagePrefixOptions = {
  includeDefaultPrefix?: boolean
}

export function normalizeLanguage(
  language: string | null | undefined,
): SupportedLanguage | null {
  if (!language) return null

  const normalizedLanguage = language.toLowerCase()

  if (normalizedLanguage === 'en') return 'en'
  if (normalizedLanguage === 'pt' || normalizedLanguage === 'pt-br') return 'pt-BR'

  return null
}

export function getLanguageRoutePrefix(
  language: SupportedLanguage,
): LanguageRoutePrefix {
  return language === 'en' ? 'en' : 'pt'
}

export function getPathLanguagePrefix(
  pathname: string,
): LanguageRoutePrefix | null {
  const firstSegment = pathname.split('/').filter(Boolean)[0]

  if (firstSegment === 'en' || firstSegment === 'pt') {
    return firstSegment
  }

  return null
}

export function getPathLanguage(pathname: string): SupportedLanguage | null {
  return normalizeLanguage(getPathLanguagePrefix(pathname))
}

export function stripLanguagePrefix(pathname: string) {
  const prefix = getPathLanguagePrefix(pathname)

  if (!prefix) return pathname || '/'

  const strippedPathname = pathname.slice(prefix.length + 1)

  return strippedPathname.startsWith('/') ? strippedPathname : `/${strippedPathname}`
}

export function withLanguagePrefix(
  href: string,
  language: SupportedLanguage | LanguageRoutePrefix | null | undefined,
  options: WithLanguagePrefixOptions = {},
) {
  if (isExternalHref(href) || href.startsWith('#')) return href

  const normalizedLanguage = normalizeLanguage(language)

  if (!normalizedLanguage) return href

  const shouldUsePrefix =
    options.includeDefaultPrefix || normalizedLanguage !== defaultLanguage

  if (!shouldUsePrefix) return stripLanguagePrefixFromHref(href)

  const prefix = getLanguageRoutePrefix(normalizedLanguage)
  const { pathname, suffix } = splitHref(href)
  const strippedPathname = stripLanguagePrefix(pathname)

  if (strippedPathname === '/') {
    return `/${prefix}${suffix}`
  }

  return `/${prefix}${strippedPathname}${suffix}`
}

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(href) || href.includes(':')
}

function stripLanguagePrefixFromHref(href: string) {
  const { pathname, suffix } = splitHref(href)

  return `${stripLanguagePrefix(pathname)}${suffix}`
}

function splitHref(href: string) {
  const hashStartIndex = href.indexOf('#')
  const searchStartIndex = href.indexOf('?')
  const suffixStartIndexes = [hashStartIndex, searchStartIndex].filter(
    (index) => index >= 0,
  )
  const suffixStartIndex =
    suffixStartIndexes.length > 0 ? Math.min(...suffixStartIndexes) : -1
  const pathname =
    suffixStartIndex >= 0 ? href.slice(0, suffixStartIndex) : href
  const suffix = suffixStartIndex >= 0 ? href.slice(suffixStartIndex) : ''

  return {
    pathname: pathname || '/',
    suffix,
  }
}
