import { integrationsOverlayStyle } from './integrationAssets'

export function IntegrationsOverlay() {
  return <div className="pointer-events-none absolute inset-0 z-[3]" style={integrationsOverlayStyle} />
}
