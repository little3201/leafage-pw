import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Docs",
  description: "Docs of leafage",
}

export default function DocLayout({ children }: { children: React.ReactNode }) {
    return <section className="p-24">{children}</section>
}