import '@unocss/reset/tailwind.css'
import 'uno.css'

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
