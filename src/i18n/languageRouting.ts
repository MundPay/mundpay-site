import { defaultLanguage, type SupportedLanguage } from './resources'

export const languageRoutePrefixes = ['en', 'pt'] as const

export type LanguageRoutePrefix = (typeof languageRoutePrefixes)[number]

type WithLanguagePrefixOptions = {
  includeDefaultPrefix?: boolean
}

const preferredHelpRoutePathByLanguage = {
  en: '/help',
  'pt-BR': '/me-ajuda',
} satisfies Record<SupportedLanguage, string>

const preferredProhibitedProductsRoutePathByLanguage = {
  en: '/prohibited-products',
  'pt-BR': '/produtos-proibidos',
} satisfies Record<SupportedLanguage, string>

const preferredTermsRoutePathByLanguage = {
  en: '/terms-of-use',
  'pt-BR': '/termos-de-uso',
} satisfies Record<SupportedLanguage, string>

const preferredPrivacyPolicyRoutePathByLanguage = {
  en: '/privacy-policy',
  'pt-BR': '/politica-de-privacidade',
} satisfies Record<SupportedLanguage, string>

const preferredUserContentRoutePathByLanguage = {
  en: '/user-content-ownership',
  'pt-BR': '/propriedade-e-conteudo',
} satisfies Record<SupportedLanguage, string>

const preferredPaymentsFeesRoutePathByLanguage = {
  en: '/payments-and-fees',
  'pt-BR': '/pagamentos-e-taxas',
} satisfies Record<SupportedLanguage, string>

const preferredCodeOfEthicsRoutePathByLanguage = {
  en: '/code-of-ethics',
  'pt-BR': '/codigo-de-etica',
} satisfies Record<SupportedLanguage, string>

const preferredComplianceProgramRoutePathByLanguage = {
  en: '/general-compliance-program',
  'pt-BR': '/programa-geral-de-compliance',
} satisfies Record<SupportedLanguage, string>

const preferredAmlPoliciesRoutePathByLanguage = {
  en: '/anti-money-laundering-policies',
  'pt-BR': '/politicas-de-prevencao-a-lavagem-de-dinheiro',
} satisfies Record<SupportedLanguage, string>

const preferredReportingChannelRoutePathByLanguage = {
  en: '/reporting-channel',
  'pt-BR': '/canal-de-denuncias',
} satisfies Record<SupportedLanguage, string>

const localizedRoutePathsByPath: Record<
  string,
  Record<SupportedLanguage, string>
> = {
  '/help': preferredHelpRoutePathByLanguage,
  '/me-ajuda': preferredHelpRoutePathByLanguage,
  '/ajuda': preferredHelpRoutePathByLanguage,
  '/aup': preferredProhibitedProductsRoutePathByLanguage,
  '/produtos-proibidos': preferredProhibitedProductsRoutePathByLanguage,
  '/prohibited-products': preferredProhibitedProductsRoutePathByLanguage,
  '/termos-de-uso': preferredTermsRoutePathByLanguage,
  '/termos-de-servicos': preferredTermsRoutePathByLanguage,
  '/terms-of-use': preferredTermsRoutePathByLanguage,
  '/terms-of-service': preferredTermsRoutePathByLanguage,
  '/politica-de-privacidade': preferredPrivacyPolicyRoutePathByLanguage,
  '/privacy-policy': preferredPrivacyPolicyRoutePathByLanguage,
  '/propriedade-e-conteudo': preferredUserContentRoutePathByLanguage,
  '/user-content-ownership': preferredUserContentRoutePathByLanguage,
  '/pagamentos-e-taxas': preferredPaymentsFeesRoutePathByLanguage,
  '/payments-and-fees': preferredPaymentsFeesRoutePathByLanguage,
  '/codigo-de-etica': preferredCodeOfEthicsRoutePathByLanguage,
  '/code-of-ethics': preferredCodeOfEthicsRoutePathByLanguage,
  '/programa-geral-de-compliance': preferredComplianceProgramRoutePathByLanguage,
  '/general-compliance-program': preferredComplianceProgramRoutePathByLanguage,
  '/politicas-de-prevencao-a-lavagem-de-dinheiro': preferredAmlPoliciesRoutePathByLanguage,
  '/anti-money-laundering-policies': preferredAmlPoliciesRoutePathByLanguage,
  '/canal-de-denuncias': preferredReportingChannelRoutePathByLanguage,
  '/reporting-channel': preferredReportingChannelRoutePathByLanguage,
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

  const { pathname, suffix } = splitHref(href)
  const localizedPathname = localizeRoutePathname(pathname, normalizedLanguage)

  if (!shouldUsePrefix) return `${localizedPathname}${suffix}`

  const prefix = getLanguageRoutePrefix(normalizedLanguage)

  if (localizedPathname === '/') {
    return `/${prefix}${suffix}`
  }

  return `/${prefix}${localizedPathname}${suffix}`
}

export function areRoutePathsEquivalent(firstPath: string, secondPath: string) {
  const firstPathname = stripLanguagePrefix(firstPath)
  const secondPathname = stripLanguagePrefix(secondPath)

  if (firstPathname === secondPathname) return true

  const firstLocalizedPaths = localizedRoutePathsByPath[firstPathname]
  const secondLocalizedPaths = localizedRoutePathsByPath[secondPathname]

  return Boolean(
    firstLocalizedPaths && firstLocalizedPaths === secondLocalizedPaths,
  )
}

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(href) || href.includes(':')
}

function localizeRoutePathname(
  pathname: string,
  language: SupportedLanguage,
) {
  const strippedPathname = stripLanguagePrefix(pathname)
  const localizedPaths = localizedRoutePathsByPath[strippedPathname]

  return localizedPaths?.[language] ?? strippedPathname
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
