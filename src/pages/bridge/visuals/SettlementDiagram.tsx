export function SettlementDiagram() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 146" fill="none">
      <g fontFamily="ui-monospace,Consolas,monospace" fontSize="11" fontWeight="600">
        <rect x="8" y="14" width="52" height="26" rx="7" fill="#131909" stroke="rgba(234,237,228,.24)" />
        <text x="34" y="31" textAnchor="middle" fill="#EAEDE4">
          BRL
        </text>
        <rect x="8" y="60" width="52" height="26" rx="7" fill="#131909" stroke="rgba(234,237,228,.24)" />
        <text x="34" y="77" textAnchor="middle" fill="#EAEDE4">
          MXN
        </text>
        <rect
          x="8"
          y="106"
          width="52"
          height="26"
          rx="7"
          fill="#131909"
          stroke="rgba(234,237,228,.24)"
        />
        <text x="34" y="123" textAnchor="middle" fill="#EAEDE4">
          COP
        </text>
      </g>
      <g stroke="#A2D035" strokeWidth="1.5" strokeLinecap="round" className="flowl">
        <path d="M62 27C130 27 150 73 214 73" />
        <path d="M62 73H214" />
        <path d="M62 119C130 119 150 73 214 73" />
      </g>
      <circle cx="248" cy="73" r="32" fill="#A2D035" />
      <text
        x="248"
        y="78"
        textAnchor="middle"
        fontFamily="Rethink Sans,system-ui,sans-serif"
        fontWeight="800"
        fontSize="15"
        fill="#050700"
      >
        USDT
      </text>
    </svg>
  )
}
