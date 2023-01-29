import Link from 'next/link'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Post from '../types/post'

type Props = {
    posts: Post[]
}

const HotNews = ({ posts }: Props) => {
    return (
        <div className="mb-12">
            <div className="flex items-center relative mb-12">
                <div className="">
                    <span className="capitalize text-black text-opacity-60 italic font-serif">Editor WQ Li&apos;s</span>
                    <h4 className="text-4xl font-bold font-serif">Hot Posts</h4>
                </div>
                <div className="flex-1">
                    <p className="text-sm max-w-md text-neutral-400 font-serif ml-16 pl-6 border-l-4 border-green-700 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</p>
                </div>
            </div>
            <div className="relative">
                <article className="flex flex-row">
                    <div className="relative mr-14 shadow-sm hover:shadow-lg transition-shadow duration-200" style={{ height: '32rem', width: `calc(50vw + 14rem)` }}>
                        <CoverImage slug={posts[0].code} title={posts[0].title} src={posts[0].cover} />
                    </div>
                    <div className="max-w-xs">
                        <a className="pb-9 font-medium uppercase text-xs text-green-700">{posts[0].category.name}</a>
                        <h3 className="text-xl my-4 hover:text-green-600 transition-colors duration-200">
                            <Link as={`/posts/${posts[0].code}`} href="/posts/[slug]">
                                {posts[0].title}
                            </Link>
                        </h3>
                        <DateFormatter dateString={posts[1].modifyTime} />
                    </div>
                </article>
                <div className="absolute bg-white bottom-0 right-0 p-8 shadow-md" style={{ width: 600 }}>
                    <ul className="w-full list-none">
                        {posts.slice(1, 5).map((post) => (
                            <li className="w-1/2 px-4 inline-block my-2" key={post.code}>
                                <article className="flex items-center justify-start">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-sm hover:shadow-lg transition-shadow duration-200">
                                        <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center">
                                            <CoverImage slug={post.code} title={post.title} src={post.cover} />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="/category"
                                            className="pb-2 font-medium uppercase text-xs text-green-700">
                                            {post.category.name}
                                        </Link>
                                        <h3 className="text-sm hover:text-green-600 transition-colors duration-200">
                                            <Link as={`/posts/${post.code}`} href="/posts/[slug]">
                                                {post.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default HotNews