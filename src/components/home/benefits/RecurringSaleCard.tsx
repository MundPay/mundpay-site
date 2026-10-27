import { useTranslation } from 'react-i18next'
import { RecurringSaleIcon } from '../../icons/RecurringSaleIcon'

type RecurringSaleCardProps = {
  id: string
  currency: 'BRL' | 'USD' | 'EUR'
  amount: number
  layer: number
}

const currencyLabels = { BRL: 'R$', USD: 'USD$', EUR: 'EUR€' } as const

export function RecurringSaleCard({ id, currency, amount, layer }: RecurringSaleCardProps) {
  const { t, i18n } = useTranslation()
  const locale = i18n.resolvedLanguage === 'pt-BR' ? 'pt-BR' : 'en-US'
  const formattedAmount = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)

  return (
    <div className={`recurring-sale-position recurring-sale-${id}`} style={{ zIndex: layer }}>
      <div className="recurring-sale-card font-space-grotesk">
        <div className="recurring-sale-icon">
          <RecurringSaleIcon />
        </div>
        <div className="recurring-sale-copy">
          <span className="block">{t('home.benefits.cards.recurringPayment.animation.completed')}</span>
          <span className="block">{currencyLabels[currency]} {formattedAmount}</span>
        </div>
        <span className="recurring-sale-time">
          {t('home.benefits.cards.recurringPayment.animation.now')}
        </span>
      </div>
    </div>
  )
}
