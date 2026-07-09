import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

  useEffect(() => {
    const seoPathname = stripLanguagePrefix(pathname)
    const seo = routeSeoByPath[seoPathname] ?? notFoundSeo
    const canonicalUrl = `${siteUrl}${seo.path}`
    const robots = seo.robots ?? defaultSeo.robots ?? 'index, follow'

    document.title = seo.title
    upsertCanonical(canonicalUrl)
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
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
      content: seo.description,
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    })
  }, [pathname])

  return null
}
