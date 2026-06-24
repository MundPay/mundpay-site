import { useTranslation } from "react-i18next";
import { mundpayAssets } from "../../../assets/mundpayAssets";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { appStoreHref, playStoreHref, socialLinks } from "./footerData";
import { FooterStoreButton } from "./FooterStoreButton";

const socialIconByType = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

export function FooterBrandBlock() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center min-[811px]:items-start">
      <a href="#header" className="block w-fit">
        <img src={mundpayAssets.logoWhite} alt="mundpay" className="h-[30px] w-auto" />
      </a>

      <div className="mt-7 flex items-center gap-8 text-white/65 min-[1201px]:mt-[33px]">
        {socialLinks.map((social) => {
          const Icon = socialIconByType[social.icon];
          const iconClassName = social.icon === "youtube" ? "h-4 w-5" : "size-[18px]";

          return (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition-colors hover:text-white"
            >
              <Icon className={iconClassName} />
            </a>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-[10px] min-[811px]:hidden">
        <FooterStoreButton href={appStoreHref} label="App Store" icon="apple" />
        <FooterStoreButton href={playStoreHref} label="Play Store" icon="play" />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[13px] font-semibold leading-none text-[#EAEEE4]/35 min-[811px]:justify-start min-[1201px]:mt-[52px] min-[1201px]:gap-[18px] min-[1201px]:text-[16px]">
        <span>&copy;2026</span>
        <span className="text-white/35">|</span>
        <span>MUNDPAY</span>
        <span className="text-white/35">|</span>
        <span>{t("home.footer.copyright.allRightsReserved")}</span>
      </div>
    </div>
  );
}
