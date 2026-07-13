import { en } from './locales/en'
import { ptBR } from './locales/pt-BR'

export const defaultLanguage = 'pt-BR'
export const supportedLanguages = ['en', 'pt-BR'] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]

export const resources = {
  en: {
    translation: en,
  },
  'pt-BR': {
    translation: ptBR,
  },
} as const
