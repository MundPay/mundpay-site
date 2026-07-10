import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mundpayAssets } from "../../assets/mundpayAssets";
import { AppleIcon } from "../../components/icons/AppleIcon";
import { EuropeanUnionFlagIcon } from "../../components/icons/EuropeanUnionFlagIcon";
import { FacebookIcon } from "../../components/icons/FacebookIcon";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { PlayStoreIcon } from "../../components/icons/PlayStoreIcon";
import { UnitedStatesFlagIcon } from "../../components/icons/UnitedStatesFlagIcon";
import { YoutubeIcon } from "../../components/icons/YoutubeIcon";
import {
  appStoreHref,
  playStoreHref,
  socialLinks,
} from "../../components/home/footer/footerData";
import { getPathLanguagePrefix, withLanguagePrefix } from "../../i18n/languageRouting";

const legalLinks = [
  [
    { translationKey: "terms", href: "/termos-de-uso" },
    { translationKey: "privacy", href: "/politica-de-privacidade" },
    { translationKey: "refundPolicy", href: "/refund-policy" },
    { translationKey: "paymentsFees", href: "/pagamentos-e-taxas" },
  ],
  [
    { translationKey: "codeOfEthics", href: "/codigo-de-etica" },
    {
      translationKey: "complianceProgram",
      href: "/programa-geral-de-compliance",
    },
    {
      translationKey: "amlPolicies",
      href: "/politicas-de-prevencao-a-lavagem-de-dinheiro",
    },
    { translationKey: "reportingChannel", href: "/canal-de-denuncias" },
  ],
];

const contactLinks = [
  { translationKey: "help", href: "/me-ajuda" },
  {
    translationKey: "whatsapp",
    href: "https://api.whatsapp.com/send/?phone=%2B5521988294968&text&type=phone_number&app_absent=0",
  },
  { translationKey: "email", href: "mailto:suporte@mundpay.com" },
];

const siteLinks = [
  { translationKey: "home", href: "/" },
  { translationKey: "globalSales", href: "/#global" },
  { translationKey: "taxes", href: "/#taxas" },
  { translationKey: "blog", href: "https://mundpay.com/blog" },
];

function StoreButton({
  label,
  type,
  href,
}: {
  label: string;
  type: "apple" | "play";
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="flex h-8 items-center gap-2 rounded-full bg-[#EAEEE4]/5 px-4 font-space-grotesk text-[14px] font-bold leading-none text-[#EAEEE4]/75 transition hover:bg-[#A2D035]/10 hover:text-[#EAEEE4]"
    >
      {type === "apple" ? (
        <AppleIcon className="size-4" />
      ) : (
        <PlayStoreIcon className="size-4" />
      )}
      {label}
    </a>
  );
}

export function LegalFooter() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const pathLanguagePrefix = getPathLanguagePrefix(pathname);
  const homeHref = withLanguagePrefix("/", pathLanguagePrefix, {
    includeDefaultPrefix: true,
  });

  return (
    <footer className="w-full max-w-[910px] border-t border-mundpay-cream/[0.05] px-6 py-14 font-space-grotesk text-mundpay-cream md:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <Link to={homeHref} aria-label="Mundpay home" className="block w-fit">
          <img
            src={mundpayAssets.logoWhite}
            alt="mundpay"
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full bg-[#EAEEE4]/5 text-[#EAEEE4]/55 transition hover:text-[#EAEEE4]"
            >
              {social.icon === "instagram" ? <InstagramIcon className="size-4" /> : null}
              {social.icon === "facebook" ? <FacebookIcon className="size-4" /> : null}
              {social.icon === "youtube" ? <YoutubeIcon className="h-4 w-5" /> : null}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <StoreButton
            href={appStoreHref}
            label="App Store"
            type="apple"
          />
          <StoreButton href={playStoreHref} label="Play Store" type="play" />
        </div>
      </div>

      <div className="mt-11 grid gap-10 md:grid-cols-[2fr_1fr_0.7fr]">
        <div>
          <h2 className="text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-mundpay-cream/40">
            {t('home.footer.columns.legal.title')}
          </h2>
          <div className="mt-7 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {legalLinks.map((column) => (
              <nav key={column[0].translationKey} className="flex flex-col gap-6">
                {column.map((item) => (
                  <Link
                    key={item.translationKey}
                    to={withLanguagePrefix(item.href, pathLanguagePrefix, {
                      includeDefaultPrefix: true,
                    })}
                    className="text-[15px] font-medium leading-none text-mundpay-cream/85 transition hover:text-mundpay-cream"
                  >
                    {t(`legal.routes.${item.translationKey}`)}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <nav className="flex flex-col">
          <h2 className="text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-mundpay-cream/40">
            {t('home.footer.columns.contact.title')}
          </h2>
          <div className="mt-7 flex flex-col gap-6">
            {contactLinks.map((item) => (
              <a
                key={item.translationKey}
                href={withLanguagePrefix(item.href, pathLanguagePrefix, {
                  includeDefaultPrefix: true,
                })}
                className="text-[15px] font-medium leading-none text-mundpay-cream/85 transition hover:text-mundpay-cream"
              >
                {t(`home.footer.columns.contact.links.${item.translationKey}`)}
              </a>
            ))}
          </div>
        </nav>

        <nav className="flex flex-col">
          <h2 className="text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-mundpay-cream/40">
            {t('home.footer.columns.site.title')}
          </h2>
          <div className="mt-7 flex flex-col gap-6">
            {siteLinks.map((item) => (
              <a
                key={item.translationKey}
                href={
                  item.translationKey === "blog"
                    ? item.href
                    : withLanguagePrefix(item.href, pathLanguagePrefix, {
                        includeDefaultPrefix: true,
                      })
                }
                className="text-[15px] font-medium leading-none text-mundpay-cream/85 transition hover:text-mundpay-cream"
              >
                {t(`home.footer.columns.site.links.${item.translationKey}`)}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="my-10 h-px bg-mundpay-lime/20" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex gap-3 text-[14px] font-medium leading-[1.6] text-mundpay-cream/80">
          <UnitedStatesFlagIcon className="mt-0.5 size-4 shrink-0" />
          <div>
            <p>MUNDPAY LLC EIN: 36-5099929</p>
            <p>Address: 169 Madison Avenue - New York, NY 10016 US</p>
          </div>
        </div>

        <div className="flex gap-3 text-[14px] font-medium leading-[1.6] text-mundpay-cream/80">
          <EuropeanUnionFlagIcon className="mt-0.5 size-4 shrink-0" />
          <div>
            <p>Europe: MundP Tech OU</p>
            <p>Registration number: 7270502</p>
            <p>
              Address: Harju maakond, Tallinn, Lasnamae linnaosa, Ruunaoja tn 3,
              11415
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 text-[14px] font-bold leading-none text-mundpay-cream/35 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span>&copy;2025</span>
          <span>-</span>
          <span>MUNDPAY</span>
          <span>-</span>
          <span>{t('home.footer.copyright.allRightsReserved')}</span>
        </div>
        <a
          href="https://versare.design"
          target="_blank"
          rel="noopener"
          className="transition hover:text-mundpay-cream/70"
        >
          By Versare
        </a>
      </div>
    </footer>
  );
}
