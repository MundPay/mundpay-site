import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'
import { FieldGroup } from '../ui/field'

type AppFieldGroupProps = ComponentProps<typeof FieldGroup>

export function AppFieldGroup({ className, ...props }: AppFieldGroupProps) {
  return <FieldGroup className={cn('gap-3', className)} {...props} />
}
