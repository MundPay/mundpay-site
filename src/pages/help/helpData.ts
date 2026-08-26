export const helpNavbarLinks = {
  help: '/help',
  home: '/',
  login: 'https://app.mundpay.com/login',
  register: 'https://app.mundpay.com/register',
}

export const helpContacts = [
  {
    labelKey: 'email',
    value: 'help@mundpay.com',
    href: 'mailto:help@mundpay.com',
  },
  {
    labelKey: 'whatsapp',
    value: '+5521988294968',
    href: 'https://wa.me/+5521988294968',
  },
] as const

export const helpFooterColumns = [
  {
    key: 'legal',
    links: [
      { key: 'paymentsAndFees', href: '/pagamentos-e-taxas' },
      { key: 'terms', href: '/termos-de-uso' },
      { key: 'privacy', href: '/politica-de-privacidade' },
      { key: 'reporting', href: '/canal-de-denuncias' },
    ],
  },
  {
    key: 'contact',
    links: [
      { key: 'help', href: '/help' },
      {
        key: 'whatsapp',
        href: 'https://api.whatsapp.com/send/?phone=%2B5521988294968&text&type=phone_number&app_absent=0',
      },
      { key: 'email', href: 'mailto:suporte@mundpay.com' },
    ],
  },
  {
    key: 'site',
    links: [
      { key: 'home', href: '/' },
      { key: 'globalSales', href: '/#global' },
      { key: 'taxes', href: '/#taxas' },
      { key: 'blog', href: 'https://mundpay.com/blog' },
    ],
  },
] as const

export const helpSocialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/mundpay/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/mundpay', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@mundpaybr', icon: 'youtube' },
] as const

export const helpStoreLinks = [
  { label: 'App Store', href: 'https://apps.apple.com/br/app/mundpay-mobile/id6744820317?l=en-GB', icon: 'apple' },
  { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.mundpay.mundpay', icon: 'play' },
] as const

export const helpOffices = [
  {
    flag: 'us',
    text: 'MUND USA LLC | EIN: 32-0819366 | Address: 1160 HERON SOUND DR STE 50 APOPKA, FL 32703',
  },
  {
    flag: 'us',
    text: 'MUNDPAY LLC EIN: 36-5099929 | Address: 169 Madison Avenue - New York, NY 10016 US',
  },
  {
    flag: 'eu',
    text: 'MundP Tech OÜ - 17270502 | Address: Harju maakond, Tallinn, Lasnamäe linnaosa, Ruunaoja tn 3, 11415',
  },
] as const
