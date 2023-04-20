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

export const getStaticProps: GetStaticProps = async () => {
    const docNames = await getAllDocNames();
    const doc = await getDocData(docNames[0])
    return {
        props: {
            docNames,
            doc
        }
    }
}
  