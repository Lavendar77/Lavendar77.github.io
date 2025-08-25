import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh() {
    // new content available
    console.log('New content is available; please refresh.')
  },
  onOfflineReady() {
    // ready to work offline
    console.log('App is ready to work offline.')
  },
  onRegistered() {
    console.log('Service worker has been registered.')
  },
  onRegisterError(error) {
    console.error('Error during service worker registration:', error)
  }
})
