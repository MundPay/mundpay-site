import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getPathLanguage } from './languageRouting'

export function LanguageRouteSync() {
  const { i18n } = useTranslation()
  const { pathname } = useLocation()
  const pathLanguage = getPathLanguage(pathname)

  useEffect(() => {
    if (!pathLanguage || i18n.resolvedLanguage === pathLanguage) return

    void i18n.changeLanguage(pathLanguage)
  }, [i18n, pathLanguage])

  return null
}
