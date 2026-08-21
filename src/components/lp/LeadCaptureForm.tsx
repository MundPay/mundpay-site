import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage, withLanguagePrefix } from '../../i18n/languageRouting'
import { defaultLanguage } from '../../i18n/resources'
import { CheckIcon } from '../icons/CheckIcon'
import { AppButton } from '../shared/AppButton'
import { AppField } from '../shared/AppField'
import { AppFieldGroup } from '../shared/AppFieldGroup'
import { AppInput } from '../shared/AppInput'
import { AppSelect, type AppSelectOption } from '../shared/AppSelect'
import { platformOptions, revenueOptions } from './leadCaptureData'

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

type LeadCaptureFormProps = {
  onClose: () => void
}

function normalizeWhatsapp(value: string) {
  const hasInternationalPrefix = value.trim().startsWith('+')
  const digits = value.replace(/\D/g, '')

  return `${hasInternationalPrefix ? '+' : ''}${digits}`
}

export function LeadCaptureForm({ onClose }: LeadCaptureFormProps) {
  const { i18n, t } = useTranslation()
  const [revenue, setRevenue] = useState('')
  const [platform, setPlatform] = useState('')
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [formError, setFormError] = useState('')

  const revenueSelectOptions: AppSelectOption[] = revenueOptions.map((option) => ({
    value: option.value,
    label: t(`home.lp.form.revenueOptions.${option.translationKey}`),
  }))
  const platformSelectOptions: AppSelectOption[] = platformOptions.map((option) => ({
    value: option.value,
    label: t(`home.lp.form.platformOptions.${option.translationKey}`),
  }))

  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage) ?? defaultLanguage
  const privacyHref = withLanguagePrefix('/politica-de-privacidade', currentLanguage)
  const termsHref = withLanguagePrefix('/termos-de-uso', currentLanguage)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError('')

    const formData = new FormData(event.currentTarget)
    const whatsapp = normalizeWhatsapp(String(formData.get('whatsapp') ?? ''))

    if (!/^\+?[1-9]\d{7,14}$/.test(whatsapp)) {
      setFormError(t('home.lp.form.errors.whatsapp'))
      return
    }

    const endpoint = import.meta.env.VITE_LEAD_CAPTURE_ENDPOINT

    if (!endpoint) {
      setStatus('error')
      setFormError(t('home.lp.form.errors.configuration'))
      return
    }

    setStatus('submitting')

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      whatsapp,
      revenue,
      platform,
      source: 'lp',
      language: currentLanguage,
      submittedAt: new Date().toISOString(),
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Lead capture failed with status ${response.status}`)
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setFormError(t('home.lp.form.errors.submission'))
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
        <AppField htmlFor="lp-name" label={t('home.lp.form.name')} hideLabel>
          <AppInput
            id="lp-name"
            name="name"
            autoComplete="name"
            placeholder={t('home.lp.form.namePlaceholder')}
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
          error={formError && status !== 'error' ? formError : undefined}
          hideLabel
        >
          <AppInput
            id="lp-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            minLength={8}
            maxLength={20}
            pattern="[+0-9 ()-]{8,20}"
            placeholder={t('home.lp.form.whatsappPlaceholder')}
            aria-invalid={Boolean(formError && status !== 'error')}
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
