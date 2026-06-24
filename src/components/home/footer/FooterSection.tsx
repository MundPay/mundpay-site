import { useEffect, useRef, useState } from "react";
import footerBackgroundLogo from "../../../assets/image/68eef8a3d3-tzjzM5myUA2OJRfcZIQ43LjdT88.svg";
import { FooterBrandBlock } from "./FooterBrandBlock";
import { FooterColumns } from "./FooterColumns";
import { FooterOffices } from "./FooterOffices";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

const FOOTER_MAX_HEIGHT = 953.25;

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);
  const [isDesktopFooter, setIsDesktopFooter] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const raw =
        (viewportHeight - rect.top) /
        Math.min(viewportHeight, FOOTER_MAX_HEIGHT);

      setProgress(clamp(raw));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1201px)");
    const updateLayoutMode = () => setIsDesktopFooter(mediaQuery.matches);

    updateLayoutMode();
    mediaQuery.addEventListener("change", updateLayoutMode);

    return () => mediaQuery.removeEventListener("change", updateLayoutMode);
  }, []);

  const scale = 0.88 + progress * 0.12;
  const sideInset = (1 - progress) * 7;
  const topInset = (1 - progress) * 18;

  return (
    <section
      ref={sectionRef}
      className="relative bg-black min-[1201px]:h-[953.25px]"
      id="footer"
    >
      <footer
        className="relative z-[70] overflow-hidden bg-black px-6 pb-10 pt-44 text-[#EAEEE4] min-[811px]:px-10 min-[811px]:pb-12 min-[811px]:pt-48 min-[1201px]:sticky min-[1201px]:bottom-0 min-[1201px]:h-[953.25px] min-[1201px]:origin-bottom min-[1201px]:p-0"
        style={
          isDesktopFooter
            ? {
                transform: `scale(${scale})`,
                clipPath: `inset(${topInset}% ${sideInset}% 0% ${sideInset}% round ${(1 - progress) * 30}px)`,
                boxShadow: "0 -16px 0 #000",
              }
            : undefined
        }
      >
        <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center min-[811px]:top-16 min-[1201px]:top-[362px]">
          <div
            className="h-[96px] w-[min(760px,145vw)] bg-[#18181B] opacity-75 min-[811px]:w-[570px] min-[1201px]:opacity-100"
            style={{
              mask: `url(${footerBackgroundLogo}) center / contain no-repeat alpha`,
              WebkitMask: `url(${footerBackgroundLogo}) center / contain no-repeat`,
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[2] mx-auto grid max-w-[1128px] grid-cols-1 items-start gap-12 min-[811px]:grid-cols-[minmax(260px,430px)_1fr] min-[811px]:gap-10 min-[1201px]:absolute min-[1201px]:inset-x-0 min-[1201px]:top-[510px] min-[1201px]:grid-cols-[580px_1fr] min-[1201px]:gap-0">
          <FooterBrandBlock />
          <FooterColumns />
        </div>

        <FooterOffices />
      </footer>
    </section>
  );
}
