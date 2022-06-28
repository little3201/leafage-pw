import Alert from './alert'
import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Header />
      <main className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 mx-auto">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
