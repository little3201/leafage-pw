import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import { getAllDocNames, getDocData } from '../../lib/api'
import { GetStaticProps } from 'next'
import { Document} from '../../types/doc'

import 'highlight.js/styles/atom-one-dark.css'

type Props = {
    docNames: string[]
    doc: Document
}

const Doc = ({
    docNames,
    doc
}: Props) => {
    const title = `Document${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className='flex my-10 py-16 sm:py-28 lg:py-32'>
                    <aside className='w-64 pr-8'>
                        <ul>
                            {docNames.map((name) => (
                                <li className='my-2 text-sm xl:text-base font-normal text-neutral-900 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full first:bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200' key={name} >{name}</li>
                            ))}
                        </ul>
                    </aside>
                    <div className='w-full mx-auto pl-12 border-l'>
                        <article className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'>
                            <Head>
                                <title>
                                    {doc.title}
                                </title>
                                <meta property="og:image" content={doc.cover} />
                            </Head>
                            <PostTitle>{doc.title}</PostTitle>
                            <div
                                className='mx-auto prose prose-green lg:prose-lg dark:prose-invert py-8 xl:py-12'
                                dangerouslySetInnerHTML={{ __html: doc.context }}
                            />
                        </article>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Doc

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const docNames = await getAllDocNames();
    const doc = await getDocData(params?.id as string|| 'Post')
    return {
        props: {
            docNames,
            doc
        }
    }
}