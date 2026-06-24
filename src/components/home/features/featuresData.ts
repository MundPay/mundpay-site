import { mundpayAssets } from '../../../assets/mundpayAssets'

export type Feature = {
  id: string
  translationKey: string
  media: string
}

export const features: Feature[] = [
  {
    id: 'features1',
    translationKey: 'secretOrderBump',
    media: mundpayAssets.secretOrderBumpVideo,
  },
  {
    id: 'feature-2',
    translationKey: 'upsellOneClick',
    media: mundpayAssets.upsellOneClickVideo,
  },
  {
    id: 'feature-3',
    translationKey: 'subscriptions',
    media: mundpayAssets.subscriptionsVideo,
  },
  {
    id: 'feature-4',
    translationKey: 'affiliateMarketplace',
    media: mundpayAssets.affiliateMarketplaceVideo,
  },
]
