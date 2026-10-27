import { RecurringSaleCard } from './RecurringSaleCard'
import './recurring-payment.css'

// Mesma ordem de camadas, vendas e dimensões do recurring-payment.json.
const sales = [
  { id: 'usd-small', currency: 'USD', amount: 250 },
  { id: 'eur', currency: 'EUR', amount: 1750 },
  { id: 'usd', currency: 'USD', amount: 1250 },
  { id: 'brl-first', currency: 'BRL', amount: 1400 },
  { id: 'brl-last', currency: 'BRL', amount: 657 },
] as const

export function RecurringPaymentVisual() {
  return (
    <div className="recurring-payment-visual pointer-events-none relative h-full w-full" aria-hidden="true">
      {sales.map((sale, index) => (
        <RecurringSaleCard key={sale.id} {...sale} layer={sales.length - index} />
      ))}
    </div>
  )
}
