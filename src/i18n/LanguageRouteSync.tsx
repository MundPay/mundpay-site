import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { i18next } from './index'
import { getPathLanguage } from './languageRouting'

export function LanguageRouteSync() {
  const { pathname } = useLocation()
  const pathLanguage = getPathLanguage(pathname)

  useEffect(() => {
    if (!pathLanguage || i18next.resolvedLanguage === pathLanguage) return

    void i18next.changeLanguage(pathLanguage)
  }, [pathLanguage])

  return null
}
