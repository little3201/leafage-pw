import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Hero from '../components/hero'
import Feathure from '../components/feature'
import State from '../components/state'

const Index = () => {
  const title = `Home${CMS_NAME}`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Hero/>
        <Feathure/>
        <State/>
      </Container>
    </Layout>
  )
}

export default Index