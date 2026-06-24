import { useTranslation } from "react-i18next";
import { BenefitCard } from "./BenefitCard";
import { FraudSecurityVisual } from "./FraudSecurityVisual";

export function FraudSecurityBenefit() {
  const { t } = useTranslation();

  return (
    // <BenefitCard
    //   title={t('home.benefits.cards.fraudSecurity.title')}
    //   description={t('home.benefits.cards.fraudSecurity.description')}
    //   className="border-b border-l border-r border-t"
    //   contentClassName="mt-[300px] max-w-[560px] p-8 md:mt-[300px] md:p-8"
    //   descriptionClassName="w-[496px] max-w-full"
    //   visual={
    //     <div className="absolute inset-x-0 top-0 h-64 overflow-hidden opacity-35">
    //       <div className="absolute left-14 top-10 grid grid-cols-3 gap-4">
    //         {Array.from({ length: fraudCardPlaceholderCount }).map((_, index) => (
    //           <div
    //             key={index}
    //             className="h-24 w-40 rounded-xl border border-[#A2D035]/10 bg-[#11130c] shadow-[0_0_16px_rgba(162,208,53,0.06)]"
    //           />
    //         ))}
    //       </div>
    //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,#050700_78%)]" />
    //     </div>
    //   }
    // />
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
