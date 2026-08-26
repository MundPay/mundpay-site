import type { ComponentProps } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { cn } from '../../lib/utils'
import { AppPhoneCountrySelect } from './AppPhoneCountrySelect'

type AppPhoneInputProps = ComponentProps<typeof PhoneInput>

export function AppPhoneInput({ className, ...props }: AppPhoneInputProps) {
  return (
    <PhoneInput
      addInternationalOption={false}
      countrySelectComponent={AppPhoneCountrySelect}
      className={cn(
        'h-13 rounded-[9px] border border-[#EAEEE4]/15 bg-black/20 px-3.5 text-[#EAEEE4] transition-[color,box-shadow,border-color] focus-within:border-[#A2D035]/65 focus-within:ring-[3px] focus-within:ring-[#A2D035]/15',
        '[--PhoneInput-color--focus:#A2D035] [--PhoneInputCountryFlag-borderColor:rgba(234,238,228,0.18)] [--PhoneInputCountryFlag-height:16px]',
        '[&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:font-space-grotesk [&_.PhoneInputInput]:text-[15px] [&_.PhoneInputInput]:text-[#EAEEE4] [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-[#EAEEE4]/45',
        'has-[[aria-invalid=true]]:border-[#A2D035]/65 has-[[aria-invalid=true]]:ring-[3px] has-[[aria-invalid=true]]:ring-[#A2D035]/15',
        className,
      )}
      {...props}
    />
  )
}
