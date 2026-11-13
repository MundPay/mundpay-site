import arFlag from '../../assets/bridge/flags/ar.svg'
import brFlag from '../../assets/bridge/flags/br.svg'
import clFlag from '../../assets/bridge/flags/cl.svg'
import coFlag from '../../assets/bridge/flags/co.svg'
import crFlag from '../../assets/bridge/flags/cr.svg'
import ecFlag from '../../assets/bridge/flags/ec.svg'
import mxFlag from '../../assets/bridge/flags/mx.svg'
import peFlag from '../../assets/bridge/flags/pe.svg'
import mercadopagoLogo from '../../assets/bridge/logos/mercadopago.svg'
import picpayLogo from '../../assets/bridge/logos/picpay.svg'
import pixLogo from '../../assets/bridge/logos/pix.svg'

export const bridgeFlags = {
  ar: arFlag,
  br: brFlag,
  cl: clFlag,
  co: coFlag,
  cr: crFlag,
  ec: ecFlag,
  mx: mxFlag,
  pe: peFlag,
} as const

export const bridgeLogos = {
  mercadopago: mercadopagoLogo,
  picpay: picpayLogo,
  pix: pixLogo,
} as const
