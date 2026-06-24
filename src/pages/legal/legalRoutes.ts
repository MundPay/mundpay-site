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

export const legalSidebarRoutes = legalRoutes
