import { useState, type FormEvent } from 'react'
import { bridgeCountries } from './bridgeCountries'
import { BridgeArrowIcon } from './icons/BridgeArrowIcon'
import { useBridgeTranslation } from './useBridgeTranslation'

const volumeOptions = ['v1', 'v2', 'v3', 'v4'] as const

export function BridgeContact() {
  const { t } = useBridgeTranslation()
  const [submitted, setSubmitted] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const honeypot = new FormData(form).get('site')
    form.reset()
    setSubmitted(!honeypot)
  }

  return (
    <section className="sec contact" id="contato" aria-labelledby="h-ct">
      <div className="wrap">
        <div>
          <h2 id="h-ct">{t('ct_h2')}</h2>
          <p className="tx">{t('ct_p')}</p>
        </div>
        <form id="form" onSubmit={submit}>
          <p className="f-note">{t('f_note')}</p>
          <div className="fgrid">
            <div className="fld">
              <label htmlFor="f-nome">{t('f_name')}</label>
              <input id="f-nome" name="nome" type="text" autoComplete="name" required />
            </div>
            <div className="fld">
              <label htmlFor="f-emp">{t('f_company')}</label>
              <input id="f-emp" name="empresa" type="text" autoComplete="organization" required />
            </div>
          </div>
          <div className="fld">
            <label htmlFor="f-mail">{t('f_mail')}</label>
            <input id="f-mail" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="fgrid">
            <div className="fld">
              <label htmlFor="f-pais">{t('f_country')}</label>
              <select id="f-pais" name="pais" required defaultValue="">
                <option value="" disabled>
                  {t('f_sel')}
                </option>
                {bridgeCountries.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {t(name)}
                  </option>
                ))}
                <option value="other">{t('c_other')}</option>
              </select>
            </div>
            <div className="fld">
              <label htmlFor="f-vol">{t('f_vol')}</label>
              <select id="f-vol" name="volume" required defaultValue="">
                <option value="" disabled>
                  {t('f_sel')}
                </option>
                {volumeOptions.map((key) => (
                  <option key={key} value={key}>
                    {t(key)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="fld">
            <label htmlFor="f-msg">{t('f_msg')}</label>
            <textarea id="f-msg" name="mensagem" />
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="f-hp">{t('f_hp')}</label>
            <input id="f-hp" name="site" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <label className="chk">
            <input type="checkbox" name="consent" required />
            <span>{t('f_consent')}</span>
          </label>
          <div>
            <button className="btn btn-k btn-lg" type="submit">
              <span>{t('f_send')}</span>
              <span className="arr">
                <BridgeArrowIcon />
              </span>
            </button>
          </div>
          <div className={submitted ? 'f-ok on' : 'f-ok'} role="status">
            {submitted ? t('f_ok') : null}
          </div>
        </form>
      </div>
    </section>
  )
}
