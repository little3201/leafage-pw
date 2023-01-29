import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Image from "next/legacy/image";


const About = () => {
  const title = `About${CMS_NAME}`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <div className="relative flex items-center justify-center">
          <div className="px-5 py-24">
            <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200" data-aos="fade-up" data-aos-duration="1200">
              <Image src="https://cdn.leafage.top/avatar.jpg" alt="about author" width={240} height={240} />
            </div>
            <div className="text-center">
              <h5 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className="text-xl text-neutral-600 font-semibold">Hello, I&apos;m <span className='text-green-600'>WQ Li</span></h5>
              <h2 className="text-5xl font-bold my-3 text-green-600" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                A Program Developer
              </h2>
              <p className=" max-w-xl mb-8 text-lg text-neutral-500 break-words" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">I&apos;m a Java Developer based In China, over 6 years of
                professional experience. And Front-end like React、Vue experience. And learning the Rust language.</p>
              <ul className='flex items-center justify-center divide-x text-2xl text-neutral-500'>
                <li className='px-4'>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li className='px-4'>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </li>
                <li className='px-4'>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li className='px-4'>
                  <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </li>
                <li className='px-4'>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </Layout>
  )
}

export default About
