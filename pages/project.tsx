import Container from '../components/container'
import Layout from '../components/layout'
import FeathureProject from '../components/feature-project'
import SectionSeparator from '../components/section-separator'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Project = () => {
    const title = `Projects${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <FeathureProject/>
                <SectionSeparator/>
                <FeathureProject/>
            </Container>
        </Layout>
    );
}

export default Project
