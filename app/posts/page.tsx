import { Suspense } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/app/lib/api'

import TagList from '@/app/ui/tag-list'
import Tag from '@/app/ui/tag'
import Pagination from '@/app/ui/pagination'

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
                                        <dd className="text-base font-medium leading-6 text-neutral-500 dark:text-neutral-400">
                                            <time dateTime={post.date}>{post.date}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-3">
                                        <div>
                                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link href={`/posts/${post.id}`} className="text-neutral-900 dark:text-neutral-100">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <div className="flex flex-wrap space-x-2">
                                                {post.tags.map((tag) => <Tag key={tag} text={tag} />)}
                                            </div>
                                        </div>
                                        <div className="prose max-w-none text-neutral-500 dark:text-neutral-400">
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