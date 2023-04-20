import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

import 'highlight.js/styles/atom-one-dark.css'

type Props = {
    docNames: string[]
    children: React.ReactNode
}

const DocAside = ({ docNames, children }: Props) => {
    const title = `Document${CMS_NAME}`
    const router = useRouter()
    const path = router.asPath.substring(6, router.asPath.length)
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className='flex flex-row my-10 py-16 sm:py-28 lg:py-32'>
                    <aside className='w-64 pr-8'>
                        <ul>
                            {docNames.map(name => (
                                <Link href={`/docs/${name}`} key={name} >
                                    <li className={cn('my-2 text-sm xl:text-base font-normal text-neutral-900 rounded-full hover:bg-neutral-100 dark:text-neutral-300 py-2 px-4 xl:px-5 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 cursor-pointer', 
                                    { 'bg-green-50': path == name })} >
                                        {name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </aside>
                    <div className='w-full mx-auto pl-12 border-l'>
                        {children}
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default DocAside