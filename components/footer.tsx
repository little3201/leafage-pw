import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-neutral-50 pt-4">
      <Container>
        <div className="py-10 grid grid-cols-7 gap-4">
          <div className='col-span-3 md:col-span-4'>
            <div className='mb-5'>
              <Link href="/" className='text-4xl font-semibold text-green-600'>
                Leafage
              </Link>
            </div>
            <nav>
              <ul className='block opacity-80 text-sm'>
                <li className='inline-block'>
                  <Link href="/" className='hover:text-green-600 transition-colors duration-200'>Home</Link>
                </li>
                <li className='inline-block px-6'><Link
                  href="/doc"
                  className='hover:text-green-600 transition-colors duration-200'>Document</Link></li>
                <li className='inline-block'><Link
                  href="/project"
                  className='hover:text-green-600 transition-colors duration-200'>Projects</Link></li>
              </ul>
            </nav>
          </div>
          <div className='col-span-4 md:col-span-3 relative'>
            <div className='leading-10 absolute right-0'>
              <h3 className='opacity-70 text-sm my-2'>Get the freshest Leafage news</h3>
              <form className='relative flex max-w-xl'>
                <input name='email' type="email" className='border outline-none w-2/3 px-4' placeholder="Your email address" required autoComplete='false' />
                <button type='submit' className='border outline-none hover:border-green-600 text-green-600 px-4 transition-colors duration-200'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

      </Container>
      <div className="text-xs font-light bg-black text-white text-opacity-70">
        <Container>
          <div className='h-14 flex items-center justify-between'>
            <span className="">
              Leafage &copy; {new Date().getFullYear()} Made with by WQ Li.
            </span>
            <a
              href="https://beian.miit.gov.cn"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline hover:text-green-600"
            > 陕ICP备19017836号-2</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer
