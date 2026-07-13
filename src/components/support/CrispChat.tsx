import { useEffect } from 'react'

const CRISP_SCRIPT_ID = 'crisp-chat-script'
const CRISP_WEBSITE_ID = 'c58c684b-c56b-4e49-b875-a44d465e7878'

export function CrispChat() {
  useEffect(() => {
    window.$crisp = window.$crisp ?? []
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID

    if (document.getElementById(CRISP_SCRIPT_ID)) {
      return
    }

    const script = document.createElement('script')

    script.id = CRISP_SCRIPT_ID
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true

    document.head.appendChild(script)
  }, [])

  return null
}
