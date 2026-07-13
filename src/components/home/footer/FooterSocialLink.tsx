import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";

type FooterSocialLinkProps = {
  href: string;
  label: string;
  icon: "facebook" | "instagram" | "youtube";
};

const socialIconByType = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

export function FooterSocialLink({ href, label, icon }: FooterSocialLinkProps) {
  const Icon = socialIconByType[icon];
  const iconClassName = icon === "youtube" ? "h-4 w-5" : "size-[18px]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-colors hover:text-white"
    >
      <Icon className={iconClassName} />
    </a>
  );
}
