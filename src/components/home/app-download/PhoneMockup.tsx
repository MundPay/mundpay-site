import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { MockupBatteryIcon } from "../../icons/MockupBatteryIcon";
import { MockupChartIcon } from "../../icons/MockupChartIcon";
import { MockupCheckIcon } from "../../icons/MockupCheckIcon";
import { MockupGlobeIcon } from "../../icons/MockupGlobeIcon";
import { MockupTrendIcon } from "../../icons/MockupTrendIcon";
import { MockupWifiIcon } from "../../icons/MockupWifiIcon";

export function PhoneMockup() {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-[-1px] left-1/2 h-[416px] w-[310px] origin-bottom -translate-x-1/2 scale-[0.72] rounded-t-[24px] border border-[#1B2114] bg-[#020400] shadow-[0_28px_70px_rgba(0,0,0,0.55)] min-[811px]:left-[50%] min-[811px]:scale-[0.82] min-[1000px]:scale-[0.9] min-[1201px]:left-[145px] min-[1201px]:translate-x-0 min-[1201px]:scale-100">
      <div className="flex h-[42px] items-center justify-between px-[16px] pt-[10px]">
        <span className="font-rethink-sans text-[12px] font-semibold leading-none tracking-[-0.01em] text-[#EAEEE4]/45">
          BR
        </span>
        <div className="flex items-center gap-[10px] text-[#EAEEE4]/45">
          <MockupWifiIcon />
          <MockupBatteryIcon />
        </div>
      </div>

      <div className="mx-[16px] mt-[10px] rounded-[7px] border border-[#151B0F] bg-[#030600] p-[12px]">
        <p className="font-rethink-sans text-[10px] font-semibold leading-none tracking-[-0.01em] text-[#EAEEE4]">
          {t("home.appDownload.mockup.dashboardOverview")}
        </p>
        <div className="mt-[13px] grid grid-cols-[54px_1fr] gap-[10px]">
          <div className="space-y-[10px] pt-[2px] font-rethink-sans text-[6px] leading-none tracking-[-0.01em] text-[#EAEEE4]/28">
            <p>{t("home.appDownload.mockup.chartValues.first")}</p>
            <p>{t("home.appDownload.mockup.chartValues.second")}</p>
            <p>{t("home.appDownload.mockup.chartValues.third")}</p>
            <p>{t("home.appDownload.mockup.chartValues.fourth")}</p>
            <p>{t("home.appDownload.mockup.chartValues.fifth")}</p>
          </div>
          <MockupChartIcon />
        </div>
      </div>

      <InfoRow
        icon={<MockupTrendIcon />}
        label={t("home.appDownload.mockup.allTime")}
        value={t("home.appDownload.mockup.totalValue")}
      />
      <div className="mx-[16px] h-px bg-[#EAEEE4]/8" />
      <InfoRow
        icon={<MockupCheckIcon />}
        label={t("home.appDownload.mockup.availableValue")}
        value={t("home.appDownload.mockup.available")}
        highlight
      />

      <div className="absolute bottom-[61px] left-[-1px] right-[-1px] z-[2] flex h-[62px] items-center rounded-[8px] bg-[#EAEEE4]/26 px-[12px] shadow-[0_16px_34px_rgba(234,238,228,0.12)] backdrop-blur-[8px]">
        <div className="flex size-[34px] items-center justify-center rounded-[6px] bg-[#A2D035]/18 text-[#A2D035]">
          <MockupGlobeIcon />
        </div>
        <div className="ml-[10px]">
          <p className="font-space-grotesk text-[14px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#EAEEE4]">
            {t("home.appDownload.mockup.saleSuccessful")}
          </p>
          <p className="mt-[5px] font-space-grotesk text-[10px] leading-[1.1] tracking-[-0.02em] text-[#EAEEE4]/72">
            {t("home.appDownload.mockup.saleValue")}
          </p>
        </div>
        <span className="ml-auto self-start pt-[12px] font-space-grotesk text-[11px] font-light leading-none tracking-[-0.02em] text-[#EAEEE4]/75">
          {t("home.appDownload.mockup.now")}
        </span>
      </div>
      <div className="absolute bottom-[43px] left-[13px] right-[13px] h-[52px] rounded-[8px] bg-[#EAEEE4]/10 blur-[0.2px]" />
      <div className="absolute bottom-[24px] left-[22px] right-[22px] h-[52px] rounded-[8px] bg-[#EAEEE4]/6 blur-[0.2px]" />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="mx-[16px] flex h-[56px] items-center gap-[10px]">
      <div className="flex size-[28px] items-center justify-center rounded-[4px] bg-[#A2D035]/9 text-[#A2D035]">
        {icon}
      </div>
      <div>
        <p
          className={`font-rethink-sans text-[10px] font-semibold leading-[1.1] tracking-[-0.01em] ${
            highlight ? "text-[#A2D035]" : "text-[#EAEEE4]"
          }`}
        >
          {label}
        </p>
        <p className="mt-[5px] font-rethink-sans text-[10px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#EAEEE4]">
          {value}
        </p>
      </div>
    </div>
  );
}
