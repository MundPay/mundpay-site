import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { mundpayAssets } from "../../../assets/mundpayAssets";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { CustomerStoriesPatternEdge } from "./CustomerStoriesPatternEdge";
import { CustomerStoryCard } from "./CustomerStoryCard";
import {
  customerStories,
  customerStoriesCarousel,
} from "./customerStoriesData";
import { useCustomerStoriesCarousel } from "./useCustomerStoriesCarousel";

export function CustomerStoriesSection() {
  const { t } = useTranslation();
  const { autoAdvanceDelay, slideDuration } = customerStoriesCarousel;
  const [visibleCards, setVisibleCards] = useState<number>(
    customerStoriesCarousel.visibleCards,
  );
  const { handleTransitionEnd, shift, slideIndex, transitionEnabled } =
    useCustomerStoriesCarousel({
      autoAdvanceDelay,
      storyCount: customerStories.length,
    });
  const renderedStories = [
    ...customerStories,
    ...customerStories.slice(0, visibleCards),
  ];
  const itemWidth = 100 / visibleCards;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.matchMedia("(max-width: 810px)").matches) {
        setVisibleCards(1);
        return;
      }

      if (window.matchMedia("(max-width: 1200px)").matches) {
        setVisibleCards(3);
        return;
      }

      setVisibleCards(customerStoriesCarousel.visibleCards);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  return (
    <section className="relative z-[2] w-full overflow-hidden bg-[#050700] py-16 text-[#EAEEE4] min-[811px]:py-20 min-[1201px]:h-[632px] min-[1201px]:py-0">
      <div className="relative mx-auto w-full max-w-[1120px] border-x border-[#EAEEE4]/10">
        <CustomerStoriesPatternEdge side="left" />
        <CustomerStoriesPatternEdge side="right" />

        <div className="mx-auto flex w-full flex-col px-4 min-[811px]:px-8 min-[1201px]:h-full min-[1201px]:w-[1080px] min-[1201px]:px-0 min-[1201px]:pt-[88px]">
          <h2 className="mx-auto text-center font-rethink-sans text-[28px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4] min-[811px]:text-[31px] min-[1201px]:text-[34px]">
            {t("home.customerStories.title")}
          </h2>

          <div className="group relative mt-10 overflow-hidden min-[1201px]:mt-[56px] min-[1201px]:h-[384px]">
            <div
              className="flex h-[340px] min-[811px]:h-[300px]"
              style={{
                transform: `translateX(-${slideIndex * itemWidth}%)`,
                transition: transitionEnabled
                  ? `transform ${slideDuration}ms cubic-bezier(0.76, 0, 0.24, 1)`
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {renderedStories.map((story, index) => (
                <CustomerStoryCard
                  key={`${story.name}-${index}`}
                  story={story}
                  width={`${itemWidth}%`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label={t("home.customerStories.carousel.previousLabel")}
              onClick={() => shift(-1)}
              className="absolute left-[18px] top-[148px] z-[3] flex size-[44px] cursor-pointer items-center justify-center rounded-full bg-black/20 text-[#EAEEE4] transition-colors duration-150 hover:bg-black/40 min-[811px]:top-[126px]"
            >
              <ChevronLeftIcon className="size-[28px]" />
            </button>
            <button
              type="button"
              aria-label={t("home.customerStories.carousel.nextLabel")}
              onClick={() => shift(1)}
              className="absolute right-[18px] top-[148px] z-[3] flex size-[44px] cursor-pointer items-center justify-center rounded-full bg-black/20 text-[#EAEEE4] transition-colors duration-150 hover:bg-black/40 min-[811px]:top-[126px]"
            >
              <ChevronRightIcon className="size-[28px]" />
            </button>

            <div className="flex min-h-[104px] flex-col items-start justify-center gap-3 bg-[#A2D035] px-5 py-5 text-[#050700] min-[811px]:h-[84px] min-[811px]:min-h-0 min-[811px]:flex-row min-[811px]:items-center min-[811px]:justify-between min-[811px]:gap-6 min-[811px]:px-[32px] min-[811px]:py-0">
              <img
                src={mundpayAssets.logoBlack}
                alt="mundpay"
                className="h-[25px] w-[130px] min-[811px]:h-[29px] min-[811px]:w-[150px]"
              />
              <p className="font-space-grotesk text-[14px] font-medium leading-[1.45] tracking-[-0.03em] min-[811px]:text-[16px]">
                {t("home.customerStories.footer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
