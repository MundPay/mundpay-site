import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

export function FooterLink({ href, children }: FooterLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-[14px] font-normal leading-none text-[#EAEEE4]/65 transition-colors hover:text-[#EAEEE4]"
    >
      {children}
    </a>
  );
}
