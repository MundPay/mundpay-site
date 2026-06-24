import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { HelpPage } from './pages/help/HelpPage'
import { HomePage } from './pages/home/HomePage'
import { legalRoutes } from './pages/legal/legalRoutes'
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

function App() {
  useLenis()

  return (
    <>
      <Seo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/me-ajuda" element={<HelpPage />} />
        {legalRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={legalPageByPath[route.path]}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
