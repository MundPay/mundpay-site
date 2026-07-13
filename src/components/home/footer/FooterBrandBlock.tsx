import { useTranslation } from "react-i18next";
import { mundpayAssets } from "../../../assets/mundpayAssets";
import { appStoreHref, playStoreHref, socialLinks } from "./footerData";
import { FooterSeparator } from "./FooterSeparator";
import { FooterSocialLink } from "./FooterSocialLink";
import { FooterStoreButton } from "./FooterStoreButton";

export function FooterBrandBlock() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center min-[811px]:items-start">
      <a href="#header" className="block w-fit">
        <img src={mundpayAssets.logoWhite} alt="mundpay" className="h-[30px] w-auto" />
      </a>

      <div className="mt-7 flex items-center gap-8 text-white/65 min-[1201px]:mt-[33px]">
        {socialLinks.map((social) => (
          <FooterSocialLink
            key={social.icon}
            href={social.href}
            label={social.label}
            icon={social.icon}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-[10px] min-[811px]:hidden">
        <FooterStoreButton href={appStoreHref} label="App Store" icon="apple" />
        <FooterStoreButton href={playStoreHref} label="Play Store" icon="play" />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[14px] font-normal leading-none text-mundpay-cream/35 min-[811px]:justify-start min-[1201px]:mt-13 min-[1201px]:gap-4.5 min-[1201px]:text-[14px]">
        <span>&copy;2026</span>
        <FooterSeparator />
        <span>MUNDPAY</span>
        <FooterSeparator />
        <span>{t("home.footer.copyright.allRightsReserved")}</span>
      </div>
    </div>
  );
}
