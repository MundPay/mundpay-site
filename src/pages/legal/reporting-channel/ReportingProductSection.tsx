import { useTranslation } from "react-i18next";
import { ReportingChecklist } from "./ReportingChecklist";

const productItems = ["website", "checkout", "reason", "proof"] as const;

export function ReportingProductSection() {
  const { t } = useTranslation(undefined, {
    keyPrefix: "legal.pages.reportingChannel.prohibitedProduct",
  });

  return (
    <section>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <h3>{t("productTitle")}</h3>
      <ReportingChecklist
        items={productItems.map((key) => t(`items.${key}`))}
      />
      <p>{t("details")}</p>
      <p>{t("report")}</p>
      <p>{t("deadline")}</p>
    </section>
  );
}
