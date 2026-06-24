import { fallbackPaymentMethods, paymentBrandOrder } from './globalSalesData'

type PaymentMethodLogo = {
  path: string
  label: string
  src: string
}

const brandLogoModules = import.meta.glob('../../../assets/image/brands/*.svg', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const brandLogoSources = Object.entries(brandLogoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    path,
    label:
      path
        .split('/')
        .pop()
        ?.replace(/\.svg$/i, '')
        .replace(/[-_]+/g, ' ') ?? 'payment method',
    src,
  }))

const orderedBrandLogoSources = paymentBrandOrder
  .map((brand) => {
    const logo = brandLogoSources.find((source) => source.path.includes(brand.fileId))

    return logo ? { ...logo, label: brand.label } : null
  })
  .filter((logo): logo is PaymentMethodLogo => Boolean(logo))

export const paymentMethodLogos =
  orderedBrandLogoSources.length > 0
    ? orderedBrandLogoSources
    : fallbackPaymentMethods.map((label) => ({
        path: '',
        label,
        src: '',
      }))
