import { useTranslation } from 'react-i18next'

import { RefundPolicySection } from './RefundPolicySection'

type WithdrawalItem = {
  label: string
  description: string
}

export function RefundPhysicalProductsSection() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'legal.pages.refundPolicy.physical' })
  const withdrawalItems = t('withdrawal.items', { returnObjects: true }) as WithdrawalItem[]

  return (
    <RefundPolicySection id="refund-physical-products" title={t('title')}>
      <h3>{t('conditions.title')}</h3>
      <p>{t('conditions.description')}</p>
      <h3>{t('withdrawal.title')}</h3>
      <p>{t('withdrawal.description')}</p>
      <ul>
        {withdrawalItems.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong> {item.description}
          </li>
        ))}
      </ul>
      {i18n.exists('legal.pages.refundPolicy.physical.withdrawal.conformity') ? (
        <p>{t('withdrawal.conformity')}</p>
      ) : null}
      <h3>{t('commercial.title')}</h3>
      <p>{t('commercial.description')}</p>
      <h3>{t('defects.title')}</h3>
      <p>{t('defects.description')}</p>
      <h3>{t('responsibilities.title')}</h3>
      <p>{t('responsibilities.description')}</p>
    </RefundPolicySection>
  )
}
