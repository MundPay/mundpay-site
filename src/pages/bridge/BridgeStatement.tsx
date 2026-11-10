import { getStatementCells, getStatementHeadings, statementColumns } from './bridgeStatementData'
import { bridgeTransactions } from './bridgeTransactions'
import { BridgeCopyIcon } from './icons/BridgeCopyIcon'
import { useBridgeClipboard } from './useBridgeClipboard'
import { useBridgeTranslation } from './useBridgeTranslation'

export function BridgeStatement() {
  const { t, language } = useBridgeTranslation()
  const { copy, copied } = useBridgeClipboard()

  return (
    <div className="d-table">
      <div className="tw" tabIndex={0} role="region" aria-label={t('stmt')}>
        <table>
          <caption className="sr">{t('stmt')}</caption>
          <thead>
            <tr>
              {getStatementHeadings(t).map((heading, index) => (
                <th
                  key={statementColumns[index]}
                  scope="col"
                  className={index >= 2 && index <= 4 ? 'r' : undefined}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bridgeTransactions.map((row) => {
              const [time, id, amount, rate, usdt, settlement, hash, status] = getStatementCells(
                row,
                language,
                t,
              )
              return (
                <tr data-t={row.type} key={id}>
                  <td className="tn">{time}</td>
                  <td className="mono">{id}</td>
                  <td className="r tn">{amount}</td>
                  <td className="r tn">{rate}</td>
                  <td className={row.usdt < 0 ? 'r tn neg' : 'r tn'}>{usdt}</td>
                  <td className="tn">{settlement}</td>
                  <td>
                    <span className="hash">
                      <span>{row.shortHash}</span>
                      <button
                        type="button"
                        className={copied === id ? 'ok' : undefined}
                        aria-label={t('hash_copy') + ' ' + row.shortHash}
                        onClick={() => {
                          void copy(hash, id)
                        }}
                      >
                        <BridgeCopyIcon />
                      </button>
                    </span>
                  </td>
                  <td>
                    <span className={'stt ' + row.status}>{status}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="sr" role="status">
        {copied ? t('copied_live') : null}
      </div>
    </div>
  )
}
