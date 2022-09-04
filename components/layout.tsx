import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
