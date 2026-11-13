import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BridgeContact } from './BridgeContact'
import { BridgeCoverage } from './BridgeCoverage'
import { BridgeDashboard } from './BridgeDashboard'
import { BridgeFaq } from './BridgeFaq'
import { BridgeFlow } from './BridgeFlow'
import { BridgeFooter } from './BridgeFooter'
import { BridgeHeader } from './BridgeHeader'
import { BridgeHero } from './BridgeHero'
import { BridgeIntegration } from './BridgeIntegration'
import { BridgeMarquee } from './BridgeMarquee'
import { BridgeMethods } from './BridgeMethods'
import { BridgeRates } from './BridgeRates'
import { BridgeSecurity } from './BridgeSecurity'
import { BridgeSolutions } from './BridgeSolutions'
import { BridgePauseIcon } from './icons/BridgePauseIcon'
import { BridgePlayIcon } from './icons/BridgePlayIcon'
import { useBridgeTranslation } from './useBridgeTranslation'
import './bridge.css'

export default function BridgePage() {
  const { t } = useBridgeTranslation()
  const pageRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [coverage, setCoverage] = useState(0)
  const { hash } = useLocation()

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll('.rv')
    if (!sections) return

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return
          target.classList.add('in')
          observer.unobserve(target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <div className={paused ? 'bridge-page paused' : 'bridge-page'} ref={pageRef}>
      <a className="skip" href="#main">
        {t('skip')}
      </a>
      <button className="btn btn-g btn-sm pausebtn" type="button" onClick={() => setPaused(!paused)}>
        {paused ? <BridgePlayIcon /> : <BridgePauseIcon />}
        <span className="pl">{t(paused ? 'resume' : 'pause')}</span>
      </button>
      <BridgeHeader />
      <main id="main" tabIndex={-1}>
        <BridgeHero paused={paused} onShowUpcoming={() => setCoverage(1)} />
        <BridgeMarquee />
        <BridgeSolutions paused={paused} />
        <BridgeFlow paused={paused} />
        <BridgeCoverage active={coverage} onChange={setCoverage} />
        <BridgeMethods />
        <BridgeIntegration />
        <BridgeDashboard />
        <BridgeSecurity />
        <BridgeRates />
        <BridgeFaq />
        <BridgeContact />
      </main>
      <BridgeFooter />
    </div>
  )
}
