import { useTranslation } from "react-i18next";

import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

function EnglishLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("legal.pages.amlPolicies.title")}</h1>
      <h2>{t("legal.pages.amlPolicies.english.sections.introduction.title")}</h2>
      <p>{t("legal.pages.amlPolicies.english.sections.introduction.description")}</p>
      <h2>{t("legal.pages.amlPolicies.english.sections.kyc.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.kyc.items.procedures")}</p>
        </li>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.kyc.items.documentation")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.monitoring.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.monitoring.items.continuous")}</p>
        </li>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.monitoring.items.investigation")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.reporting.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.reporting.items.training")}</p>
        </li>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.reporting.items.escalation")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.dueDiligence.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.dueDiligence.items.partners")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.education.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.education.items.regularTraining")}</p>
        </li>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.education.items.updates")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.audits.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.audits.items.reviews")}</p>
        </li>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.audits.items.adjustments")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.violations.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.violations.items.consequences")}</p>
        </li>
      </ul>
      <h2>{t("legal.pages.amlPolicies.english.sections.policyReview.title")}</h2>
      <ul>
        <li>
          <p>{t("legal.pages.amlPolicies.english.sections.policyReview.items.effectiveness")}</p>
        </li>
      </ul>
      <p>{t("legal.pages.amlPolicies.english.closing")}</p>
    </>
  );
}

function PortugueseLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("legal.pages.amlPolicies.portuguese.title")}</h1>
      <p>{t("legal.pages.amlPolicies.portuguese.intro.commitment")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.intro.riskApproach")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.intro.publicVersion")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.legalBasis.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.legalBasis.program")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.legalBasis.regulations")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.legalBasis.references")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.programStructure.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.programStructure.methodology")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.programStructure.controls")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.programStructure.review")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.kyc.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.kyc.compliance")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.kyc.validation")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.kyc.riskClassification")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.kyc.updates")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.monitoring.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.monitoring.controls")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.monitoring.tools")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.reporting.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.reporting.procedures")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.reporting.compliance")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.reporting.confidentiality")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.partnerDueDiligence.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.partnerDueDiligence.relationships")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.partnerDueDiligence.evaluation")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.partnerDueDiligence.renewal")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.training.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.training.culture")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.training.subjects")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.training.updates")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.audits.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.audits.evaluations")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.audits.reports")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.audits.improvement")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.violations.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.violations.obligation")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.violations.measures")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.violations.zeroTolerance")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.sanctions.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.sanctions.monitoring")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.sanctions.checks")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.sanctions.measures")}</p>
      <h2>{t("legal.pages.amlPolicies.portuguese.sections.review.title")}</h2>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.review.evolution")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.review.approval")}</p>
      <p>{t("legal.pages.amlPolicies.portuguese.sections.review.publicVersion")}</p>
    </>
  );
}

export function AmlPoliciesPage() {
  const { i18n } = useTranslation();
  const isPortuguese = i18n.resolvedLanguage?.toLowerCase().startsWith("pt");

  return (
    <LegalLayout>
      <LegalDocument>
        {isPortuguese ? <PortugueseLegalContent /> : <EnglishLegalContent />}
      </LegalDocument>
    </LegalLayout>
  );
}
