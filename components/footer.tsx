import Container from './container'

const Footer = () => {
  return (
    <footer className="relative py-16 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <a className="ttnc-logo inline-block text-green-600" href="/ncmaz/">
                <svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.5224 9.69455C34.547 8.66632 35.1818 7.24829 35.1818 5.68181C35.1818 2.54402 32.6378 0 29.5 0C27.516 0 25.7721 1.01857 24.7559 2.55971C24.4868 2.83004 1.8706 30.7044 1.65941 31.0255C0.633591 32.0525 0 33.4705 0 35.037C0 38.1748 2.54281 40.7188 5.6806 40.7188C7.66464 40.7188 9.40853 39.7002 10.4247 38.1591C10.695 37.8888 33.3112 10.0144 33.5224 9.69455Z" fill="currentColor"></path>
                  <path d="M46.6081 22.9203C47.6363 21.8921 48.2723 20.4728 48.2723 18.904C48.2723 15.7662 45.7283 13.2221 42.5905 13.2221C40.6065 13.2221 38.8614 14.2419 37.8452 15.7831C37.5737 16.0558 25.6948 30.6972 25.4824 31.0206C24.4541 32.0489 23.8193 33.4681 23.8193 35.037C23.8193 38.1748 26.3621 40.7188 29.4999 40.7188C31.484 40.7188 33.2291 39.699 34.2452 38.1579C34.5168 37.8851 46.3957 23.2437 46.6081 22.9203Z" fill="currentColor"></path>
                  <path d="M59.0001 5.68181C59.0001 8.81959 56.4573 11.3636 53.3195 11.3636C50.1817 11.3636 47.6377 8.81959 47.6377 5.68181C47.6377 2.54402 50.1817 0 53.3195 0C56.4573 0 59.0001 2.54402 59.0001 5.68181Z" fill="currentColor"></path><path d="M11.3624 5.68181C11.3624 8.81959 8.81838 11.3636 5.6806 11.3636C2.54281 11.3636 0 8.81959 0 5.68181C0 2.54402 2.54281 0 5.6806 0C8.81838 0 11.3624 2.54402 11.3624 5.68181Z" fill="currentColor"></path></svg></a></div><div className="col-span-2 flex items-center md:col-span-3"><div className="nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" data-nc-id="SocialsList1"><a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"><i className="lab la-facebook-square"></i><span className="hidden lg:block text-sm">Facebook</span></a>
                    <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                      <i className="lab la-twitter"></i>
                      <span className="hidden lg:block text-sm">Twitter</span></a>
                    <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                      <i className="lab la-youtube"></i><span className="hidden lg:block text-sm">Youtube</span></a>
                    <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group">
                      <i className="lab la-instagram"></i><span className="hidden lg:block text-sm">Instagram</span></a></div></div></div><div className="text-sm">
            <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Getting started</h2><ul className="mt-5 space-y-4"><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Installation</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Release Notes</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Upgrade Guide</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Browser Support</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Editor Support</a></li></ul></div><div className="text-sm"><h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Explore</h2><ul className="mt-5 space-y-4"><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Design features</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Prototyping</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Design systems</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Pricing</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Customers</a></li></ul></div><div className="text-sm"><h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Resources</h2><ul className="mt-5 space-y-4"><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Best practices</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Support</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Developers</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">Learn design</a></li><li><a className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white" href="#">What's new</a></li></ul></div>
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
