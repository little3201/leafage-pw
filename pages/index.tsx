import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
      </Head>
      <section className='text-xl'>
        <p>Hello, I&apos;m Shu. I&apos;m a software enginer and a translator
          (Chinese/China). You can contact me on Twitter.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className='text-xl pt-px'>
        <h2 className='text-2xl my-4 mx-0'>Blog</h2>
        <ul className='list-none p-0 m-0'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mt-0 mr-0 mb-5' key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className='text-base'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}