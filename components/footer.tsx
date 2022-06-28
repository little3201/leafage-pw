import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative py-16 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Link href="/">
                <a className='text-3xl font-semibold text-green-600'>Leafage</a>
              </Link>
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <div className="nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" data-nc-id="SocialsList1">
                <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                  <span className="hidden lg:block text-sm">Facebook</span>
                </a>
                <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                  <span className="hidden lg:block text-sm">Twitter</span>
                </a>
                <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                  <span className="hidden lg:block text-sm">Youtube</span>
                </a>
                <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                  </svg>
                  <span className="hidden lg:block text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Getting started</h2>
            <ul className="mt-5 space-y-4">
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Installation</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Release Notes</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Upgrade Guide</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Browser Support</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Editor Support</a></li>
            </ul>
          </div>
          <div className="text-sm"><h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Explore</h2>
            <ul className="mt-5 space-y-4"><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Design features</a>
            </li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Prototyping</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Design systems</a>
              </li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Pricing</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Customers</a></li>
            </ul>
          </div>
          <div className="text-sm"><h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Resources</h2><ul className="mt-5 space-y-4">
            <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Best practices</a></li>
            <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Support</a></li>
            <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Developers</a></li>
            <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Learn design</a></li>
            <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">What's new</a></li>
          </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Community</h2>
            <ul className="mt-5 space-y-4">
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Discussion Forums</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Code of Conduct</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Community Resources</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Contributing</a></li>
              <li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Concurrent Mode</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
