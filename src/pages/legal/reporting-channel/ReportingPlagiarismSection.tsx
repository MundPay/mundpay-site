import { useTranslation } from "react-i18next";
import { ReportingChecklist } from "./ReportingChecklist";

const aboutYouItems = [
  "name",
  "email",
  "originalPlatform",
  "availableSince",
  "originalLinks",
  "ownershipProof",
  "previousSales",
  "comparativeMaterial",
] as const;

const copiedProductItems = [
  "illegalWebsite",
  "plagiarizedCheckout",
  "proof",
] as const;

export function ReportingPlagiarismSection() {
  const { t } = useTranslation(undefined, {
    keyPrefix: "legal.pages.reportingChannel.plagiarism",
  });

  return (
    <section>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <h3>{t("aboutYouTitle")}</h3>
      <ReportingChecklist
        items={aboutYouItems.map((key) => t(`aboutYouItems.${key}`))}
      />
      <h3>{t("copiedProductTitle")}</h3>
      <ReportingChecklist
        items={copiedProductItems.map((key) => t(`copiedProductItems.${key}`))}
      />
      <p>{t("details")}</p>
      <p>{t("deadline")}</p>
    </section>
  );
}
