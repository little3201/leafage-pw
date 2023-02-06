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
                                        <p className='text-sm mt-4 mx-4 opacity-75'>基于 nuxtjs 和 tailwindcss，一个博客前端代码库，持续更新</p>
                                    </div>
                                </div>
                                <Link href="https://github.com/little3201/leafage-pw" className='absolute inset-0'>
                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-ms</a>
                                        </h3>
                                        <p className='text-sm mt-4 mx-4 opacity-75'>基于 RBAC（Role-Based Access Control） 模型的管理系统实践</p>
                                    </div>
                                </div>
                                <Link href="https://github.com/little3201/leafage-ms" className='absolute inset-0'>
                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200' >
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-basic</a>
                                        </h3>
                                        <p className='text-sm mt-4 mx-4 opacity-75'>作为后台管理系统的基础，将持续完善，提供一套完整的权限管理方案</p>
                                    </div>
                                </div>
                                <Link href="https://github.com/little3201/leafage-basic" className='absolute inset-0'>
                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-gateway</a>
                                        </h3>
                                        <p className='text-sm mt-4 mx-4 opacity-75'>前后端交互的统一认证、服务入口，提供Api 认证、校验等</p>
                                    </div>
                                </div>
                                <Link href="https://github.com/little3201/leafage-gateway" className='absolute inset-0'>
                                </Link>
                            </li>
                            <li className='relative overflow-hidden rounded-3xl h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200'>
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>leafage-auth</a>
                                        </h3>
                                        <p className='text-sm mt-4 mx-4 opacity-75'>认证服务，提供 Oauth2、统一的账号管理和授权</p>
                                    </div>
                                </div>
                                <Link href="https://github.com/little3201/leafage-auth" className='absolute inset-0'>
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
