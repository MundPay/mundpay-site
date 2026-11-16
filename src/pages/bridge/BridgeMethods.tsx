import { BridgeMethodTag } from './BridgeMethodTag'
import { BridgeRichText } from './BridgeRichText'
import { bridgeStyle } from './bridgeStyle'
import { useBridgeTranslation } from './useBridgeTranslation'

const categories = [
  {
    title: 'met1_t',
    description: 'met1_p',
    methods: [
      ['Pix', 'pix', ['br']],
      ['PicPay', 'picpay', ['br']],
      ['Nequi', 'N', ['co']],
      ['Daviplata', 'D', ['co']],
      ['Yape', 'Y', ['pe']],
      ['Plin', 'P', ['pe']],
      ['MACH', 'M', ['cl']],
      ['Mercado Pago', 'mercadopago', ['ar']],
      ['MODO', 'M', ['ar']],
    ],
  },
  {
    title: 'met2_t',
    description: 'met2_p',
    methods: [
      ['Boleto', 'B', ['br']],
      ['7-Eleven', '7', ['mx']],
      ['Circle K', 'C', ['mx']],
      ['Efecty', 'E', ['co']],
      ['Rapipago', 'R', ['ar']],
      ['Servipag', 'S', ['cl']],
      ['Kasnet', 'K', ['pe']],
      ['Western Union', 'W', ['pe']],
      ['Red Activa', 'R', ['ec']],
    ],
  },
  {
    title: 'met3_t',
    description: 'met3_p',
    methods: [
      ['SPEI', 'S', ['mx']],
      ['PSE', 'P', ['co']],
      ['Bre-B', 'B', ['co']],
      ['Khipu', 'K', ['cl', 'pe', 'ar']],
      ['Fintoc', 'F', ['cl']],
      ['BancoEstado', 'B', ['cl']],
      ['Banco Pichincha', 'B', ['ec']],
      ['Banco Nacional', 'B', ['cr']],
    ],
  },
] as const

export function BridgeMethods() {
  const { t } = useBridgeTranslation()

  return (
    <section className="sec bgd" id="metodos" aria-labelledby="h-met">
      <div className="wrap">
        <div className="split rv">
          <div>
            <h2 id="h-met">
              <BridgeRichText name="met_h2" />
            </h2>
          </div>
          <p>{t('met_p')}</p>
        </div>
        <div className="mcols">
          {categories.map(({ title, description, methods }, index) => (
            <div key={title} className="mcol rv" style={bridgeStyle('--i', index)}>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
              <div className="flex flex-wrap gap-2">
                {methods.map(([name, mark, countries]) => (
                  <BridgeMethodTag key={name} name={name} mark={mark} countries={countries} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
