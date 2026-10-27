import { useTranslation } from 'react-i18next'

type RefundPolicyTableData = {
  headers: string[]
  rows: string[][]
}

type RefundPolicyTableProps = {
  tableKey: 'windows.table' | 'processing.table'
  headingId: string
}

export function RefundPolicyTable({ tableKey, headingId }: RefundPolicyTableProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'legal.pages.refundPolicy' })
  const { headers, rows } = t(tableKey, { returnObjects: true }) as RefundPolicyTableData

  return (
    <div
      role="region"
      aria-labelledby={headingId}
      tabIndex={0}
      className="mb-6 max-w-full overflow-x-auto rounded-lg border border-mundpay-cream/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mundpay-lime"
    >
      <table aria-labelledby={headingId} className="w-full min-w-lg border-collapse text-left text-sm leading-relaxed">
        <thead className="bg-mundpay-cream/5 text-mundpay-cream">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 align-top font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label} className="border-t border-mundpay-cream/15">
              <th scope="row" className="px-4 py-3 align-top font-medium text-mundpay-cream">
                {label}
              </th>
              {cells.map((cell, index) => (
                <td key={headers[index + 1]} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
