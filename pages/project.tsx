import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'


const Project = () => {
    const title = `Project${CMS_NAME}`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <div className="bg-white">
                    <div className="mx-auto py-8">
                        <h2 className="sr-only">Projects</h2>
                        <ul className="grid grid-cols-4 gap-6">
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-pw</a>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/" className='absolute inset-0'>

                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-ms</a>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/" className='absolute inset-0'>

                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200' >
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-basic</a>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/" className='absolute inset-0'>

                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-gateway</a>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/" className='absolute inset-0'>

                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-auth</a>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/" className='absolute inset-0'>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default Project
