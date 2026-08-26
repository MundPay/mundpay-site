import { useState, type FormEvent } from 'react'
import { isPossiblePhoneNumber, type Value as PhoneValue } from 'react-phone-number-input'
import enPhoneLabels from 'react-phone-number-input/locale/en.json'
import ptBrPhoneLabels from 'react-phone-number-input/locale/pt-BR.json'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage, withLanguagePrefix } from '../../i18n/languageRouting'
import { defaultLanguage } from '../../i18n/resources'
import { LeadSubmissionError, submitLead } from '../../libs/leadCaptureApi'
import { CheckIcon } from '../icons/CheckIcon'
import { AppButton } from '../shared/AppButton'
import { AppField } from '../shared/AppField'
import { AppFieldGroup } from '../shared/AppFieldGroup'
import { AppInput } from '../shared/AppInput'
import { AppPhoneInput } from '../shared/AppPhoneInput'
import { AppSelect, type AppSelectOption } from '../shared/AppSelect'
import { platformOptions, revenueOptions } from './leadCaptureData'

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

type LeadCaptureFormProps = {
  onClose: () => void
  onSuccess: () => void
}

type FieldErrors = {
  name?: string
  whatsapp?: string
}

function getSubmissionErrorKey(error: unknown) {
  if (!(error instanceof LeadSubmissionError)) return 'submission'

  if (error.status === 400 || error.status === 413 || error.status === 415 || error.status === 422) {
    return 'invalid'
  }

  if (error.status === 429) return 'rateLimit'
  if (error.status === 502 || error.status === 503) return 'unavailable'

  return error.status === undefined ? 'network' : 'submission'
}

export function LeadCaptureForm({ onClose, onSuccess }: LeadCaptureFormProps) {
  const { i18n, t } = useTranslation()
  const [whatsapp, setWhatsapp] = useState<PhoneValue>()
  const [revenue, setRevenue] = useState('')
  const [platform, setPlatform] = useState('')
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const revenueSelectOptions: AppSelectOption[] = revenueOptions.map((option) => ({
    value: option.value,
    label: t(`home.lp.form.revenueOptions.${option.translationKey}`),
  }))
  const platformSelectOptions: AppSelectOption[] = platformOptions.map((option) => ({
    value: option.value,
    label: t(`home.lp.form.platformOptions.${option.translationKey}`),
  }))

  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage) ?? defaultLanguage
  const phoneLabels = currentLanguage === 'en' ? enPhoneLabels : ptBrPhoneLabels
  const privacyHref = withLanguagePrefix('/politica-de-privacidade', currentLanguage)
  const termsHref = withLanguagePrefix('/termos-de-uso', currentLanguage)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (status === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const nextFieldErrors: FieldErrors = {}

    if (!/^\S+(?:\s+\S+)+$/.test(name)) {
      nextFieldErrors.name = t('home.lp.form.errors.name')
    }

    if (!whatsapp || !isPossiblePhoneNumber(whatsapp)) {
      nextFieldErrors.whatsapp = t('home.lp.form.errors.whatsapp')
    }

    setFieldErrors(nextFieldErrors)
    setFormError('')
    setStatus('idle')

    if (Object.keys(nextFieldErrors).length > 0) return
    if (!whatsapp) return

    setStatus('submitting')

    const payload = {
      name,
      email,
      whatsapp,
      revenue,
      platform,
      source: 'lp' as const,
      language: currentLanguage,
    }

    try {
      await submitLead(payload)
      form.reset()
      setWhatsapp(undefined)
      setRevenue('')
      setPlatform('')
      setStatus('success')
      onSuccess()
    } catch (error) {
      setStatus('error')
      setFormError(t(`home.lp.form.errors.${getSubmissionErrorKey(error)}`))
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-5 py-3 text-center" role="status">
        <div className="flex size-12 items-center justify-center rounded-full bg-[#A2D035] font-space-grotesk text-[24px] font-bold text-[#050700]">
          <CheckIcon className="size-8" />
        </div>
        <div>
          <p className="font-rethink-sans text-[21px] font-bold text-[#EAEEE4]">
            {t('home.lp.form.success.title')}
          </p>
          <p className="mt-2 font-space-grotesk text-[14px] leading-normal text-[#EAEEE4]/65">
            {t('home.lp.form.success.description')}
          </p>
        </div>
        <AppButton type="button" onClick={onClose}>
          {t('home.lp.form.success.close')}
        </AppButton>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <AppFieldGroup>
        <AppField
          htmlFor="lp-name"
          label={t('home.lp.form.name')}
          error={fieldErrors.name}
          hideLabel
        >
          <AppInput
            id="lp-name"
            name="name"
            autoComplete="name"
            placeholder={t('home.lp.form.namePlaceholder')}
            aria-invalid={Boolean(fieldErrors.name)}
            required
          />
        </AppField>

        <AppField htmlFor="lp-email" label={t('home.lp.form.email')} hideLabel>
          <AppInput
            id="lp-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t('home.lp.form.emailPlaceholder')}
            required
          />
        </AppField>

        <AppField
          htmlFor="lp-whatsapp"
          label={t('home.lp.form.whatsapp')}
          error={fieldErrors.whatsapp}
          hideLabel
        >
          <AppPhoneInput
            id="lp-whatsapp"
            name="whatsapp"
            autoComplete="tel"
            defaultCountry="BR"
            labels={phoneLabels}
            countrySelectProps={{
              emptyMessage: t('home.lp.form.countryEmpty'),
              searchPlaceholder: t('home.lp.form.countrySearchPlaceholder'),
            }}
            limitMaxLength
            value={whatsapp}
            onChange={(value) => {
              setWhatsapp(value)

              if (fieldErrors.whatsapp) {
                setFieldErrors((currentErrors) => ({
                  ...currentErrors,
                  whatsapp: undefined,
                }))
              }
            }}
            placeholder={t('home.lp.form.whatsappPlaceholder')}
            aria-invalid={Boolean(fieldErrors.whatsapp)}
            required
          />
        </AppField>

        <AppField htmlFor="lp-revenue" label={t('home.lp.form.revenue')} hideLabel>
          <AppSelect
            id="lp-revenue"
            name="revenue"
            value={revenue}
            onValueChange={setRevenue}
            options={revenueSelectOptions}
            placeholder={t('home.lp.form.revenuePlaceholder')}
            helperText={t('home.lp.form.revenueHelper')}
            required
          />
        </AppField>

        <AppField htmlFor="lp-platform" label={t('home.lp.form.platform')} hideLabel>
          <AppSelect
            id="lp-platform"
            name="platform"
            value={platform}
            onValueChange={setPlatform}
            options={platformSelectOptions}
            placeholder={t('home.lp.form.platformPlaceholder')}
            helperText={t('home.lp.form.platformHelper')}
            required
          />
        </AppField>
      </AppFieldGroup>

      {status === 'error' && formError ? (
        <p className="mt-3 font-space-grotesk text-[12px] leading-normal text-[#A2D035]" role="alert">
          {formError}
        </p>
      ) : null}

      <AppButton className="mt-4" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? t('home.lp.form.submitting')
          : t('home.lp.form.submit')}
      </AppButton>

      <p className="mx-auto mt-4 max-w-[330px] text-center font-space-grotesk text-[11px] leading-[1.45] text-[#EAEEE4]/45">
        {t('home.lp.form.privacyPrefix')}{' '}
        <a className="underline underline-offset-2 hover:text-[#EAEEE4]" href={privacyHref}>
          {t('home.lp.form.privacyPolicy')}
        </a>{' '}
        {t('home.lp.form.privacyMiddle')}{' '}
        <a className="underline underline-offset-2 hover:text-[#EAEEE4]" href={termsHref}>
          {t('home.lp.form.terms')}
        </a>.
      </p>
    </form>
  )
}
