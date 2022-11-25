import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import { getAllCategories, getPostsByCategory } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Category from '../types/category'
import Post from '../types/post'

type Props = {
    categories: Category[]
    posts: Post[]
}

let isChecked = true

const Category = ({ categories, posts }: Props) => {
    const title = `Category${CMS_NAME}`
    categories.sort((a, b) => new Date(a.modifyTime).getTime() - new Date(b.modifyTime).getTime())

    const setChecked = () => {
        isChecked = !isChecked
    }
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className="mx-auto py-8">
                    <h2 className="sr-only">Categories</h2>
                    {isChecked ? <button type='button' onClick={setChecked} className='rounded-3xl w-full h-40 bg-gradient-to-r from-green-300 to-lime-300'>
                        <div className='w-full h-full rounded-3xl bg-black bg-opacity-40 flex items-center justify-center'>
                            <div className='text-white text-center'>
                                <h2 className="text-5xl">
                                    <a>Technology</a>
                                </h2>
                                <h4 className='text-xl mt-4'>技术学习和总结，开发中遇到的问题以及解决方法，并深入理解其原理。</h4>
                            </div>
                        </div>
                    </button> : <div className="flex items-center max-w-full overflow-x-scroll space-x-6">
                        {categories.map((category) => (
                            <button type='button' className='flex-shrink-0 rounded-3xl w-64 h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200' key={category.code} >
                                <div className='w-full h-full bg-black bg-opacity-40 rounded-3xl flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>{category.name}</a>
                                        </h3>
                                        <p>{category.count}<span className='ml-2'>Posts</span></p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    }
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

                <div className='text-center my-8'>
                    <button type='button' className='border border-green-600 px-6 py-2 rounded-md text-green-600 hover:bg-green-700 hover:text-white shadow-md hover:shadow-xl transition-all duration-200'>Load More</button>
                </div>
            </Container>
        </Layout >
    )
}

export default Category

export const getStaticProps = async () => {
    const categories = await getAllCategories()
    const posts = await getPostsByCategory(0, 12, "20C3ID6W")
    return {
        props: { categories, posts },
    }
}
