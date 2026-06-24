import { Fragment, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { CardIcon } from '../../icons/CardIcon'
import { CheckIcon } from '../../icons/CheckIcon'
import { PixIcon } from '../../icons/PixIcon'
import { pricingTableRows } from './pricingData'

type TableCellProps = {
  status: boolean
  value: string
  description?: string
}

export function PricingTable() {
  const { t } = useTranslation()

  return (
    <div className="absolute left-0 top-[272px] grid h-[314px] w-full grid-cols-3 grid-rows-[64px_125px_125px] border-t border-[#0507001A] font-space-grotesk text-[#050700]">
      <div className="border-b border-r border-[#0507001A]" />
      <TableHead icon={<PixIcon className="h-full w-full" />} label={t('home.pricing.table.headers.pix')} />
      <TableHead icon={<CardIcon className="h-full w-full" />} label={t('home.pricing.table.headers.card')} />

      {pricingTableRows.map((row) => (
        <Fragment key={row.translationKey}>
          <div className="flex items-center justify-center border-b border-r border-[#0507001A] px-2 text-center text-[11px] font-bold uppercase tracking-[-0.03em] text-[#29282C]/45 min-[811px]:text-[12px]">
            {t(`home.pricing.table.rows.${row.translationKey}.label`)}
          </div>
          <TableCell
            status={row.pix.status}
            value={row.pix.value}
            description={
              row.pix.descriptionKey
                ? t(`home.pricing.table.rows.${row.translationKey}.${row.pix.descriptionKey}`)
                : undefined
            }
          />
          <TableCell
            status={row.card.status}
            value={row.card.value}
            description={
              row.card.descriptionKey
                ? t(`home.pricing.table.rows.${row.translationKey}.${row.card.descriptionKey}`)
                : undefined
            }
          />
        </Fragment>
      ))}
    </div>
  )
}

function TableHead({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-r border-[#0507001A] px-2 text-[13px] font-medium tracking-[-0.03em] text-[#29282C]/70 min-[811px]:gap-[10px] min-[811px]:text-[14px]">
      <span className="size-[18px] text-[#29282C]/70">{icon}</span>
      {label}
    </div>
  )
}

function TableCell({ status, value, description }: TableCellProps) {
  return (
    <div className="flex flex-col items-center justify-center border-b border-r border-[#0507001A] px-3 text-center min-[811px]:px-[28px]">
      {status ? (
        <CheckIcon className="mb-[16px] size-[14px] text-[#A2D035]" />
      ) : (
        <span className="mb-[22px] h-[6px]" />
      )}
      <strong className="font-space-grotesk text-[13px] font-bold leading-[1.25] tracking-[-0.04em] text-[#29282C]/90 min-[811px]:text-[15px]">
        {value}
      </strong>
      {description ? (
        <span className="mt-[14px] font-space-grotesk text-[12px] font-medium leading-[1.35] tracking-[-0.03em] text-[#29282C]/78 min-[811px]:text-[14px]">
          {description}
        </span>
      ) : null}
    </div>
  )
}
