import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import PostPreview from '../components/post-preview'
import { getResourceByCategory } from '../lib/api'
import ResourceType from '../types/resource'

type Props = {
    resources: ResourceType[]
}

const Resource = ({ resources }: Props) => {
    const title = `Resource${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-12 my-12">
                    {resources.map((resource) => (
                        <PostPreview
                            key={resource.code}
                            title={resource.title}
                            coverImage={resource.cover}
                            date={resource.modifyTime}
                            author={resource.author}
                            slug={resource.code}
                            category={resource.category}
                        />
                    ))}
                </div>

                <div className='text-center my-8'>
                    <button type='button' className='border border-green-600 px-6 py-2 rounded-md text-green-600 hover:bg-green-700 hover:text-white shadow-md hover:shadow-xl transition-all duration-200'>Load More</button>
                </div>
            </Container>
        </Layout>
    )
}

export default Resource

export const getStaticProps = async () => {
    const resources = await getResourceByCategory(0, 6, "20C3ID6W")
    return {
        props: { resources },
    }
}