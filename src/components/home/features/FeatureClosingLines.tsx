import { PatternStrip } from './PatternStrip'

const closingLinePositions = ['left-[40px]', 'left-[55px]', 'left-[257px]', 'right-[40px]']

export function FeatureClosingLines() {
  return (
    <div className="relative min-h-[128px] overflow-hidden border-x border-b border-[#0507001A] bg-[#EAEEE4]">
      <PatternStrip />
      <PatternStrip side="right" />
      {closingLinePositions.map((position) => (
        <div key={position} className={`absolute inset-y-0 ${position} z-[2] w-px bg-[#0507001A]`} />
      ))}
    </div>
  )
}
