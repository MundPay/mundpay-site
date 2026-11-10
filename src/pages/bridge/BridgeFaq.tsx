import { useRef, useState } from 'react'
import { getNextIndex } from './bridgeKeyboard'
import { BridgeRichText } from './BridgeRichText'
import { BridgePlusIcon } from './icons/BridgePlusIcon'
import { useBridgeTranslation } from './useBridgeTranslation'

const questions = [
  ['q1', 'a1'],
  ['q2', 'a2'],
  ['q3', 'a3'],
  ['q4', 'a4'],
  ['q5', 'a5'],
  ['q6', 'a6'],
  ['q7', 'a7'],
  ['q8', 'a8'],
] as const

export function BridgeFaq() {
  const { t } = useBridgeTranslation()
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set())
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  function toggle(index: number) {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section className="sec" id="faq" aria-labelledby="h-faq">
      <div className="wrap">
        <div className="sec-head rv">
          <h2 id="h-faq">
            <BridgeRichText name="faq_h2" />
          </h2>
        </div>
        <div className="faq-l rv">
          {questions.map(([question, answer], index) => {
            const open = expanded.has(index)
            return (
              <div className="fq" key={question}>
                <h3>
                  <button
                    type="button"
                    ref={(button) => {
                      buttons.current[index] = button
                    }}
                    id={question}
                    aria-expanded={open}
                    aria-controls={answer}
                    onClick={() => toggle(index)}
                    onKeyDown={(event) => {
                      const next = getNextIndex(event.key, index, questions.length, 'vertical')
                      if (next === null) return
                      event.preventDefault()
                      buttons.current[next]?.focus()
                    }}
                  >
                    <span>{t(question)}</span>
                    <span className="pm">
                      <BridgePlusIcon />
                    </span>
                  </button>
                </h3>
                <div className={open ? 'pa open' : 'pa'} id={answer} inert={!open}>
                  <div>
                    <p>
                      <BridgeRichText name={answer} />
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
