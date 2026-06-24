import type { SVGProps } from "react";

type ArrowRightIconProps = SVGProps<SVGSVGElement>;

export function ArrowRightIcon(props: ArrowRightIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
