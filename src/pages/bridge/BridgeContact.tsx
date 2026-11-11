import { useRef, useState, type FormEvent } from 'react'
import {
  BridgeContactError,
  createBridgeSubmissionId,
  submitBridgeContact,
  type BridgeContactPayload,
} from '../../libs/bridgeContactApi'
import { bridgeCountries } from './bridgeCountries'
import { BridgeArrowIcon } from './icons/BridgeArrowIcon'
import { BridgeCloseIcon } from './icons/BridgeCloseIcon'
import { useBridgeTranslation } from './useBridgeTranslation'

const volumeOptions = ['v1', 'v2', 'v3', 'v4'] as const

export function BridgeContact() {
  const { t, language } = useBridgeTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<'f_error' | 'f_invalid' | 'f_rate_limit' | 'f_unavailable' | null>(
    null,
  )
  const sending = useRef(false)
  const submission = useRef<{ body: string; id: string } | null>(null)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    const payload: BridgeContactPayload = {
      name: String(data.get('nome') ?? ''),
      company: String(data.get('empresa') ?? ''),
      email: String(data.get('email') ?? ''),
      country: String(data.get('pais') ?? ''),
      volume: String(data.get('volume') ?? ''),
      message: String(data.get('mensagem') ?? ''),
      consent: data.get('consent') === 'on',
      language,
      website: String(data.get('site') ?? ''),
    }
    const body = JSON.stringify(payload)
    if (submission.current?.body !== body) {
      submission.current = { body, id: createBridgeSubmissionId() }
    }

    sending.current = true
    setPending(true)
    setSubmitted(false)
    setError(null)
    try {
      await submitBridgeContact({ ...payload, submissionId: submission.current.id })
      form.reset()
      submission.current = null
      setSubmitted(true)
    } catch (cause) {
      const status = cause instanceof BridgeContactError ? cause.status : undefined
      if (status === 429) setError('f_rate_limit')
      else if (status === 422) setError('f_invalid')
      else if (status === 503) setError('f_unavailable')
      else setError('f_error')
    } finally {
      sending.current = false
      setPending(false)
    }
  }

  return (
    <section className="sec contact" id="contato" aria-labelledby="h-ct">
      <div className="wrap">
        <div>
          <h2 id="h-ct">{t('ct_h2')}</h2>
          <p className="tx">{t('ct_p')}</p>
        </div>
        <form id="form" onSubmit={submit} aria-busy={pending} onChange={() => setSubmitted(false)}>
          <fieldset className="contents" disabled={pending}>
            <p className="f-note">{t('f_note')}</p>
            <div className="fgrid">
              <div className="fld">
                <label htmlFor="f-nome">{t('f_name')}</label>
                <input
                  id="f-nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={120}
                  required
                />
              </div>
              <div className="fld">
                <label htmlFor="f-emp">{t('f_company')}</label>
                <input
                  id="f-emp"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  maxLength={160}
                  required
                />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="f-mail">{t('f_mail')}</label>
              <input
                id="f-mail"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
              />
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
              <textarea id="f-msg" name="mensagem" maxLength={5000} />
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="f-hp">{t('f_hp')}</label>
              <input
                id="f-hp"
                name="site"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                maxLength={200}
              />
            </div>
            <label className="chk">
              <input type="checkbox" name="consent" required />
              <span>{t('f_consent')}</span>
            </label>
            <div>
              <button
                className="btn btn-k btn-lg disabled:cursor-wait disabled:opacity-60"
                type="submit"
              >
                <span>{t(pending ? 'f_sending' : 'f_send')}</span>
                <span className="arr">
                  <BridgeArrowIcon />
                </span>
              </button>
            </div>
          </fieldset>
          {error ? (
            <p className="rounded-xl bg-mundpay-ink p-4 text-sm text-mundpay-cream" role="alert">
              {t(error)}
            </p>
          ) : null}
          <div className={submitted ? 'f-ok on flex items-center justify-between gap-3' : 'f-ok'}>
            <span role="status">{submitted ? t('f_ok') : null}</span>
            {submitted ? (
              <button
                type="button"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-current [&_svg]:size-4"
                aria-label={t('f_close')}
                onClick={() => setSubmitted(false)}
              >
                <BridgeCloseIcon />
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}
