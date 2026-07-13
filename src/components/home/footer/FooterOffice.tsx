import { EuropeanUnionFlagIcon } from "../../icons/EuropeanUnionFlagIcon";
import { UnitedStatesFlagIcon } from "../../icons/UnitedStatesFlagIcon";

type FooterOfficeProps = {
  flag: "us" | "eu";
  text: string;
};

export function FooterOffice({ flag, text }: FooterOfficeProps) {
  const FlagIcon = flag === "us" ? UnitedStatesFlagIcon : EuropeanUnionFlagIcon;

  return (
    <div className="flex items-start gap-[10px] text-[10px] font-normal leading-[1.35] text-[#EAEEE4]/65">
      <FlagIcon className="size-5 flex-none" />
      <p>{text}</p>
    </div>
  );
}
