import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import CategoryStories from '../components/category-stories'

type Props = {
  posts: Post[]
}

const Index = ({ posts }: Props) => {
  const heroPost = posts[0]
  const categoryPosts = posts.slice(1, 4)
  const morePosts = posts.slice(5)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} Blogs</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              cover={heroPost.cover}
              date={heroPost.modifyTime}
              author={heroPost.author}
              slug={heroPost.code}
              category={heroPost.category}
            />
          )}
          {categoryPosts.length > 0 && <CategoryStories posts={categoryPosts} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}
