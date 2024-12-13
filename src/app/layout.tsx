import type { Metadata } from 'next'
import './globals.css'

import Header from '@/app/_components/header'
import Footer from '@/app/_components/footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Leafage',
    default: 'Leafage',
  },
  description: "A website of leafage",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
