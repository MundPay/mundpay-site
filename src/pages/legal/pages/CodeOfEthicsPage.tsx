import { useTranslation } from "react-i18next";
import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

export function CodeOfEthicsPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout>
      <LegalDocument>
        <h1>{t("legal.pages.codeOfEthics.title")}</h1>
        <ul>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.introduction")}
            </p>
          </li>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.corporateResponsibility.main")}
            </p>
            <ul>
              <li>
                <p>
                  {t("legal.pages.codeOfEthics.sections.corporateResponsibility.items.culture")}
                </p>
              </li>
              <li>
                <p>
                  {t("legal.pages.codeOfEthics.sections.corporateResponsibility.items.customers")}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.conflictOfInterest.main")}
            </p>
            <ul>
              <li>
                <p>
                  {t("legal.pages.codeOfEthics.sections.conflictOfInterest.disclosure")}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.workplaceConduct.main")}
            </p>
            <ul>
              <li>
                <p>
                  {t("legal.pages.codeOfEthics.sections.workplaceConduct.environment")}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.assetProtection.main")}
            </p>
            <ul>
              <li>
                <p>
                  {t("legal.pages.codeOfEthics.sections.assetProtection.usage")}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              {t("legal.pages.codeOfEthics.sections.reporting")}
            </p>
          </li>
        </ul>
      </LegalDocument>
    </LegalLayout>
  );
}
