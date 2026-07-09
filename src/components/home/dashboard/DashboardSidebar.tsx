import { useTranslation } from 'react-i18next'
import { Logo } from '../../brand/Logo'
import { DashboardGridIcon } from '../../icons/DashboardGridIcon'
import { FinancialWalletIcon } from '../../icons/FinancialWalletIcon'
import { IntegrationsNodesIcon } from '../../icons/IntegrationsNodesIcon'
import { MarketplaceCartIcon } from '../../icons/MarketplaceCartIcon'
import { MembersCapIcon } from '../../icons/MembersCapIcon'
import { ProductTagIcon } from '../../icons/ProductTagIcon'
import { ReferSparkIcon } from '../../icons/ReferSparkIcon'
import { ReportsBarsIcon } from '../../icons/ReportsBarsIcon'
import { SalesCircleDollarIcon } from '../../icons/SalesCircleDollarIcon'
import { SubscriptionsCycleIcon } from '../../icons/SubscriptionsCycleIcon'

const menuItems = [
  { key: 'dashboard', Icon: DashboardGridIcon },
  { key: 'products', Icon: ProductTagIcon },
  { key: 'marketplace', Icon: MarketplaceCartIcon },
  { key: 'sales', Icon: SalesCircleDollarIcon },
  { key: 'subscriptions', Icon: SubscriptionsCycleIcon },
  { key: 'financial', Icon: FinancialWalletIcon },
  { key: 'membersArea', Icon: MembersCapIcon },
  { key: 'integrations', Icon: IntegrationsNodesIcon },
  { key: 'reports', Icon: ReportsBarsIcon },
  { key: 'referAndEarn', Icon: ReferSparkIcon },
] as const

export function DashboardSidebar() {
  const { t } = useTranslation()

  return (
    <aside className="hidden w-[178px] shrink-0 border-r border-mundpay-border bg-mundpay-panel-muted p-4 md:block">
      <Logo />
      <div className="mt-8 space-y-2">
        {menuItems.map(({ Icon, key }, index) => (
          <div
            key={key}
            className={`flex h-9 items-center gap-3 rounded-md px-3 font-space-grotesk text-[14px] font-normal leading-[1.5] tracking-[-0.02em] ${
              index === 0 ? 'bg-mundpay-border text-mundpay-cream/75' : 'text-mundpay-cream/75'
            }`}
          >
            <Icon className="size-3.5 shrink-0" />
            <span className="whitespace-nowrap">{t(`home.dashboard.menu.${key}`)}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
