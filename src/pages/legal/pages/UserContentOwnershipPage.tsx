import { useTranslation } from "react-i18next";
import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

export function UserContentOwnershipPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout>
      <LegalDocument>
        <h1>{t("legal.pages.userContentOwnership.title")}</h1>
        <h2>{t("legal.pages.userContentOwnership.intellectualProperty.title")}</h2>
        <p>
          {t("legal.pages.userContentOwnership.intellectualProperty.description")}
        </p>
        <h2>{t("legal.pages.userContentOwnership.userContent.title")}</h2>
        <p>
          {t("legal.pages.userContentOwnership.userContent.license")}
        </p>
        <p>
          {t("legal.pages.userContentOwnership.userContent.responsibility")}
        </p>
        <h2>{t("legal.pages.userContentOwnership.imageRights.title")}</h2>
        <p>{t("legal.pages.userContentOwnership.imageRights.description")}</p>
      </LegalDocument>
    </LegalLayout>
  );
}
