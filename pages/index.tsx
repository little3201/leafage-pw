import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getPostsByPage } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import CategoryStories from '../components/category-stories'
import HotNews from '../components/hot-news'

type Props = {
  posts: Post[]
}

const Index = ({ posts }: Props) => {
  const title = `Home${CMS_NAME}`
  posts.sort((a, b) => new Date(a.modifyTime).getTime() - new Date(b.modifyTime).getTime())
  const heroPost = posts[0]
  const categoryPosts = posts.slice(1, 4)
  const hotNews = posts.slice(4, 9)
  const morePosts = posts.slice(9)
  return (
    <Layout>
      <Head>
        <title>{title}</title>
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
        {hotNews.length > 0 && <HotNews posts={hotNews} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <div className='text-center my-8'>
          <button type='button' className='border border-green-600 px-6 py-2 rounded-md text-green-600 hover:bg-green-700 hover:text-white shadow-md hover:shadow-xl transition-all duration-200'>Load More</button>
        </div>
      </Container>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts = await getPostsByPage(0, 15)

  return {
    props: { posts },
  }
}
