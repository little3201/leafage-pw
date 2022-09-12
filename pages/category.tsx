import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { getAllCategories } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Category from '../types/category'

type Props = {
    categories: Category[]
}

const Category = ({ categories }: Props) => {
    const title = `Category${CMS_NAME}`
    categories.sort((a, b) => new Date(a.modifyTime).getTime() - new Date(b.modifyTime).getTime())
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className="bg-white">
                    <div className="mx-auto py-8">
                        <h2 className="sr-only">Categories</h2>
                        <ul className="grid grid-cols-4 gap-6">
                            {categories.map((category) => (
                                <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200' key={category.code}>
                                    <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                        <div className='text-white text-center'>
                                            <h3 className="text-2xl">
                                                <a>{category.name}</a>
                                            </h3>
                                            <p>{category.count}<span className='ml-2'>Posts</span></p>
                                        </div>
                                    </div>
                                    <Link href="/posts">
                                        <a className='absolute inset-0'></a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Category

export const getStaticProps = async () => {
    const categories = await getAllCategories()

    return {
        props: { categories },
    }
}
