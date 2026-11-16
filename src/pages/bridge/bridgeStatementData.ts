import { formatMoney, formatNumber } from './bridgeFormat'
import type { BridgeLocale } from './bridgeRouting'
import { bridgeTransactions } from './bridgeTransactions'
import type { useBridgeTranslation } from './useBridgeTranslation'

export const statementColumns = [
  'th_date',
  'ID',
  'th_amt',
  'th_rate',
  'th_usdt',
  'th_set',
  'Hash',
  'th_status',
] as const
type Transaction = (typeof bridgeTransactions)[number]
type Translate = ReturnType<typeof useBridgeTranslation>['t']

export function getStatementHeadings(t: Translate) {
  return statementColumns.map((key) => (key === 'ID' || key === 'Hash' ? key : t(key)))
}

export function getStatementCells(row: Transaction, language: BridgeLocale, t: Translate) {
  return [
    t('day') + ' · ' + row.time,
    row.id,
    formatMoney(language, row.currency, row.amount),
    formatNumber(language, row.rate, row.rate < 100 ? 2 : 0),
    (row.usdt < 0 ? '−' : '') + formatNumber(language, Math.abs(row.usdt), 2),
    row.settlement,
    row.hash,
    t(row.status === 'ok' ? 'ok_s' : 'wt_s'),
  ]
}

export function exportBridgeStatement(view: string, language: BridgeLocale, t: Translate) {
  const rows = bridgeTransactions.filter(
    (row) => (view !== 'dep' && view !== 'pag') || view === row.type,
  )
  const cells = [getStatementHeadings(t), ...rows.map((row) => getStatementCells(row, language, t))]
  const csv = cells
    .map((row) =>
      row.map((value) => '"' + value.replaceAll('"', '""').replaceAll('−', '-') + '"').join(';'),
    )
    .join('\n')
  const url = URL.createObjectURL(new Blob(['\uFEFFsep=;\n', csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = t('csv_name')
  link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
