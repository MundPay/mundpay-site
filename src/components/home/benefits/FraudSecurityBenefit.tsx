import { useTranslation } from "react-i18next";
import { BenefitCard } from "./BenefitCard";
import { FraudSecurityVisual } from "./FraudSecurityVisual";

export function FraudSecurityBenefit() {
  const { t } = useTranslation();

  return (
    <BenefitCard
      title={t("home.benefits.cards.fraudSecurity.title")}
      description={t("home.benefits.cards.fraudSecurity.description")}
      className="border-b border-l border-r border-t"
      contentClassName="mt-[300px] max-w-[560px] p-8 md:mt-[300px] md:p-8"
      descriptionClassName="w-[496px] max-w-full"
      visual={<FraudSecurityVisual />}
    />
  );
}
