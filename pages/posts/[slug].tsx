import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import PostContent from '../../types/postContent'

import 'highlight.js/styles/atom-one-dark.css'

type Props = {
  post: PostContent
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.code) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.cover} />
              </Head>
              <PostHeader
                title={post.title}
                date={post.modifyTime}
                author={post.author}
              />
              <PostBody content={post.content.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post: PostContent = await getPostBySlug(params.slug)
  const content: string = await markdownToHtml(post.content.content || '')

  return {
    props: {
      post: {
        ...post,
        content: {
          content: content,
          catalog: ''
        },
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post: PostContent) => {
      return {
        params: {
          slug: post.code,
        },
      }
    }),
    fallback: false,
  }
}
