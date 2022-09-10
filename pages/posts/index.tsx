import Container from '../../components/container'
import PostPreview from '../../components/post-preview'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../types/post'
import Category from '../../types/category'

type Props = {
  category: Category
  posts: Post[]
}

const Index = ({ category, posts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300'>
            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h2 className="text-5xl">
                  <a>{category.name}</a>
                </h2>
                <h4 className='text-xl mt-4'>{category.description}</h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-12 my-12">
            {posts.map((post) => (
              <PostPreview
                key={post.code}
                title={post.title}
                coverImage={post.cover}
                date={post.modifyTime}
                author={post.author}
                slug={post.code}
                category={post.category}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  const category = {
    code: '232323',
    name: 'Technology',
    description: '技术学习和总结，开发中遇到的问题以及解决方法，并深入理解其原理。',
    count: 23,
    modifyTime: '2022'
  }

  return {
    props: { posts, category },
  }
}
