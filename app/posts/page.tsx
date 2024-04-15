import { Suspense } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/api'

import TagList from '@/components/tag-list'
import Tag from '@/components/tag'
import Pagination from '@/components/pagination'

export default async function Page() {
    const posts = await getAllPosts()

    const pagination = {totalPages: 3, page: 1}
    return (
        <Suspense>
            <div className='flex space-x-24'>
                <TagList tags={posts[0].tags} />
                <div>
                    <ul>
                        {posts.map((post) =>
                            <li key={`/posts/${post.id}`} className="py-5">
                                <article className="flex flex-col space-y-2 xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={post.date}>{post.date}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-3">
                                        <div>
                                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link href={`/posts/${post.id}`} className="text-gray-900 dark:text-gray-100">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <div className="flex flex-wrap">
                                                {post.tags.map((tag) => <Tag key={tag} text={tag} />)}
                                            </div>
                                        </div>
                                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                            {post.excerpt}
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )}
                    </ul>
                    {pagination && pagination.totalPages > 1 && (
                        <Pagination page={pagination.page} totalPages={pagination.totalPages} />
                    )}
                </div>
            </div>
        </Suspense>
    )
}