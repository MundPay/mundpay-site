import type { ReactNode } from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'

type AppFieldProps = {
  children: ReactNode
  error?: string
  hideLabel?: boolean
  htmlFor: string
  label: string
}

export function AppField({
  children,
  error,
  hideLabel = false,
  htmlFor,
  label,
}: AppFieldProps) {
  return (
    <Field data-invalid={Boolean(error)}>
      <FieldLabel
        htmlFor={htmlFor}
        className={hideLabel ? 'sr-only' : 'font-space-grotesk text-[13px] text-[#EAEEE4]/75'}
      >
        {label}
      </FieldLabel>
      {children}
      {error ? (
        <FieldError className="font-space-grotesk text-[12px] text-[#A2D035]">
          {error}
        </FieldError>
      ) : null}
    </Field>
  )
}
