'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import tagData from '@/app/lib/data.json'


export default function TagList({ tags }: { tags: string[] }) {
    const pathname = usePathname()

    const tagCounts = tagData as Record<string, number>

    return (
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded pt-5 shadow-lg dark:bg-neutral-900/70 dark:shadow-neutral-800/40 sm:flex">
            <div className="px-6 py-4">
                {pathname.startsWith('/posts') ? (
                    <h3 className="font-bold uppercase text-primary-500">All Posts</h3>
                ) : (
                    <Link
                        href={`/posts`}
                        className="font-bold uppercase text-neutral-700 hover:text-primary-500 dark:text-neutral-300 dark:hover:text-primary-500"
                    >
                        All Posts
                    </Link>
                )}
                <ul>
                    {tags.map((t) => {
                        return (
                            <li key={t} className="my-3">
                                {pathname.split('/tags/')[1] === t ? (
                                    <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                                        {`${t} (${tagCounts[t]})`}
                                    </h3>
                                ) : (
                                    <Link
                                        href={`/tags/${t}`}
                                        className="px-3 py-2 text-sm font-medium uppercase text-neutral-500 hover:text-primary-500 dark:text-neutral-300 dark:hover:text-primary-500"
                                        aria-label={`View posts tagged ${t}`}
                                    >
                                        {`${t} (${tagCounts[t]})`}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>)
}