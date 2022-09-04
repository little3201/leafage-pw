import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-700">
      <Container>
        <div className="py-12 flex flex-wrap justify-between">
          <div className='max-w-sm'>
            <Link href="/">
              <a className='text-3xl font-semibold text-green-600'>Leafage</a>
            </Link>
            <p className='my-4 font-light leading-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
          <div className='mx-2'>
            <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">Important Link</h3>
            <ul className="mt-5 space-y-4">
              <li><a className="text-neutral-600 dark:text-neutral-300 hover:text-green-600" href="#">News</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 hover:text-green-600" href="#">Career</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 hover:text-green-600" href="#">Technology</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 hover:text-green-600" href="#">Startups</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 hover:text-green-600" href="#">Gadgets</a></li>
            </ul>
          </div>
          <div className='mx-2 max-w-md'>
            <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">Browse by Tag</h3>
            <ul className="mt-5 flex flex-wrap">
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Travel</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Business</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Lifestyle</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Sports</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Foods</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Spring</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300 block mb-2 mr-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md" href="#">Java</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">Social Media</h3>
            <ul className="mt-5 space-y-4">
              <li><a className="text-neutral-600 dark:text-neutral-300" href="#">Facebook</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300" href="#">Twitter</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300" href="#">Instagrm</a></li>
              <li><a className="text-neutral-600 dark:text-neutral-300" href="#">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-center ">
          <p className="border-t border-neutral-200 dark:border-neutral-700 pt-4 pb-2">
            Copyright &copy; {new Date().getFullYear()} leafage.top All Rights Reserved.
          </p>
          <a
            href="https://beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline hover:text-green-600 pb-3"
          > 陕ICP备19017836号-2</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
