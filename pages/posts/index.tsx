import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import { getPostsByPage } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../types/post'
import CategoryStories from '../../components/category-stories'
import HotNews from '../../components/hot-news'

type Props = {
  posts: Post[]
}

const Index = ({ posts }: Props) => {
  const title = `Posts${CMS_NAME}`
  posts.sort((a, b) => a.modifyTime < b.modifyTime ? 1 : -1)
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
        <div className='py-16 sm:py-28 lg:py-32'>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              cover={heroPost.cover}
              date={heroPost.modifyTime}
              author={heroPost.author}
              slug={heroPost.id}
              category={heroPost.category}
            />
          )}
          {categoryPosts.length > 0 && <CategoryStories posts={categoryPosts} />}
          {hotNews.length > 0 && <HotNews posts={hotNews} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </Layout>
  )
}

export default Index

export const getServerSideProps = async () => {
  const posts = await getPostsByPage(0, 15)

  return {
    props: { posts },
  }
}
