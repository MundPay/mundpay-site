export const appStoreHref = "https://apps.apple.com/br/app/mundpay-mobile/id6744820317?l=en-GB";
export const playStoreHref = "https://play.google.com/store/apps/details?id=com.mundpay.mundpay";

export const footerColumns = [
  {
    translationKey: "legal",
    links: [
      { translationKey: "paymentsAndFees", href: "/pagamentos-e-taxas" },
      { translationKey: "terms", href: "/termos-de-uso" },
      { translationKey: "privacy", href: "/politica-de-privacidade" },
      { translationKey: "reporting", href: "/canal-de-denuncias" },
    ],
  },
  {
    translationKey: "contact",
    links: [
      { translationKey: "help", href: "/me-ajuda" },
      {
        translationKey: "whatsapp",
        href: "https://api.whatsapp.com/send/?phone=%2B5521988294968&text&type=phone_number&app_absent=0",
      },
      { translationKey: "email", href: "mailto:suporte@mundpay.com" },
    ],
  },
  {
    translationKey: "site",
    links: [
      { translationKey: "home", href: "/" },
      { translationKey: "globalSales", href: "/#global" },
      { translationKey: "taxes", href: "/#taxas" },
      { translationKey: "blog", href: "https://mundpay.com/blog" },
    ],
  },
] as const;

export const offices = [
  {
    flag: "us",
    text: "MUND USA LLC | EIN: 32-0819366 | Address: 1160 HERON SOUND DR STE 50 APOPKA, FL 32703",
  },
  {
    flag: "us",
    text: "MUNDPAY LLC EIN: 36-5099929 | Address: 169 Madison Avenue - New York, NY 10016 US",
  },
  {
    flag: "eu",
    text: "MundP Tech OÜ - 17270502 | Address: Harju maakond, Tallinn, Lasnamäe linnaosa, Ruunaoja tn 3, 11415",
  },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mundpay/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/mundpay", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@MundPay", icon: "youtube" },
] as const;
