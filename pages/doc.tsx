import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


const Doc = () => {
    const title = `Document${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className='flex items-center divide-x-2 my-10'>
                    <aside className='w-64 pr-8'>
                        <ul>
                            <li className='my-2 text-sm xl:text-base font-normal text-neutral-900 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-md bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'>Cagegories</li>
                            <li className='my-2 text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-md hover:text-neutral-900 hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'>Posts</li>
                            <li className='my-2 text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-md hover:text-neutral-900 hover:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'>Tags</li>
                        </ul>
                    </aside>
                    <div className='w-full pl-12'>
                        <article className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'>
                            双方首发是否阿福爱上啊师傅师傅啊师傅爱上啊啊爱上爱上
                            双方首发是否阿福爱上啊师傅师傅啊师傅爱上啊啊爱上爱上
                            双方首发是否阿福爱上啊师傅师傅啊师傅爱上啊啊爱上爱上
                            双方首发是否阿福爱上啊师傅师傅啊师傅爱上啊啊爱上爱上
                        </article>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Doc
