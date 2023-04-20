import DocAside from '../../components/doc-aside'
import Head from 'next/head'
import PostTitle from '../../components/post-title'
import { getAllDocNames, getDocData } from '../../lib/api'
import { GetStaticProps } from 'next'
import { Document } from '../../types/doc'

import 'highlight.js/styles/atom-one-dark.css'

type Props = {
    docNames: string[]
    doc: Document
}

const Doc = ({ docNames, doc }: Props) => {
    return (
        <DocAside docNames={docNames}>
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
        </DocAside>
    )
}

export default Doc


type Params = {
    params: {
        slug: string
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const docNames = await getAllDocNames();
    const doc = await getDocData(params.slug as string)
    return {
        props: {
            docNames,
            doc
        }
    }
}


export async function getStaticPaths() {
    const docNames = await getAllDocNames();

    return {
        paths: docNames.map((name: string) => {
            return {
                params: {
                    slug: name,
                },
            }
        }),
        fallback: false,
    }
}
