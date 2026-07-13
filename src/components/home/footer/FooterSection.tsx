import footerBackgroundLogo from "../../../assets/image/68eef8a3d3-tzjzM5myUA2OJRfcZIQ43LjdT88.svg";
import { FooterBrandBlock } from "./FooterBrandBlock";
import { FooterColumns } from "./FooterColumns";
import { FooterOffices } from "./FooterOffices";

export function FooterSection() {
  return (
    <section
      className="relative min-[1201px]:h-[953.25px]"
      id="footer"
    >
      <footer
        className="relative z-[1] overflow-hidden bg-black px-6 pb-10 pt-44 text-[#EAEEE4] min-[811px]:px-10 min-[811px]:pb-12 min-[811px]:pt-48 min-[1201px]:fixed min-[1201px]:inset-x-0 min-[1201px]:bottom-0 min-[1201px]:z-0 min-[1201px]:h-[953.25px] min-[1201px]:p-0"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-10 flex justify-center min-[811px]:top-16 min-[1201px]:top-[362px]"
        >
          <div
            className="h-[96px] w-[min(760px,145vw)] bg-[#18181B] opacity-75 min-[811px]:w-[570px] min-[1201px]:opacity-100"
            style={{
              mask: `url(${footerBackgroundLogo}) center / contain no-repeat alpha`,
              WebkitMask: `url(${footerBackgroundLogo}) center / contain no-repeat`,
            }}
            aria-hidden="true"
          />
        </div>

        <div
          className="relative z-[2] mx-auto grid max-w-[1128px] grid-cols-1 items-start gap-12 min-[811px]:grid-cols-[minmax(260px,430px)_1fr] min-[811px]:gap-10 min-[1201px]:absolute min-[1201px]:inset-x-0 min-[1201px]:top-[510px] min-[1201px]:grid-cols-[580px_1fr] min-[1201px]:gap-0"
        >
          <FooterBrandBlock />
          <FooterColumns />
        </div>

        <FooterOffices />
      </footer>
    </section>
  );
}
