import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostTitle from '../../components/post-title'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Post from '../../types/post'

import 'highlight.js/styles/atom-one-dark.css'

type Props = {
  post: Post
  renderedHtml: string
}

const Post = ({ post, renderedHtml }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 py-16 sm:py-28 lg:py-32">
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
              <PostBody content={renderedHtml} />
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
  const post: Post = await getPostBySlug(params.slug)
  const renderedHtml: string = await markdownToHtml(post.context || '')

  return {
    props: {
      post: post,
      renderedHtml: renderedHtml
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post: Post) => {
      return {
        params: {
          slug: post.id + '',
        },
      }
    }),
    fallback: false,
  }
}
