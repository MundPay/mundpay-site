import { offices } from "./footerData";
import { FooterOffice } from "./FooterOffice";

export function FooterOffices() {
  return (
    <div className="relative z-[2] mx-auto mt-12 max-w-[1128px] min-[1201px]:absolute min-[1201px]:inset-x-0 min-[1201px]:bottom-[61px] min-[1201px]:mt-0">
      <div data-footer-divider className="h-px w-full bg-[#A2D035]/35" />
      <div data-footer-offices className="mt-7 grid grid-cols-1 gap-4 min-[811px]:grid-cols-3 min-[811px]:gap-6 min-[1201px]:grid-cols-[345px_345px_1fr] min-[1201px]:gap-[38px]">
        {offices.map((office) => (
          <FooterOffice key={office.text} flag={office.flag} text={office.text} />
        ))}
      </div>
    </div>
  );
}
