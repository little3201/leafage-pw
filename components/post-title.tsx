import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function PostTitle ({ children }: Props) {
  return (
    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-8 text-center">
      {children}
    </h1>
  )
}