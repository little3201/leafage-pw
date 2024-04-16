'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'

import { headerList } from '@/app/lib/data'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="absolute inset-x-0 top-0 z-50 container mx-auto p-5 flex justify-between items-center space-x-4 xl:space-x-8">
            <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
                <Link href="/" >
                    <Image
                        src="/logo.png"
                        className="rounded-full"
                        alt="logo"
                        width={40}
                        height={40}
                        style={{
                            objectFit: 'contain',
                            objectPosition: "center"
                        }} />
                </Link>
                <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
                    {headerList.map(item => (
                        <Link
                            href={item.path}
                            className={clsx('text-md xl:text-base py-2 px-4 xl:px-5 transition-transform duration-200 font-semibold hover:text-lime-600',
                                pathname === item.path ? 'text-lime-600' : 'text-neutral-700 dark:text-neutral-300')}
                            rel="noopener noreferrer"
                            id={item.title}
                            aria-expanded="false"
                            key={item.title}>
                            <span>{item.title}</span>
                        </Link>))}
                </ul>
            </div>
            <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
                <div className="hidden items-center xl:flex space-x-1">
                    <div className="relative">
                        <button type="button" title='search_button' className="w-9 h-9 rounded-full hover:bg-lime-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="dark" aria-expanded="false">
                            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="relative">
                        <Link href="https://github.com/little3201" target="_blank" className="w-9 h-9 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-lime-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="search" type="button" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center xl:hidden">
                    <button className="py-2 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
                        <Bars3Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </header >
    )
}