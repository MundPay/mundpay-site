import { AnnouncementBar } from "../../components/home/AnnouncementBar";
import { AppDownloadSection } from "../../components/home/app-download";
import { AwardsSection } from "../../components/home/awards/AwardsSection";
import { BlogCarouselSection } from "../../components/home/blog-carousel/BlogCarouselSection";
import { BenefitsSection } from "../../components/home/benefits/BenefitsSection";
import { CustomerStoriesSection } from "../../components/home/customer-stories/CustomerStoriesSection";
import { EarningsCtaSection } from "../../components/home/earnings-cta/EarningsCtaSection";
import { FeaturesSection } from "../../components/home/features/FeaturesSection";
import { FooterSection } from "../../components/home/footer/FooterSection";
import { GlobalSalesSection } from "../../components/home/global-sales/GlobalSalesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { IntegrationsSection } from "../../components/home/integrations/IntegrationsSection";
import { LoyaltySecuritySection } from "../../components/home/loyalty-security/LoyaltySecuritySection";
import { PricingSection } from "../../components/home/pricing/PricingSection";
import { SuccessPlatformSection } from "../../components/home/success-platform/SuccessPlatformSection";
import { SiteShell } from "../../components/layout/SiteShell";
import type { HomeVariant } from "../../components/home/HomeVariant";

type HomePageProps = {
  variant?: HomeVariant;
};

export function HomePage({ variant = "default" }: HomePageProps) {
  return (
    <SiteShell>
      <div className="relative z-10 bg-[#050700]">
        <AnnouncementBar />
        <HeroSection variant={variant} />
        <BenefitsSection />
        <FeaturesSection />
        <LoyaltySecuritySection />
        <EarningsCtaSection />
        <GlobalSalesSection />
        <PricingSection />
        <AwardsSection />
        <SuccessPlatformSection />
        <IntegrationsSection />
        <CustomerStoriesSection />
        <AppDownloadSection />
        <BlogCarouselSection />
      </div>
      <FooterSection />
    </SiteShell>
  );
}
