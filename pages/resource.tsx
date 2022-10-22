import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


const Resource = () => {
    const title = `Resource${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div>Tags</div>
            </Container>
        </Layout>
    )
}

export default Resource
