import { useTranslation } from 'react-i18next'

import { LegalDocument } from '../LegalDocument'
import { LegalLayout } from '../LegalLayout'
import { RefundPhysicalProductsSection } from '../refund-policy/RefundPhysicalProductsSection'
import { RefundPolicySection } from '../refund-policy/RefundPolicySection'
import { RefundPolicyTable } from '../refund-policy/RefundPolicyTable'
import { RefundShippingSection } from '../refund-policy/RefundShippingSection'

export function RefundPolicyPage() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'legal.pages.refundPolicy' })
  const isPortuguese = i18n.resolvedLanguage?.toLowerCase().startsWith('pt')
  const helpUrl = isPortuguese ? 'https://www.mundpay.com.br/help' : 'https://www.mundpay.com.br/en/help'

  return (
    <LegalLayout>
      <LegalDocument>
        <h1>{t('title')}</h1>
        <p><em>{t('lastUpdated')}</em></p>

        <RefundPolicySection id="refund-scope" title={t('scope.title')}>
          <p>{t('scope.policy')}</p>
          <p>{t('scope.entities')}</p>
          <p>{t('scope.rights')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-windows" title={t('windows.title')}>
          <p>{t('windows.introduction')}</p>
          <RefundPolicyTable tableKey="windows.table" headingId="refund-windows" />
        </RefundPolicySection>

        <RefundShippingSection />
        <RefundPhysicalProductsSection />

        <RefundPolicySection id="refund-supplements" title={t('supplements.title')}>
          <ul>
            <li>{t('supplements.sealed')}</li>
            <li>{t('supplements.defects')}</li>
            <li>{t('supplements.recalls')}</li>
          </ul>
        </RefundPolicySection>

        <RefundPolicySection id="refund-digital-products" title={t('digital.title')}>
          <h3>{t('digital.standard.title')}</h3>
          <p>{t('digital.standard.description')}</p>
          <h3>{t('digital.statutory.title')}</h3>
          <p>{t('digital.statutory.description')}</p>
          <h3>{t('digital.access.title')}</h3>
          <p>{t('digital.access.description')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-subscriptions" title={t('subscriptions.title')}>
          <h3>{t('subscriptions.consent.title')}</h3>
          <p>{t('subscriptions.consent.description')}</p>
          <h3>{t('subscriptions.cancellation.title')}</h3>
          <p>{t('subscriptions.cancellation.description')}</p>
          <p>{t('subscriptions.cancellation.supplierRequirements')}</p>
          <h3>{t('subscriptions.refunds.title')}</h3>
          <p>{t('subscriptions.refunds.description')}</p>
          <p>{t('subscriptions.refunds.renewalCancellation')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-requests" title={t('requests.title')}>
          <h3>{t('requests.submit.title')}</h3>
          <p>{t('requests.submit.description')}</p>
          <h3>{t('requests.response.title')}</h3>
          <p>{t('requests.response.description')}</p>
          <h3>{t('requests.intervention.title')}</h3>
          <p>{t('requests.intervention.description')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-processing" title={t('processing.title')}>
          <RefundPolicyTable tableKey="processing.table" headingId="refund-processing" />
          <p>{t('processing.method')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-exceptions" title={t('exceptions.title')}>
          <ul>
            <li>{t('exceptions.damage')}</li>
            <li>{t('exceptions.digital')}</li>
            <li>{t('exceptions.supplements')}</li>
            <li>{t('exceptions.business')}</li>
          </ul>
        </RefundPolicySection>

        <RefundPolicySection id="refund-chargebacks" title={t('chargebacks.title')}>
          <p>{t('chargebacks.description')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-privacy" title={t('privacy.title')}>
          <p>{t('privacy.description')}</p>
        </RefundPolicySection>

        <RefundPolicySection id="refund-updates" title={t('updates.title')}>
          <p>{t('updates.notice')}</p>
          <p>{t('updates.applicability')}</p>
        </RefundPolicySection>

        <p className="break-words">
          <strong>{t('contact.supportLabel')}</strong>{' '}
          <a href="mailto:help@mundpay.com">help@mundpay.com</a>
          {' · '}
          <strong>{t('contact.helpLabel')}</strong>{' '}
          <a href={helpUrl}>{helpUrl}</a>
          {' · '}
          <strong>{t('contact.phoneLabel')}</strong>{' '}
          <a href="https://wa.me/+5521988294968">+55 (21) 988294968</a>
        </p>
      </LegalDocument>
    </LegalLayout>
  )
}
