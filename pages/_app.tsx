import '../styles/globals.css'
import Script from "next/script"

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-D19WTV9FQV`}
      />

      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D19WTV9FQV');
        `}
      </Script>
      <Component {...pageProps} />
    </>)
}
