import { useTranslation } from "react-i18next";
import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";
import { ReportingPaymentSupport } from "../reporting-channel/ReportingPaymentSupport";
import { ReportingPlagiarismSection } from "../reporting-channel/ReportingPlagiarismSection";
import { ReportingProductSection } from "../reporting-channel/ReportingProductSection";

export function ReportingChannelPage() {
  const { t } = useTranslation(undefined, {
    keyPrefix: "legal.pages.reportingChannel",
  });

  return (
    <LegalLayout>
      <LegalDocument>
        <h1>{t("title")}</h1>
        <h2>{t("reports.title")}</h2>
        <p>{t("reports.description")}</p>
        <p>{t("reports.regulation")}</p>
        <ReportingPaymentSupport />
        <ReportingPlagiarismSection />
        <ReportingProductSection />
      </LegalDocument>
    </LegalLayout>
  );
}
