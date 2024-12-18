import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
}

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center my-28">
      <div className="w-50 h-50 mx-auto rounded-full overflow-hidden shadow-2xl dark:shadow-neutral-500 transition-shadow duration-200">
        <Image
          src="/avatar-cartoon.jpg"
          alt="avatar"
          width={200}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="prose prose-lg mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
      </div>
    </section>
  )
}
