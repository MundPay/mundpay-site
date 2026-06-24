import type { SVGProps } from "react";

type GlobeIconProps = SVGProps<SVGSVGElement>;

export function GlobeIcon(props: GlobeIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.1-2.2 3.2-5.1 3.2-9S14.1 5.2 12 3m0 18c-2.1-2.2-3.2-5.1-3.2-9S9.9 5.2 12 3M3.6 9h16.8M3.6 15h16.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
