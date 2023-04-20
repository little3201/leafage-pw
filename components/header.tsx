import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { Item } from '../types/item'

import { SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const items: Item[] = [
    { title: 'Home', path: '/' },
    { title: 'Posts', path: '/posts' },
    { title: 'Open sources', path: '/open-sources' },
    { title: 'Docs', path: '/docs' },
    { title: 'About', path: '/about' }
  ]

  const router = useRouter()
  return (
    <header className="absolute inset-x-0 top-0 z-50 container mx-auto p-5 flex justify-between items-center space-x-4 xl:space-x-8">
      <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
        <Link href="/" >
          <Image
            src="/assets/logo-only.svg"
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
          {items.map(item => (
            <Link
              href={item.path}
              className={cn('text-md xl:text-base  dark:text-neutral-300 py-2 px-4 xl:px-5 transition-transform duration-200',
                { 'font-medium': router.pathname == item.path },
                { 'font-normal text-neutral-700': router.pathname != item.path })}
              rel="noopener noreferrer"
              id="home"
              aria-expanded="false"
              key={item.title}>
              <li >
                {item.title}
              </li>
            </Link>))}
        </ul>
      </div>
      <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
        <div className="hidden items-center xl:flex space-x-1">
          <button className="w-12 h-12 rounded-full hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200">
            <span className="sr-only">Enable dark mode</span>
            <SunIcon className="h-7 w-7 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
          </button>
          <div className="relative">
            <button className="w-12 h-12 rounded-full hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="dark" type="button" aria-expanded="false">
              <MagnifyingGlassIcon className="h-7 w-7 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
            </button>
          </div>
          <div className="relative">
            <Link href="https://github.com/little3201" target="_blank" className="w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="search" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center xl:hidden">
          <button className="py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </header >
  );
}

export default Header