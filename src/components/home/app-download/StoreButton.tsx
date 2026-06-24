import appleStoreIcon from "../../../assets/image/5e1d165ded-Qe5MP2KJNw6OeZxLNU5qWIkI.svg";
import googleStoreIcon from "../../../assets/image/556cb882aa-O2mX1v1SBcExEKhlIP4CA21ZJaI.svg";

type StoreButtonProps = {
  label: string;
  type: "apple" | "google";
  href: string;
};

export function StoreButton({ label, type, href }: StoreButtonProps) {
  const icon = type === "apple" ? appleStoreIcon : googleStoreIcon;
  const widthClass =
    type === "apple"
      ? "w-[148px] min-[1201px]:w-[167.73px]"
      : "w-[164px] min-[1201px]:w-[190.45px]";
  const badgeHoverLeftClass =
    type === "apple" ? "group-hover:left-[115px]" : "group-hover:left-[137.72px]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-12 ${widthClass} items-center overflow-hidden rounded-full bg-[rgba(162,209,52,0.2)] px-5 font-space-grotesk text-[13px] font-bold uppercase leading-none tracking-[-0.03em] text-[#EAEEE4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_0_rgba(162,208,53,0.2)] transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:bg-[#A2D035] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_8px_rgba(162,208,53,0.2)] min-[1201px]:h-[54px] min-[1201px]:px-[22px] min-[1201px]:text-[16px]`}
    >
      <span
        className={`absolute bottom-px left-px right-px top-px rounded-full bg-gradient-to-b from-[#0B0B0E] to-[#050700] transition-[bottom,left,right,top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bottom-[5px] ${badgeHoverLeftClass} group-hover:right-[5px] group-hover:top-[5px]`}
      />
      <span className="relative z-[1] transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:text-[#050700]">
        {label}
      </span>
      <span className="absolute right-4 top-1/2 z-[1] flex size-5 -translate-y-1/2 items-center justify-center min-[1201px]:right-[18px] min-[1201px]:size-6">
        <img src={icon} alt="" className="block size-5 min-[1201px]:size-6" loading="lazy" />
      </span>
    </a>
  );
}
