import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export type AppSelectOption = {
  label: string
  value: string
}

type AppSelectProps = {
  helperText?: string
  id: string
  name: string
  onValueChange: (value: string) => void
  options: AppSelectOption[]
  placeholder: string
  required?: boolean
  value: string
}

export function AppSelect({
  helperText,
  id,
  name,
  onValueChange,
  options,
  placeholder,
  required = false,
  value,
}: AppSelectProps) {
  return (
    <Select
      name={name}
      required={required}
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        id={id}
        className="h-auto min-h-14 w-full rounded-[9px] border-[#EAEEE4]/15 bg-black/20 px-3.5 py-2.5 font-space-grotesk text-[15px] text-[#EAEEE4] data-placeholder:text-[#EAEEE4]/45 focus-visible:border-[#A2D035]/65 focus-visible:ring-[#A2D035]/15"
      >
        <span className="flex min-w-0 flex-col items-start gap-0.5 text-left">
          <SelectValue placeholder={placeholder} />
          {helperText ? (
            <span className="max-w-full truncate text-[12px] font-normal text-[#EAEEE4]/45">
              {helperText}
            </span>
          ) : null}
        </span>
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="border border-[#EAEEE4]/15 bg-[#09090B] text-[#EAEEE4] ring-0"
      >
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="font-space-grotesk text-[14px] focus:bg-[#A2D035] focus:text-[#050700]"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
