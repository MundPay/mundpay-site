import { useRef, useState } from 'react'
import { BridgeLink } from './BridgeLink'
import { BridgeRichText } from './BridgeRichText'
import { BridgeTabs } from './BridgeTabs'
import { BridgeCopyIcon } from './icons/BridgeCopyIcon'
import { useBridgeClipboard } from './useBridgeClipboard'
import { useBridgeTranslation } from './useBridgeTranslation'

const tabs = [
  { id: 'itab-cursor', label: 'API' },
  { id: 'itab-claude', label: 'MCP' },
]

export function BridgeIntegration() {
  const { t } = useBridgeTranslation()
  const [active, setActive] = useState(0)
  const code = useRef<HTMLPreElement>(null)
  const { copy, copied } = useBridgeClipboard()
  const api = active === 0

  return (
    <section className="sec bgd" id="integracao" aria-labelledby="h-int">
      <div className="wrap">
        <div className="split rv">
          <div>
            <h2 id="h-int">
              <BridgeRichText name="int_h2" />
            </h2>
          </div>
          <p>{t('int_p')}</p>
        </div>
        <div className="ide rv">
          <div className="ide-top">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <BridgeTabs
              label={t('client_aria')}
              className="itabs"
              panel="ide-panel"
              items={tabs}
              active={active}
              onChange={setActive}
            />
            <button
              className={copied === tabs[active].id ? 'cpy ok' : 'cpy'}
              type="button"
              onClick={() => {
                const text = code.current?.textContent
                if (text) void copy(text, tabs[active].id)
              }}
            >
              <BridgeCopyIcon />
              <span>{t(copied === tabs[active].id ? 'copied' : 'copy')}</span>
            </button>
          </div>
          <div className="ide-body" id="ide-panel" role="tabpanel" aria-labelledby={tabs[active].id}>
            {api ? (
              <pre ref={code} tabIndex={0}>
                <span className="k">POST</span>
                {' /api/v1/deposits\nAuthorization: Bearer '}
                <span>{t('key_ph')}</span>
                {'\nContent-Type: application/json\n\n{\n  '}
                <span className="k">"country"</span>
                {': '}
                <span className="s">"BRA"</span>
                {',\n  '}
                <span className="k">"currency"</span>
                {': '}
                <span className="s">"BRL"</span>
                {',\n  '}
                <span className="k">"payment_method"</span>
                {': '}
                <span className="s">"pix"</span>
                {',\n  '}
                <span className="k">"amount_local"</span>
                {': '}
                <span className="s">25000</span>
                {'\n}'}
              </pre>
            ) : (
              <pre ref={code} tabIndex={0}>
                <span className="c">{t('mcp_pre')}</span>
              </pre>
            )}
            <div className="chat">
              <div className="cl">{t('illus')}</div>
              <div className="me">{t('chat_me')}</div>
              <div className="ai">
                <BridgeRichText name="chat_ai" />
              </div>
            </div>
          </div>
        </div>
        <div className="ilinks rv">
          <BridgeLink className="btn btn-g btn-lg" href="https://api.ltpago.com/docs/api" external>
            {t('doc')}
          </BridgeLink>
          <BridgeLink className="btn btn-p btn-lg" href="https://api.ltpago.com/mcp/install" external>
            {t('mcp_btn')}
          </BridgeLink>
        </div>
        <div className="sr" role="status">
          {copied ? t('copied_live') : null}
        </div>
      </div>
    </section>
  )
}
