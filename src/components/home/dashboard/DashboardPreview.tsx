import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import mobileDashboardPreview from "../../../assets/image/4f77ba2cb7-hMeehyqPXp5lo8i2VTcjrOiy1k.png";
import { CalendarIcon } from "../../icons/CalendarIcon";
import { GridIcon } from "../../icons/GridIcon";
import { DashboardSidebar } from "./DashboardSidebar";
import { MetricCard } from "./MetricCard";
import { RewardCard } from "./RewardCard";
import { SalesChart } from "./SalesChart";

const metrics = [
  { accent: "#5aa7ff", translationKey: "salesToday", value: "$ 2.000,00" },
  { accent: "#A2D035", translationKey: "available", value: "R$ 1.250,00" },
  { accent: "#f2b819", translationKey: "toRelease", value: "$ 500,00" },
];

const dashboardBaseSize = {
  width: 1200,
  height: 640,
};

export function DashboardPreview() {
  const { t } = useTranslation();
  const previewRef = useRef<HTMLDivElement>(null);
  const [dashboardScale, setDashboardScale] = useState(1);

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview) {
      return;
    }

    const updateScale = () => {
      if (preview.clientWidth === 0) {
        return;
      }

      const nextScale = Math.min(1, preview.clientWidth / dashboardBaseSize.width);
      setDashboardScale(nextScale);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(preview);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <motion.div
        ref={previewRef}
        data-dashboard-preview
        className="relative z-10 mx-auto mt-10 hidden w-full max-w-300 overflow-visible min-[811px]:block"
        style={{ height: dashboardBaseSize.height * dashboardScale }}
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
      >
        <div
          className="relative h-[640px] w-[1200px] origin-top-left overflow-visible border-x border-t border-mundpay-cream/[0.05] bg-mundpay-ink shadow-[0_20px_120px_rgba(0,0,0,0.62)]"
          style={{ transform: `scale(${dashboardScale})` }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-visible backdrop-blur-[2px]">
            <div className="absolute inset-0 overflow-visible bg-mundpay-lime backdrop-blur-[2px] [mask:radial-gradient(53%_50%_at_50%_0%,rgba(0,0,0,0.5)_0%,transparent_100%)] [-webkit-mask:radial-gradient(53%_50%_at_50%_0%,rgba(0,0,0,0.5)_0%,transparent_100%)]" />
          </div>
          <div className="relative z-[2] m-[10px_10px_0] flex h-[calc(100%-10px)] overflow-hidden bg-mundpay-panel">
            <DashboardSidebar />
            <section className="min-w-0 flex-1">
              <div className="flex h-16 items-center justify-between border-b border-mundpay-border bg-mundpay-panel px-6">
                <div className="flex items-center gap-5">
                  <GridIcon className="size-4 text-white/70" />
                  <span className="h-5 w-px bg-mundpay-border" />
                  <span className="font-space-grotesk text-[14px] font-medium leading-5 text-[#FAFAFA]">
                    {t('home.dashboard.title')}
                  </span>
                </div>
                <span className="grid size-9 place-items-center rounded-full bg-mundpay-border text-sm font-black text-white/55">
                  J
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-balance font-space-grotesk text-[20px] font-semibold leading-[1.5] tracking-[-0.02em] text-mundpay-cream/75">
                    {t('home.dashboard.greeting')}
                  </h2>
                  <button className="flex h-10 items-center gap-2 rounded-lg border border-mundpay-border bg-mundpay-panel px-4 font-space-grotesk text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-mundpay-cream/75">
                    <CalendarIcon className="size-4" />
                    {t('home.dashboard.periodToday')}
                  </button>
                </div>

                <div className="mt-7 grid grid-cols-[repeat(3,297px)] gap-4">
                  {metrics.map((metric) => (
                    <MetricCard
                      key={metric.translationKey}
                      accent={metric.accent}
                      label={t(`home.dashboard.metrics.${metric.translationKey}`)}
                      value={metric.value}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-[553px_255.89px] items-start gap-12">
                  <SalesChart />
                  <RewardCard />
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto mt-10 block w-full max-w-[335px] px-4 min-[811px]:hidden"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
      >
        <img
          src={mobileDashboardPreview}
          alt={t('home.dashboard.title')}
          className="block h-auto max-h-[180px] w-full object-contain"
        />
      </motion.div>
    </>
  );
}
