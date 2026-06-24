import type { ReactNode } from "react";

type LegalDocumentProps = {
  children: ReactNode;
};

export function LegalDocument({ children }: LegalDocumentProps) {
  return (
    <article
      className="legal-document max-w-[650px] font-space-grotesk text-[#EAEEE4]/70 [&_a]:text-[#EAEEE4] [&_a]:underline
     [&_a]:decoration-[#A2D035]/60 [&_a]:underline-offset-4 [&_h1]:mb-10 [&_h1]:font-rethink-sans [&_h1]:text-[44px] [&_h1]:font-black
      [&_h1]:leading-[0.96] [&_h1]:tracking-[-0.04em] [&_h1]:text-[#EAEEE4] sm:[&_h1]:text-[56px] [&_h2]:mb-7 [&_h2]:mt-14 [&_h2]:font-rethink-sans
       [&_h2]:text-[28px] [&_h2]:font-black [&_h2]:uppercase [&_h2]:leading-[1.05] [&_h2]:tracking-[-0.035em] [&_h2]:text-[#EAEEE4]
        sm:[&_h2]:text-[34px] [&_h3]:mb-5 [&_h3]:mt-9 [&_h3]:font-rethink-sans [&_h3]:text-[22px] [&_h3]:font-black [&_h3]:leading-[1.15] 
        [&_h3]:tracking-[-0.03em] [&_h3]:text-[#EAEEE4] [&_h4]:mb-3 [&_h4]:mt-7 [&_h4]:text-[16px] [&_h4]:font-bold [&_h4]:leading-[1.35]
         [&_h4]:tracking-[-0.02em] [&_h4]:text-[#EAEEE4] [&_li]:pl-1 [&_li]:text-[15px] [&_li]:font-medium [&_li]:leading-[1.58] [&_li]:tracking-[-0.02em]
          [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:mb-4 [&_p]:text-[15px] [&_p]:font-medium [&_p]:leading-[1.58] [&_p]:tracking-[-0.02em] 
          [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5"
    >
      {children}
    </article>
  );
}
