import { mundpayAssets } from '../../../assets/mundpayAssets'

export type BlogPost = {
  image: string
  title: string
  href: string
}

export const blogPosts: BlogPost[] = [
  {
    image: mundpayAssets.blogEntrepreneurship,
    title: 'Como Começar no Empreendedorismo Digital: Guia Completo para Iniciantes',
    href: 'https://mundpay.com/blog/como-comecar-no-empreendedorismo-digital-guia-completo-para-iniciantes',
  },
  {
    image: mundpayAssets.blogAfiliadosBrasil,
    title: 'Mundpay no Afiliados Brasil 2025',
    href: 'https://mundpay.com/blog/mundpay-no-afiliados-brasil-2025-trocas-tend%C3%AAncias-e-encontros-que-aceleram-resultados',
  },
  {
    image: mundpayAssets.blogGlobalScale,
    title: 'Infoprodutos Sem Fronteiras: Como Escalar Suas Vendas Globalmente',
    href: 'https://mundpay.com/blog/infoprodutos-sem-fronteiras-como-escalar-suas-vendas-globalmente',
  },
  {
    image: mundpayAssets.blogSecretOrderBump,
    title: 'Mundpay pioneira em order bump secreto.',
    href: 'https://mundpay.com/blog/mundpay-pioneira-em-order-bump-secreto-a-estrat%C3%A9gia-invis%C3%ADvel-que-aumenta-sua-convers%C3%A3o',
  },
  {
    image: mundpayAssets.blogGlobalGuide,
    title: 'Guia definitivo para vender seu infoproduto globalmente',
    href: 'https://mundpay.com/blog/guia-definitivo-para-vender-seu-infoproduto-globalmente',
  },
  {
    image: mundpayAssets.blogTwoClicks,
    title: 'Dois cliques, compra aprovada.',
    href: 'https://mundpay.com/blog/dois-cliques-compra-aprovada-entenda-como-apple-pay-e-google-pay-mudam-sua-taxa-de-convers%C3%A3o-em-at%C3%A9-30',
  },
  {
    image: mundpayAssets.blogUntappedMarkets,
    title: 'Mercados pouco explorados, grandes oportunidades',
    href: 'https://mundpay.com/blog/mercados-pouco-explorados-grandes-oportunidades-como-vender-antes-de-todo-mundo',
  },
  {
    image: mundpayAssets.blogReclameAqui,
    title: 'Mundpay é campeã do Prêmio Reclame AQUI 2025',
    href: 'https://mundpay.com/blog/mundpay-%C3%A9-campe%C3%A3-do-pr%C3%AAmio-reclame-aqui-2025',
  },
]

export const blogHref = 'https://mundpay.com/blog'

export const blogCarouselConfig = {
  visibleCards: 3,
  gap: 10,
  autoplayDelay: 4200,
  dragThreshold: 56,
} as const
