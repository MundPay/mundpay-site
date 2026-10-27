import { useTranslation } from 'react-i18next'

import { RefundPolicySection } from './RefundPolicySection'

export function RefundShippingSection() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'legal.pages.refundPolicy.shipping' })

  return (
    <RefundPolicySection id="refund-shipping" title={t('title')}>
      <h3>{t('roles.title')}</h3>
      <p>{t('roles.description')}</p>
      <h3>{t('dispatch.title')}</h3>
      <p>{t('dispatch.description')}</p>
      <h3>{t('costs.title')}</h3>
      <p>{t('costs.description')}</p>
      <h3>{t('tracking.title')}</h3>
      <p>{t('tracking.description')}</p>
      <h3>{t('delays.title')}</h3>
      <p>{t('delays.description')}</p>
      {i18n.exists('legal.pages.refundPolicy.shipping.delays.eeaRights') ? (
        <p>{t('delays.eeaRights')}</p>
      ) : null}
      <h3>{t('incidents.title')}</h3>
      <p>{t('incidents.description')}</p>
      <ul>
        <li>{t('incidents.reporting.nonDelivery')}</li>
        <li>{t('incidents.reporting.damage')}</li>
      </ul>
      <p>{t('incidents.resolution')}</p>
      <h3>{t('address.title')}</h3>
      <p>{t('address.description')}</p>
      <h3>{t('restrictions.title')}</h3>
      <p>{t('restrictions.description')}</p>
    </RefundPolicySection>
  )
}
