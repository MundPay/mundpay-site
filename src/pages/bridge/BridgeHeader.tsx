import { useEffect, useRef, useState, type FocusEvent } from 'react'
import { BridgeBrand } from './BridgeBrand'
import { BridgeLanguage } from './BridgeLanguage'
import { BridgeLink } from './BridgeLink'
import { BridgeCloseIcon } from './icons/BridgeCloseIcon'
import { BridgeMenuIcon } from './icons/BridgeMenuIcon'
import { useBridgeTranslation } from './useBridgeTranslation'

const navigation = [
  ['solucoes', 'nav_sol'],
  ['como-funciona', 'nav_how'],
  ['cobertura', 'nav_cov'],
  ['integracao', 'nav_int'],
  ['faq', null],
] as const

export function BridgeHeader() {
  const { t } = useBridgeTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [ink, setInk] = useState<{ left: number; width: number }>()
  const progressRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function updateScroll() {
      const distance = document.documentElement.scrollHeight - innerHeight
      const ratio = distance > 0 ? Math.min(1, scrollY / distance) : 0
      if (progressRef.current) progressRef.current.style.transform = 'scaleX(' + ratio + ')'
      setScrolled(scrollY > 20)
    }

    const observer = new ResizeObserver(updateScroll)
    observer.observe(document.documentElement)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  function moveInk(link: HTMLAnchorElement) {
    setInk({ left: link.offsetLeft, width: link.offsetWidth })
  }

  function closeOnBlur(event: FocusEvent<HTMLElement>) {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }

  return (
    <>
      <div className="prog" ref={progressRef} aria-hidden="true" />
      <header className="site">
        <nav
          className={scrolled ? 'nav scrolled' : 'nav'}
          aria-label={t('nav_label')}
          onBlur={closeOnBlur}
          onKeyDown={(event) => {
            if (event.key !== 'Escape' || !open) return
            setOpen(false)
            menuButtonRef.current?.focus()
          }}
        >
          <BridgeBrand />
          <div className="links" onMouseLeave={() => setInk(undefined)} onBlur={() => setInk(undefined)}>
            <span className="ink" style={{ ...ink, opacity: ink ? 1 : 0 }} aria-hidden="true" />
            {navigation.map(([target, label]) => (
              <a
                key={target}
                href={'#' + target}
                onMouseEnter={(event) => moveInk(event.currentTarget)}
                onFocus={(event) => moveInk(event.currentTarget)}
              >
                {label ? t(label) : 'FAQ'}
              </a>
            ))}
          </div>
          <div className="nav-r">
            <BridgeLanguage />
            <BridgeLink className="btn btn-p btn-sm" href="#contato">
              {t('cta_team')}
            </BridgeLink>
            <button
              className="burger"
              type="button"
              ref={menuButtonRef}
              aria-expanded={open}
              aria-controls="mnav"
              aria-label={t(open ? 'menu_close' : 'menu_open')}
              onClick={() => setOpen(!open)}
            >
              {open ? <BridgeCloseIcon /> : <BridgeMenuIcon />}
            </button>
          </div>
          <div
            className={open ? 'mnav open' : 'mnav'}
            id="mnav"
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest('a')) setOpen(false)
            }}
          >
            {navigation.map(([target, label]) => (
              <a key={target} href={'#' + target}>
                {label ? t(label) : 'FAQ'}
              </a>
            ))}
            <BridgeLanguage />
            <BridgeLink className="btn btn-p" href="#contato">
              {t('cta_team')}
            </BridgeLink>
          </div>
        </nav>
      </header>
    </>
  )
}
