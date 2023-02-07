import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A flexible and configurable, beautiful layout, can be used for consulting, blog system.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="google-site-verification" content="_2Z6I2Wl5xuTKIGRrCD3meIZDgfn_XFVrTv1tKeJ6v8" />
      <meta name="msvalidate.01" content="E02DDF417CA7C7D33A55805B3E9A81C7" />
      <meta name="bytedance-verification-code" content="QAK19uJv32RHmoMsQ+hi" />
    </Head>
  )
}

export default Meta
