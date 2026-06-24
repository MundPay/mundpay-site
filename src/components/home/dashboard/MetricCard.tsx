type MetricCardProps = {
  accent: string
  label: string
  value: string
}

export function MetricCard({ accent, label, value }: MetricCardProps) {
  return (
    <div
      data-metric-card
      className="flex h-[88px] w-[297px] items-center rounded-xl border border-mundpay-border bg-mundpay-panel p-4"
    >
      <div className="flex items-center gap-4">
        <span className="h-11 w-0.5 rounded-full" style={{ background: accent }} />
        <div>
          <p className="font-space-grotesk text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-mundpay-cream/75">
            {label}
          </p>
          <strong className="mt-2 block text-balance font-space-grotesk text-[20px] font-semibold leading-[1.5] tracking-[-0.02em] text-mundpay-cream/75">
            {value}
          </strong>
        </div>
      </div>
    </div>
  )
}
