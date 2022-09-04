import Link from 'next/link'
import DateFormatter from './date-formatter'
import Post from '../types/post'

type Props = {
    posts: Post[]
}

const CategoryStories = ({ posts }: Props) => {
    return (<div className="mb-12">
        <div className="flex items-center relative mb-12">
            <div className="">
                <span className="capitalize text-black text-opacity-60 italic font-serif">In category</span>
                <h4 className="text-4xl font-bold font-serif">{posts[0].category}</h4>
            </div>
            <div className="flex-1">
                <p className="text-sm max-w-md text-neutral-400 font-serif ml-16 pl-6 border-l-4 border-green-700 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</p>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-5">
                    <article className="relative pb-10">
                        <div className="relative w-full mb-0 block transition-all ease-out" style={{ height: 678 }}>
                            <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center bg-neutral-800" style={{ backgroundImage: `url(${posts[0].cover})` }}></div>
                            <Link as={`/posts/${posts[0].code}`} href="/posts/[slug]">
                                <a className="absolute inset-0"></a>
                            </Link>
                        </div>
                        <div className="absolute left-0 bottom-0 px-6 py-8 bg-neutral-900 mr-6">
                            <Link href="/category">
                                <a className="absolute bottom-full left-8 px-4 py-2 inline-block uppercase text-xs bg-green-700 text-white translate-y-1/2" >{posts[0].category}</a>
                            </Link>
                            <h3 className="text-white text-xl hover:text-green-600">
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
                                <div className="w-full relative" style={{ height: 420 }}>
                                    <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${posts[1].cover})` }}></div>
                                    <a className="absolute top-5 left-5 px-4 py-2 inline-block uppercase text-xs text-white bg-green-700" href="/logen/tag/health/">{posts[1].category}</a>
                                    <Link as={`/posts/${posts[1].code}`} href="/posts/[slug]">
                                        <a className="absolute inset-0"></a>
                                    </Link>
                                </div>
                                <div className="-mt-5 pl-5">
                                    <div className="relative top-0 left-0 mb-4">
                                        <div className="mr-3 font-bold text-xs">
                                            <a className="block w-10 h-10 mb-4 rounded-full overflow-hidden" href="/logen/author/dannyings/">
                                                <img src="https://secure.gravatar.com/avatar/a85fbe13ad8e5648f5e462665915c9ab?s=512&amp;d=mm&amp;r=g"
                                                    className="w-full h-auto align-middle" data-pagespeed-url-hash="2454222443" />
                                            </a>
                                            <div className="whitespace-nowrap">
                                                <a className="block mb-1" rel="author" href="/logen/author/dannyings/">Danny Ings</a>
                                                <DateFormatter dateString={posts[1].modifyTime} />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl hover:text-green-600">
                                        <a>{posts[1].title}</a>
                                    </h3>
                                    <div className=" text-neutral-200 mt-4">
                                        <Link as={`/posts/${posts[0].code}`} href="/posts/[slug]">
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
                                <div className=" pb-9 px-3">
                                    <a className="px-4 py-2 inline-block uppercase text-xs text-center" href="/logen/tag/fashion/">Fashion</a>
                                    <h3 className="post__title">
                                        <a href="/logen/you-will-become-as-small-as-your-controlling-desire/">You Will Become as Small as Your Controlling Desire</a>
                                    </h3>
                                    <div className="post-meta">
                                        <span className="entry-author">By
                                            <a className="entry-author__name" rel="author" href="/logen/author/isabella/">Ava Isabella</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${posts[2].cover})` }}></div>
                                    <a className="link-overlay" href="/logen/you-will-become-as-small-as-your-controlling-desire/"></a>
                                </div>
                                <div className="post__text text-center hidden-lg hidden-md hidden-sm">
                                    <a className="post__cat cat-theme-bg" href="/logen/tag/fashion/">Fashion</a>
                                    <h3 className="post__title">
                                        <a href="/logen/you-will-become-as-small-as-your-controlling-desire/">You Will Become as Small as Your Controlling Desire</a>
                                    </h3>
                                    <div className="post-meta">
                                        <span className="entry-author">By
                                            <a className="entry-author__name" rel="author" href="/logen/author/isabella/">Ava Isabella</a>
                                        </span>
                                    </div>
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