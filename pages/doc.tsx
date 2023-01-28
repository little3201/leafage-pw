import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import { CMS_NAME } from '../lib/constants'
import { getAllPostIds, getPostData } from '../lib/api'
import { GetStaticProps } from 'next'

type Props = {
    postIds: Array<string>
    post: {
        title: string
        cover: string
        contentHtml: string
        modifyTime: string
        author: {
            nickname: string
            avatar: string
        }
    }
}

const Doc = ({
    postIds,
    post
}: Props) => {
    const title = `Document${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className='flex my-10'>
                    <aside className='w-64 pr-8'>
                        <ul>
                            {postIds.map((postId) => (
                                <li className='my-2 text-sm xl:text-base font-normal text-neutral-900 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full bg-green-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-200' key={postId} >{postId}</li>
                            ))}
                        </ul>
                    </aside>
                    <div className='w-full mx-auto pl-12 border-l'>
                        <article className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'>
                            <Head>
                                <title>
                                    {post.title}
                                </title>
                                <meta property="og:image" content={post.cover} />
                            </Head>
                            <PostTitle>{post.title}</PostTitle>
                            <div
                                className='mx-auto prose prose-green lg:prose-lg dark:prose-invert py-8 lg:py-12'
                                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
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
    const postIds = await getAllPostIds();
    const post = await getPostData('user-api')
    return {
        props: {
            postIds,
            post
        }
    }
}