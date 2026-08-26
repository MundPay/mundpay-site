export const siteUrl = (
  import.meta.env.VITE_SITE_URL ?? 'https://mundpay.com'
).replace(/\/$/, '')

export type RouteSeo = {
  title: string
  description: string
  path: string
  robots?: string
}

export const defaultSeo: RouteSeo = {
  title: 'Mundpay | Sell your digital product worldwide',
  description:
    'Mundpay helps creators and digital businesses sell products, courses, SaaS, communities, and subscriptions worldwide.',
  path: '/',
}

const helpSeoContent = {
  title: 'Help Center | Mundpay',
  description:
    'Find Mundpay support channels and answers for creators, sellers, and digital businesses.',
}

const acceptableUseSeoContent = {
  title: 'Acceptable Use Policy | Mundpay',
  description:
    'Read Mundpay acceptable use policy for products, sellers, and users.',
}

export const routeSeoByPath: Record<string, RouteSeo> = {
  '/': defaultSeo,
  '/lp': {
    title: 'Comece agora | Mundpay',
    description:
      'Cadastre-se para conhecer a plataforma da Mundpay e escalar seu negócio digital globalmente.',
    path: '/lp',
  },
  '/help': {
    ...helpSeoContent,
    path: '/help',
  },
  '/me-ajuda': {
    ...helpSeoContent,
    path: '/me-ajuda',
  },
  '/ajuda': {
    ...helpSeoContent,
    path: '/me-ajuda',
  },
  '/termos-de-uso': {
    title: 'Terms of Use | Mundpay',
    description: 'Read the terms and conditions for using Mundpay services.',
    path: '/termos-de-uso',
  },
  '/termos-de-servicos': {
    title: 'Terms of Use | Mundpay',
    description: 'Read the terms and conditions for using Mundpay services.',
    path: '/termos-de-uso',
  },
  '/politica-de-privacidade': {
    title: 'Privacy Policy | Mundpay',
    description:
      'Learn how Mundpay collects, uses, stores, and protects personal data.',
    path: '/politica-de-privacidade',
  },
  '/propriedade-e-conteudo': {
    title: 'User Content Ownership | Mundpay',
    description:
      'Read Mundpay guidelines for ownership and use of user-generated content.',
    path: '/propriedade-e-conteudo',
  },
  '/pagamentos-e-taxas': {
    title: 'Payments and Fees | Mundpay',
    description:
      'Review Mundpay payment terms, fees, and related commercial conditions.',
    path: '/pagamentos-e-taxas',
  },
  '/refund-policy': {
    title: 'Refund and Return Policy | Mundpay',
    description: 'Read Mundpay refund and return policy for digital purchases.',
    path: '/refund-policy',
  },
  '/seller-agreement': {
    title: 'Seller Terms | Mundpay',
    description:
      'Review the seller agreement and responsibilities for selling with Mundpay.',
    path: '/seller-agreement',
  },
  '/codigo-de-etica': {
    title: 'Code of Ethics | Mundpay',
    description: 'Read Mundpay code of ethics and business conduct guidelines.',
    path: '/codigo-de-etica',
  },
  '/programa-geral-de-compliance': {
    title: 'General Compliance Program | Mundpay',
    description:
      'Learn about Mundpay compliance program and governance practices.',
    path: '/programa-geral-de-compliance',
  },
  '/aup': {
    ...acceptableUseSeoContent,
    path: '/aup',
  },
  '/produtos-proibidos': {
    ...acceptableUseSeoContent,
    path: '/produtos-proibidos',
  },
  '/prohibited-products': {
    ...acceptableUseSeoContent,
    path: '/prohibited-products',
  },
  '/politicas-de-prevencao-a-lavagem-de-dinheiro': {
    title: 'AML Policies | Mundpay',
    description:
      'Review Mundpay anti-money laundering and risk prevention policies.',
    path: '/politicas-de-prevencao-a-lavagem-de-dinheiro',
  },
  '/canal-de-denuncias': {
    title: 'Reporting Channel | Mundpay',
    description:
      'Access Mundpay reporting channel for ethics, compliance, and conduct concerns.',
    path: '/canal-de-denuncias',
  },
}

export const notFoundSeo: RouteSeo = {
  title: 'Page not found | Mundpay',
  description: 'The page you are looking for could not be found.',
  path: '/',
  robots: 'noindex, nofollow',
}
