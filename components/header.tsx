import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto p-5 flex justify-between items-center space-x-4 xl:space-x-8">
      <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
        <Link href="/">
          <a className='text-4xl font-semibold text-green-600'>Leafage</a>
        </Link>
        <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
          <li>
            <Link href="/" aria-current="page">
              <a className="text-sm xl:text-base font-normal text-neutral-900 dark:text-green-300 py-2 px-4 xl:px-5 rounded-full bg-green-50 dark:bg-neutral-800 transition-colors duration-200" rel="noopener noreferrer" id="headlessui-popover-button-1" aria-expanded="false">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category">
              <a className="text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200" rel="noopener noreferrer" id="headlessui-popover-button-5" aria-expanded="false">
                Categories
              </a>
            </Link>
          </li>
          <li>
            <Link href="/resource">
              <a className="text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200" rel="noopener noreferrer" id="headlessui-popover-button-7" aria-expanded="false" >
                Resources
              </a>
            </Link>
          </li>
          <li className='group relative'>
            <span className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full group-hover:text-neutral-900 group-hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200">
              Projects
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
            <div className='hidden group-hover:block absolute z-10 -ml-4 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 mt-3 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <Link href="/project">
                    <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-green-50 transition-colors duration-200">
                      <div>
                        <p className="text-base font-medium text-gray-900">leafage-pw</p>
                        <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/project">
                    <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-green-50 transition-colors duration-200">
                      <div>
                        <p className="text-base font-medium text-gray-900">leafage-ms</p>
                        <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/project">
                    <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-green-50 transition-colors duration-200">
                      <div>
                        <p className="text-base font-medium text-gray-900">leafage-basic</p>
                        <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/about">
              <a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200" rel="noopener noreferrer" id="headlessui-popover-button-5" aria-expanded="false">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
        <div className="hidden items-center xl:flex space-x-1">
          <button className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200">
            <span className="sr-only">Enable dark mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          <div className="relative">
            <button className="w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="dark" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200" id="search" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </button>
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
  )
}

export default Header
