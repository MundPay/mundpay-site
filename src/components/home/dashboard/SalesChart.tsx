import { mundpayAssets } from '../../../assets/mundpayAssets'

export function SalesChart() {
  return (
    <div className="max-h-[324px] max-w-[553px] overflow-hidden rounded-xl border border-[#27272a] bg-[#09090b]">
      <img
        src={mundpayAssets.paidSalesPreview}
        alt="Vendas pagas por hora"
        className="block h-auto max-h-[324px] w-full max-w-[553px]"
      />
    </div>
  )
}
