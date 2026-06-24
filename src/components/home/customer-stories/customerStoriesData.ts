import { mundpayAssets } from '../../../assets/mundpayAssets'

export type CustomerStory = {
  image: string
  name: string
  role: string
  handle: string
}

export const customerStories: CustomerStory[] = [
  {
    image: mundpayAssets.customerJoao,
    name: 'João Brandão',
    role: 'Nutraceuticals',
    handle: '@brandaooads',
  },
  {
    image: mundpayAssets.customerLeandro,
    name: 'Leandro Ads',
    role: '7D Infoproduct Creator',
    handle: '@leandroreisofc',
  },
  {
    image: mundpayAssets.customerMoises,
    name: 'Moisés Vinícius',
    role: 'Infoprodutor 7D',
    handle: '@monza.v',
  },
  {
    image: mundpayAssets.customerBruno,
    name: 'Bruno Lopes',
    role: 'Global Infoproduct Creator',
    handle: '@_brunilopees',
  },
  {
    image: mundpayAssets.customerDeivid,
    name: 'Deivid Leonardi',
    role: 'Global Infoproduct Creator',
    handle: '@eusoudeividleonardi',
  },
  {
    image: mundpayAssets.customerMatheus,
    name: 'Matheus Wanzeller',
    role: 'Tracking Specialist',
    handle: '@matheus.track',
  },
  {
    image: mundpayAssets.customerFilipe,
    name: 'Filipe Santana',
    role: '8D Infoproducer',
    handle: '@soufilipesantana',
  },
  {
    image: mundpayAssets.customerVictao,
    name: 'Victão',
    role: '7D Infoproduct Creator',
    handle: '@euvictaao',
  },
]

export const customerStoriesCarousel = {
  visibleCards: 5,
  autoAdvanceDelay: 3000,
  slideDuration: 650,
} as const
