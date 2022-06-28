import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto p-5 flex justify-between items-center space-x-4 xl:space-x-8">
      <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
        <Link href="/">
          <a className='text-3xl font-semibold text-green-600'>Leafage</a>
        </Link>
        <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
          <li>
            <Link href="/" aria-current="page">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-green-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 bg-green-50 dark:bg-neutral-800" rel="noopener noreferrer" id="headlessui-popover-button-1" aria-expanded="false">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200" rel="noopener noreferrer" id="headlessui-popover-button-3" aria-expanded="false">
                All Posts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200" rel="noopener noreferrer" id="headlessui-popover-button-5" aria-expanded="false">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ncmaz#">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200" rel="noopener noreferrer" id="headlessui-popover-button-7" aria-expanded="false" >
                Templates
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ncmaz#">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200" rel="noopener noreferrer" id="headlessui-popover-button-9" aria-expanded="false">Other pages
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
        <div className="hidden items-center xl:flex space-x-1">
          <button className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
            <span className="sr-only">Enable dark mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          <div className="relative">
            <button className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center" id="headlessui-popover-button-11" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>
          <div className="px-1">
          </div>
          <Link href="/ncmaz/login">
            <a className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-6 disabled:bg-opacity-70 bg-green-600 hover:bg-green-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 dark:focus:ring-offset-0 " rel="noopener noreferrer">Sign up</a>
          </Link>
        </div>
        <div className="flex items-center xl:hidden">
          <button className="py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
