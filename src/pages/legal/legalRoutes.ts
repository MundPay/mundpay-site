export type LegalRoute = {
  path: string
  label: string
  translationKey: string
}

export const legalRoutes = [
  { path: 'termos-de-uso', label: 'Terms and Conditions', translationKey: 'terms' },
  { path: 'politica-de-privacidade', label: 'Privacy Policy', translationKey: 'privacy' },
  { path: 'propriedade-e-conteudo', label: 'User Content Ownership', translationKey: 'userContent' },
  { path: 'pagamentos-e-taxas', label: 'Payments and Fees', translationKey: 'paymentsFees' },
  { path: 'refund-policy', label: 'Refund and Return Policy', translationKey: 'refundPolicy' },
  { path: 'seller-agreement', label: 'Seller Terms', translationKey: 'sellerAgreement' },
  { path: 'codigo-de-etica', label: 'Code of Ethics', translationKey: 'codeOfEthics' },
  { path: 'programa-geral-de-compliance', label: 'General Compliance Program', translationKey: 'complianceProgram' },
  { path: 'aup', label: 'Acceptable Use Policy', translationKey: 'acceptableUse' },
  { path: 'politicas-de-prevencao-a-lavagem-de-dinheiro', label: 'AML Policies', translationKey: 'amlPolicies' },
  { path: 'canal-de-denuncias', label: 'Reporting Channel', translationKey: 'reportingChannel' },
] satisfies LegalRoute[]

type LegalRoutePath = (typeof legalRoutes)[number]['path']

type LegalRouteAlias = {
  paths: readonly string[]
  targetPath: LegalRoutePath
}

export const legalRouteAliases = [
  {
    paths: ['terms-of-use', 'en/terms-of-use', 'terms-of-service', 'en/terms-of-service'],
    targetPath: 'termos-de-uso',
  },
  {
    paths: ['privacy-policy', 'en/privacy-policy'],
    targetPath: 'politica-de-privacidade',
  },
  {
    paths: ['user-content-ownership', 'en/user-content-ownership'],
    targetPath: 'propriedade-e-conteudo',
  },
  {
    paths: ['payments-and-fees', 'en/payments-and-fees'],
    targetPath: 'pagamentos-e-taxas',
  },
  {
    paths: ['code-of-ethics', 'en/code-of-ethics'],
    targetPath: 'codigo-de-etica',
  },
  {
    paths: ['general-compliance-program', 'en/general-compliance-program'],
    targetPath: 'programa-geral-de-compliance',
  },
  {
    paths: [
      'anti-money-laundering-policies',
      'en/anti-money-laundering-policies',
    ],
    targetPath: 'politicas-de-prevencao-a-lavagem-de-dinheiro',
  },
  {
    paths: ['reporting-channel', 'en/reporting-channel'],
    targetPath: 'canal-de-denuncias',
  },
  {
    paths: [
      'produtos-proibidos',
      'pt/produtos-proibidos',
      'prohibited-products',
      'en/prohibited-products',
    ],
    targetPath: 'aup',
  },
  {
    paths: ['termos-de-servicos', 'pt/termos-de-servicos'],
    targetPath: 'termos-de-uso',
  },
] satisfies LegalRouteAlias[]

export const legalSidebarRoutes = legalRoutes
