import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CrispChat } from './components/support/CrispChat'
import { useLenis } from './hooks/useLenis'
import { LanguageRouteSync } from './i18n/LanguageRouteSync'
import { languageRoutePrefixes } from './i18n/languageRouting'
import { HelpPage } from './pages/help/HelpPage'
import { HomePage } from './pages/home/HomePage'
import { legalRouteAliases, legalRoutes } from './pages/legal/legalRoutes'
import {
  AcceptableUsePolicyPage,
  AmlPoliciesPage,
  CodeOfEthicsPage,
  GeneralComplianceProgramPage,
  PaymentsFeesPage,
  PrivacyPolicyPage,
  RefundPolicyPage,
  ReportingChannelPage,
  SellerAgreementPage,
  TermsOfUsePage,
  UserContentOwnershipPage,
} from './pages/legal/pages'
import { NotFoundPage } from './pages/not-found/NotFoundPage'
import { Seo } from './seo/Seo'

const legalPageByPath: Record<string, ReactElement> = {
  'termos-de-uso': <TermsOfUsePage />,
  'politica-de-privacidade': <PrivacyPolicyPage />,
  'propriedade-e-conteudo': <UserContentOwnershipPage />,
  'pagamentos-e-taxas': <PaymentsFeesPage />,
  'refund-policy': <RefundPolicyPage />,
  'seller-agreement': <SellerAgreementPage />,
  'codigo-de-etica': <CodeOfEthicsPage />,
  'programa-geral-de-compliance': <GeneralComplianceProgramPage />,
  aup: <AcceptableUsePolicyPage />,
  'politicas-de-prevencao-a-lavagem-de-dinheiro': <AmlPoliciesPage />,
  'canal-de-denuncias': <ReportingChannelPage />,
}

const homeRoutePaths = [
  '/',
  ...languageRoutePrefixes.map((prefix) => `/${prefix}`),
]

function getLanguageRoutePaths(path: string) {
  return [
    path,
    ...languageRoutePrefixes.map((prefix) => `${prefix}/${path}`),
  ]
}

const helpRoutePaths = [
  'help',
  'me-ajuda',
  'ajuda',
  'en/help',
  'en/me-ajuda',
  'pt/me-ajuda',
  'pt/ajuda',
]

function App() {
  useLenis()

  return (
    <>
      <CrispChat />
      <Seo />
      <LanguageRouteSync />
      <Routes>
        {homeRoutePaths.map((path) => (
          <Route key={path} path={path} element={<HomePage />} />
        ))}
        {getLanguageRoutePaths('lp').map((path) => (
          <Route key={path} path={path} element={<HomePage variant="lp" />} />
        ))}
        {helpRoutePaths.map((path) => (
          <Route key={path} path={path} element={<HelpPage />} />
        ))}
        {legalRoutes.map((route) => (
          getLanguageRoutePaths(route.path).map((path) => (
            <Route
              key={path}
              path={path}
              element={legalPageByPath[route.path]}
            />
          ))
        ))}
        {legalRouteAliases.flatMap(({ paths, targetPath }) => (
          paths.map((path) => (
            <Route
              key={path}
              path={path}
              element={legalPageByPath[targetPath]}
            />
          ))
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
