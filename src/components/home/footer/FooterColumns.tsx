import { useTranslation } from "react-i18next";
import { appStoreHref, footerColumns, playStoreHref } from "./footerData";
import { FooterStoreButton } from "./FooterStoreButton";

export function FooterColumns() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-10 min-[811px]:grid-cols-3 min-[811px]:gap-[20px] min-[1201px]:grid-cols-[190px_165px_150px]">
      {footerColumns.map((column) => (
        <nav
          key={column.translationKey}
          className={column.translationKey === "legal" ? "col-span-2 min-[811px]:col-span-1" : undefined}
        >
          <h3 className="text-[12px] font-bold uppercase leading-none tracking-[0.06em] text-[#EAEEE4]/40">
            {t(`home.footer.columns.${column.translationKey}.title`)}
          </h3>

          <div className="mt-6 flex flex-col gap-6 min-[1201px]:mt-[28px] min-[1201px]:gap-[28px]">
            {column.links.map((link) => (
              <a
                key={link.translationKey}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[14px] font-semibold leading-none text-[#EAEEE4]/65 transition-colors hover:text-[#EAEEE4]"
              >
                {t(`home.footer.columns.${column.translationKey}.links.${link.translationKey}`)}
              </a>
            ))}
          </div>

          {column.translationKey === "site" ? (
            <div className="mt-6 hidden flex-row flex-wrap gap-[10px] min-[811px]:flex min-[811px]:flex-col min-[1201px]:mt-[28px]">
              <FooterStoreButton href={appStoreHref} label="App Store" icon="apple" />
              <FooterStoreButton href={playStoreHref} label="Play Store" icon="play" />
            </div>
          ) : null}
        </nav>
      ))}
    </div>
  );
}
