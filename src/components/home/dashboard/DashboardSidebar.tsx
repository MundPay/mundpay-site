import { GridIcon } from '../../icons/GridIcon'
import { Logo } from '../../brand/Logo'
import { useTranslation } from 'react-i18next'

const menuItems = [
  'dashboard',
  'products',
  'marketplace',
  'sales',
  'subscriptions',
  'financial',
  'membersArea',
  'integrations',
  'reports',
  'referAndEarn',
]

export function DashboardSidebar() {
  const { t } = useTranslation()

  return (
    <aside className="hidden w-[178px] shrink-0 border-r border-mundpay-border bg-mundpay-panel-muted p-4 md:block">
      <Logo />
      <div className="mt-8 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className={`flex h-9 items-center gap-3 rounded-md px-3 font-space-grotesk text-[14px] font-normal leading-[1.5] tracking-[-0.02em] ${
              index === 0 ? 'bg-mundpay-border text-mundpay-cream/75' : 'text-mundpay-cream/75'
            }`}
          >
            <GridIcon className="size-3.5" />
            {t(`home.dashboard.menu.${item}`)}
          </div>
        ))}
      </div>
    </aside>
  )
}
