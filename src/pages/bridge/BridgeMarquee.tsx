import { useBridgeTranslation } from './useBridgeTranslation'

const methods = [
  'Pix',
  'Boleto',
  'SPEI',
  'PSE',
  'Bre-B',
  'Nequi',
  'Daviplata',
  'Yape',
  'Plin',
  'Khipu',
  'Fintoc',
  'MACH',
  'Mercado Pago',
  'MODO',
  'Efecty',
  'Servipag',
  'Rapipago',
  'Kasnet',
]

export function BridgeMarquee() {
  const { t } = useBridgeTranslation()

  return (
    <div className="marq">
      <div className="marq-track">
        <ul aria-label={t('marq_l')}>
          {methods.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul aria-hidden="true">
          {methods.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
