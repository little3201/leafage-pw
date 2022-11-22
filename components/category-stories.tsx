import Link from 'next/link'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Avatar from './avatar'
import Post from '../types/post'

type Props = {
    posts: Post[]
}

const CategoryStories = ({ posts }: Props) => {
    return (<div className="mb-12">
        <div className="flex items-center relative mb-12">
            <div className="">
                <span className="capitalize text-black text-opacity-60 italic font-serif">In category</span>
                <h4 className="text-4xl font-bold font-serif">{posts[0].category.name}</h4>
            </div>
            <div className="flex-1">
                <p className="text-sm max-w-md text-neutral-400 font-serif ml-16 pl-6 border-l-4 border-green-700 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</p>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="grid grid-cols-12 gap-8 w-full">
                <div className="col-span-5">
                    <article className="relative pb-10">
                        <div className="relative shadow-sm hover:shadow-lg transition-shadow duration-200" style={{ height: 678 }}>
                            <CoverImage slug={posts[0].code} title={posts[0].title} src={posts[0].cover} />
                        </div>
                        <div className="absolute left-0 bottom-0 px-6 py-8 bg-neutral-900 mr-6">
                            <Link href="/category">
                                <a className="absolute bottom-full left-8 px-4 py-2 inline-block uppercase text-xs bg-green-700 text-white translate-y-1/2" >{posts[0].category.name}</a>
                            </Link>
                            <h3 className="text-white text-xl hover:text-green-600 transition-colors duration-200">
                                <Link as={`/posts/${posts[0].code}`} href="/posts/[slug]">
                                    <a>{posts[0].title}</a>
                                </Link>
                            </h3>
                            <div className=" text-right text-neutral-200 mt-6">
                                <Link as={`/posts/${posts[0].code}`} href="/posts/[slug]">
                                    <a className="pb-1 border-b-2 border-green-600 font-serif">
                                        <span className="text-xs text-green-600">View More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-span-7">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="col-md-6 col-sm-6 small-post-vertical mt-16">
                            <article className="relative">
                                <div className="w-full relative shadow-sm hover:shadow-lg transition-shadow duration-200" style={{ height: 420 }}>
                                    <CoverImage slug={posts[1].code} title={posts[1].title} src={posts[1].cover} />
                                    <Link href="/category">
                                        <a className="absolute top-5 left-5 px-4 py-2 inline-block uppercase text-xs text-white bg-green-700">{posts[1].category.name}</a>
                                    </Link>
                                </div>
                                <div className="-mt-5 pl-5">
                                    <div className="relative top-0 left-0 mb-4">
                                        <div className="mr-3 font-bold text-xs">
                                            <Link href="/about">
                                                <a className="block w-10 h-10 mb-4 rounded-full overflow-hidden">
                                                    <Avatar name={posts[1].title} picture="/assets/avatar.jpg" />
                                                </a>
                                            </Link>
                                            <div className="whitespace-nowrap">
                                                <Link href="/about">
                                                    <a className="block mb-1" rel="author">WQ Li</a>
                                                </Link>
                                                <DateFormatter dateString={posts[1].modifyTime} />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl hover:text-green-600 transition-colors duration-200">
                                        <Link as={`/posts/${posts[1].code}`} href="/posts/[slug]">
                                            <a>{posts[1].title}</a>
                                        </Link>
                                    </h3>
                                    <div className=" text-neutral-200 mt-4">
                                        <Link as={`/posts/${posts[1].code}`} href="/posts/[slug]">
                                            <a className="pb-1 border-b-2 border-green-600 font-serif">
                                                <span className="text-xs text-green-600">View More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-md-6 col-sm-6 small-post-vertical mt-9">
                            <article className="relative">
                                <div className="pb-9 px-3 text-center">
                                    <a className="px-4 py-2 font-medium uppercase text-xs text-green-700">{posts[2].category.name}</a>
                                    <h3 className="text-xl my-4 hover:text-green-600 transition-colors duration-200">
                                        <Link as={`/posts/${posts[2].code}`} href="/posts/[slug]">
                                            <a>{posts[2].title}</a>
                                        </Link>
                                    </h3>
                                    <div className="w-full">
                                        <span className="text-xs text-neutral-400 ">By
                                            <Link href="/about">
                                                <a className="uppercase ml-2" rel="author">WQ Li</a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full relative shadow-sm hover:shadow-lg transition-shadow duration-200" style={{ height: 420 }}>
                                    <CoverImage slug={posts[2].code} title={posts[2].title} src={posts[2].cover} />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CategoryStories