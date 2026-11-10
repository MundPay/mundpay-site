import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { i18next } from '../i18n'
import { defaultLanguage } from '../i18n/resources'
import { isSpanishBridgePath, spanishBridgeDescription } from '../pages/bridge/bridgeRouting'
import { stripLanguagePrefix } from '../i18n/languageRouting'
import { defaultSeo, notFoundSeo, routeSeoByPath, siteUrl } from './routeSeo'

const managedMetaAttribute = 'data-seo-managed'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const existingMeta = document.head.querySelector<HTMLMetaElement>(selector)
  const meta = existingMeta ?? document.createElement('meta')

  Object.entries(attributes).forEach(([key, value]) => {
    meta.setAttribute(key, value)
  })

  meta.setAttribute(managedMetaAttribute, 'true')

  if (!existingMeta) {
    document.head.appendChild(meta)
  }
}

function upsertCanonical(href: string) {
  const existingLink = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )
  const link = existingLink ?? document.createElement('link')

  link.setAttribute('rel', 'canonical')
  link.setAttribute('href', href)

  if (!existingLink) {
    document.head.appendChild(link)
  }
}

export function Seo() {
  const { pathname } = useLocation()

  const { t } = useTranslation()
  const spanishBridge = isSpanishBridgePath(pathname)
  const seoPathname = spanishBridge ? '/bridge' : stripLanguagePrefix(pathname)
  const seo = routeSeoByPath[seoPathname] ?? notFoundSeo
  const bridgeDescription = spanishBridge ? spanishBridgeDescription : t('bridge.meta_desc')
  const description = seo.path === '/bridge' ? bridgeDescription : seo.description

  useEffect(() => {
    if (!spanishBridge) return

    const locale = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]')
    const previousLocale = locale?.content
    document.documentElement.lang = 'es'
    if (locale) locale.content = 'es_LA'

    return () => {
      document.documentElement.lang = i18next.resolvedLanguage ?? defaultLanguage
      if (locale && previousLocale !== undefined) locale.content = previousLocale
    }
  }, [spanishBridge])

  useEffect(() => {
    const canonicalUrl = `${siteUrl}${seo.path}`
    const robots = seo.robots ?? defaultSeo.robots ?? 'index, follow'

    document.title = seo.title
    upsertCanonical(canonicalUrl)
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
  }, [description, seo])

  return null
}
