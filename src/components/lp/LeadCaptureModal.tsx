import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../assets/mundpayAssets'
import { AppDialog } from '../shared/AppDialog'
import { LeadCaptureForm } from './LeadCaptureForm'

type LeadCaptureModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <AppDialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose()
      }}
      closeLabel={t('home.lp.modal.closeLabel')}
      title={t('home.lp.modal.title')}
      description={t('home.lp.modal.description')}
      hideIntro={isSubmitted}
      headerContent={
        <img
          src={mundpayAssets.logoWhite}
          alt="Mundpay"
          className="mb-2 h-7 w-auto"
        />
      }
    >
      <LeadCaptureForm
        onClose={handleClose}
        onSuccess={() => setIsSubmitted(true)}
      />
    </AppDialog>
  )
}
