import { useTranslation } from "react-i18next";
import { defaultLanguage } from "../../../i18n/resources";
import { normalizeLanguage, withLanguagePrefix } from "../../../i18n/languageRouting";
import { appStoreHref, playStoreHref } from "./footerData";
import { FooterLink } from "./FooterLink";
import { FooterStoreButton } from "./FooterStoreButton";

export function FooterColumns() {
  const { i18n, t } = useTranslation();
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage) ?? defaultLanguage;

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-10 min-[811px]:grid-cols-3 min-[811px]:gap-[20px] min-[1201px]:grid-cols-[190px_165px_150px]">
      <nav className="col-span-2 min-[811px]:col-span-1">
        <h3 className="text-[12px] font-normal uppercase leading-none tracking-[0.06em] text-[#EAEEE4]/40">
          {t("home.footer.columns.legal.title")}
        </h3>

        <div className="mt-6 flex flex-col gap-6 min-[1201px]:mt-[28px] min-[1201px]:gap-[28px]">
          <FooterLink href={withLanguagePrefix("/pagamentos-e-taxas", currentLanguage)}>
            {t("home.footer.columns.legal.links.paymentsAndFees")}
          </FooterLink>
          <FooterLink href={withLanguagePrefix("/termos-de-uso", currentLanguage)}>
            {t("home.footer.columns.legal.links.terms")}
          </FooterLink>
          <FooterLink href={withLanguagePrefix("/politica-de-privacidade", currentLanguage)}>
            {t("home.footer.columns.legal.links.privacy")}
          </FooterLink>
          <FooterLink href={withLanguagePrefix("/canal-de-denuncias", currentLanguage)}>
            {t("home.footer.columns.legal.links.reporting")}
          </FooterLink>
        </div>
      </nav>

      <nav>
        <h3 className="text-[12px] font-normal uppercase leading-none tracking-[0.06em] text-[#EAEEE4]/40">
          {t("home.footer.columns.contact.title")}
        </h3>

        <div className="mt-6 flex flex-col gap-6 min-[1201px]:mt-[28px] min-[1201px]:gap-[28px]">
          <FooterLink href={withLanguagePrefix("/me-ajuda", currentLanguage)}>
            {t("home.footer.columns.contact.links.help")}
          </FooterLink>
          <FooterLink href="https://api.whatsapp.com/send/?phone=%2B5521988294968&text&type=phone_number&app_absent=0">
            {t("home.footer.columns.contact.links.whatsapp")}
          </FooterLink>
          <FooterLink href="mailto:suporte@mundpay.com">
            {t("home.footer.columns.contact.links.email")}
          </FooterLink>
        </div>
      </nav>

      <nav>
        <h3 className="text-[12px] font-normal uppercase leading-none tracking-[0.06em] text-[#EAEEE4]/40">
          {t("home.footer.columns.site.title")}
        </h3>

        <div className="mt-6 flex flex-col gap-6 min-[1201px]:mt-[28px] min-[1201px]:gap-[28px]">
          <FooterLink href={withLanguagePrefix("/", currentLanguage)}>
            {t("home.footer.columns.site.links.home")}
          </FooterLink>
          <FooterLink href={withLanguagePrefix("/#global", currentLanguage)}>
            {t("home.footer.columns.site.links.globalSales")}
          </FooterLink>
          <FooterLink href={withLanguagePrefix("/#taxas", currentLanguage)}>
            {t("home.footer.columns.site.links.taxes")}
          </FooterLink>
          <FooterLink href="https://mundpay.com/blog">
            {t("home.footer.columns.site.links.blog")}
          </FooterLink>
        </div>

        <div className="mt-6 hidden flex-row flex-wrap gap-[10px] min-[811px]:flex min-[811px]:flex-col min-[1201px]:mt-[28px]">
          <FooterStoreButton href={appStoreHref} label="App Store" icon="apple" />
          <FooterStoreButton href={playStoreHref} label="Play Store" icon="play" />
        </div>
      </nav>
    </div>
  );
}
