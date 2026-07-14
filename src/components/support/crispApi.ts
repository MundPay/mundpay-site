export function openCrispChat() {
  window.$crisp = window.$crisp ?? []
  window.$crisp.push(['do', 'chat:open'])
}
