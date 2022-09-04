import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


const Tag = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>
                <Container>
                    <div>Tags</div>
                </Container>
            </Layout>
        </>
    )
}

export default Tag
