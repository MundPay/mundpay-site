import type { CSSProperties } from 'react'
import integrationNoiseTexture from '../../../assets/image/8050a6e0a7-6mcf62RlDfRfU61Yg5vb2pefpi4.avif'

const integrationMarkMask = new URL('../../../assets/image/5889a4f457-qdPijIAtlbtQqN6SPUOq9ds26U.svg', import.meta.url).href

const integrationLogoModules = import.meta.glob('../../../assets/image/integrations/*.svg', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

export const integrationLogoById = Object.fromEntries(
  Object.entries(integrationLogoModules).map(([path, src]) => [path.split('/').pop()?.replace('.svg', '') ?? path, src]),
)

export const integrationsBackgroundMarkStyle = {
  '--integrations-mark-mask': `url("${integrationMarkMask}")`,
  backgroundColor: 'rgba(234, 238, 228, 0.92)',
  backgroundImage: `url(${integrationNoiseTexture}), linear-gradient(#EAEEE4, #EAEEE4)`,
  backgroundBlendMode: 'multiply, normal',
  backgroundPosition: 'left top',
  backgroundRepeat: 'repeat',
  backgroundSize: '24px auto',
  filter: 'grayscale(1) contrast(1.02)',
} as CSSProperties

export const integrationsOverlayStyle = {
  background:
    'radial-gradient(ellipse at center, transparent 0%, transparent 44%, rgba(5, 7, 0, 0.24) 78%, rgba(5, 7, 0, 0.58) 100%), linear-gradient(90deg, rgba(5, 7, 0, 0.72) 0%, rgba(5, 7, 0, 0.36) 8%, transparent 20%, transparent 80%, rgba(5, 7, 0, 0.36) 92%, rgba(5, 7, 0, 0.72) 100%), linear-gradient(180deg, rgba(5, 7, 0, 0.6) 0%, rgba(5, 7, 0, 0.26) 9%, transparent 20%, transparent 80%, rgba(5, 7, 0, 0.26) 91%, rgba(5, 7, 0, 0.6) 100%)',
} as CSSProperties
