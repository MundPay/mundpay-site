import {
  type ComponentType,
  type FocusEventHandler,
  useDeferredValue,
  useMemo,
  useState,
} from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { getCountryCallingCode, type Country } from 'react-phone-number-input'
import { cn } from '../../lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const INITIAL_COUNTRIES: Country[] = [
  'BR',
  'PT',
  'US',
  'AR',
  'CL',
  'CO',
  'MX',
  'PE',
  'UY',
  'PY',
]
const SEARCH_RESULTS_LIMIT = 30
const DIACRITICS_PATTERN = /\p{Diacritic}/gu

type CountryOption = {
  divider?: boolean
  label: string
  value?: Country
}

type SearchableCountryOption = CountryOption & {
  callingCode: string
  searchValue: string
  value: Country
}

type CountryIconProps = {
  'aria-hidden'?: boolean
  country?: Country
  label: string
}

type AppPhoneCountrySelectProps = {
  className?: string
  disabled?: boolean
  emptyMessage?: string
  iconComponent: ComponentType<CountryIconProps>
  onBlur?: FocusEventHandler<HTMLButtonElement>
  onChange: (country?: Country) => void
  onFocus?: FocusEventHandler<HTMLButtonElement>
  options: CountryOption[]
  readOnly?: boolean
  searchPlaceholder?: string
  value?: Country
}

function normalizeSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(DIACRITICS_PATTERN, '')
    .toLocaleLowerCase()
    .trim()
}

export function AppPhoneCountrySelect({
  className,
  disabled,
  emptyMessage,
  iconComponent: CountryIcon,
  onBlur,
  onChange,
  onFocus,
  options,
  readOnly,
  searchPlaceholder,
  value,
}: AppPhoneCountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const countryOptions = useMemo<SearchableCountryOption[]>(
    () =>
      options.flatMap((option) => {
        if (option.divider || !option.value) return []

        const callingCode = getCountryCallingCode(option.value)

        return [{
          ...option,
          callingCode,
          searchValue: normalizeSearch(
            `${option.label} ${option.value} +${callingCode}`,
          ),
          value: option.value,
        }]
      }),
    [options],
  )

  const selectedOption = countryOptions.find((option) => option.value === value)
  const visibleOptions = useMemo(() => {
    const normalizedSearch = normalizeSearch(deferredSearch)

    if (normalizedSearch) {
      return countryOptions
        .filter((option) => option.searchValue.includes(normalizedSearch))
        .slice(0, SEARCH_RESULTS_LIMIT)
    }

    const initialCountrySet = new Set(INITIAL_COUNTRIES)
    if (value) initialCountrySet.add(value)

    return Array.from(initialCountrySet).flatMap((country) => {
      const option = countryOptions.find((item) => item.value === country)
      return option ? [option] : []
    })
  }, [countryOptions, deferredSearch, value])

  function handleOpenChange(nextIsOpen: boolean) {
    setIsOpen(nextIsOpen)
    if (!nextIsOpen) setSearch('')
  }

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-label={selectedOption?.label}
          disabled={disabled || readOnly}
          className={cn(
            'mr-3 flex h-full w-13 shrink-0 cursor-pointer items-center justify-between gap-1 rounded-none border-0 border-r border-[#EAEEE4]/10 bg-transparent p-0 pr-3 text-[#EAEEE4] outline-none disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:border-[#A2D035]/65',
            className,
          )}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {selectedOption ? (
            <CountryIcon
              aria-hidden
              country={selectedOption.value}
              label={selectedOption.label}
            />
          ) : null}
          <ChevronDownIcon aria-hidden className="size-3.5 shrink-0 opacity-60" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={8}
        data-lenis-prevent
        className="w-[min(320px,calc(100vw-2rem))] gap-0 overflow-hidden border border-[#EAEEE4]/15 bg-[#09090B] p-0 text-[#EAEEE4] shadow-[0_18px_50px_rgba(0,0,0,0.55)] ring-0"
      >
        <Command shouldFilter={false} className="rounded-none bg-transparent p-0 text-[#EAEEE4]">
          <CommandInput
            value={search}
            onValueChange={setSearch}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="font-space-grotesk text-[#EAEEE4] placeholder:text-[#EAEEE4]/45"
          />
          <CommandList
            data-lenis-prevent
            className={cn(
              'max-h-[min(280px,50dvh)] overscroll-contain [scrollbar-color:#A2D035_transparent]! [scrollbar-width:thin]!',
              '[&::-webkit-scrollbar]:block! [&::-webkit-scrollbar]:w-2! [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A2D035] [&::-webkit-scrollbar-track]:bg-transparent',
            )}
            onTouchMove={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
          >
            <CommandEmpty className="text-[#EAEEE4]/60">
              {emptyMessage}
            </CommandEmpty>
            <CommandGroup>
              {visibleOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  data-checked={option.value === value}
                  onSelect={() => {
                    onChange(option.value)
                    handleOpenChange(false)
                  }}
                  className={cn(
                    'cursor-pointer py-2 font-space-grotesk text-[14px] text-[#EAEEE4]',
                    'data-selected:bg-[#A2D035] data-selected:text-[#050700]',
                    '[&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon]:shrink-0',
                  )}
                >
                  <CountryIcon
                    aria-hidden
                    country={option.value}
                    label={option.label}
                  />
                  <span className="min-w-0 flex-1 truncate">{option.label}</span>
                  <span className="text-xs opacity-60">+{option.callingCode}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
