import '@unocss/reset/tailwind.css'
import 'uno.css'

import type { AppProps } from 'next/app'

import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'


const progress = new ProgressBar({
  size: 2,
  color: '#84cc16',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
