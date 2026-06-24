import { EuropeanUnionFlagIcon } from "../../icons/EuropeanUnionFlagIcon";
import { UnitedStatesFlagIcon } from "../../icons/UnitedStatesFlagIcon";
import { offices } from "./footerData";

export function FooterOffices() {
  return (
    <div className="relative z-[2] mx-auto mt-12 max-w-[1128px] min-[1201px]:absolute min-[1201px]:inset-x-0 min-[1201px]:bottom-[61px] min-[1201px]:mt-0">
      <div data-footer-divider className="h-px w-full bg-[#A2D035]/35" />
      <div data-footer-offices className="mt-7 grid grid-cols-1 gap-4 min-[811px]:grid-cols-3 min-[811px]:gap-6 min-[1201px]:grid-cols-[345px_345px_1fr] min-[1201px]:gap-[38px]">
        {offices.map((office) => (
          <div key={office.text} className="flex items-start gap-[10px] text-[10px] font-semibold leading-[1.35] text-[#EAEEE4]/65">
            {office.flag === "us" ? (
              <UnitedStatesFlagIcon className="size-5 flex-none" />
            ) : (
              <EuropeanUnionFlagIcon className="size-5 flex-none" />
            )}
            <p>{office.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
