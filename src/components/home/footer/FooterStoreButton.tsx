import { AppleIcon } from "../../icons/AppleIcon";
import { PlayStoreIcon } from "../../icons/PlayStoreIcon";

type FooterStoreButtonProps = {
  href: string;
  label: string;
  icon: "apple" | "play";
};

export function FooterStoreButton({ href, label, icon }: FooterStoreButtonProps) {
  const Icon = icon === "apple" ? AppleIcon : PlayStoreIcon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[38px] w-fit items-center gap-2 rounded-full bg-[#EAEEE4]/[0.05] px-[15px] text-[14px] font-normal leading-none text-[#EAEEE4]/75 transition-colors duration-300 hover:bg-[#A2D035]/20 hover:text-[#EAEEE4]"
    >
      <Icon className="size-[18px]" />
      <span>{label}</span>
    </a>
  );
}
