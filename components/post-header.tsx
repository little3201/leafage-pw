import Image from 'next/image'
import type { Author } from '@/lib/type-guards'

import TagList from '@/components/tab-list'

type Props = {
    title: string
    tags: string[]
    date: string
    author: Author
}

export default function PostHeader({ title, tags, date, author }: Props) {
    return (
        <section>
            <TagList tags={tags} />

            <h1 className="text-4xl mx-auto max-w-2xl font-semibold tracking-tight my-8 text-center lg:text-4xl lg:leading-snug">
                {title}
            </h1>
            <div className='flex items-center justify-center space-x-3'>
                <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                        src={author.picture}
                        alt={author.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="40px"
                    />
                </div>
                <div>
                    <p className="text-neutral-800 dark:text-neutral-400">
                        {author.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                        <time
                            className="text-neutral-500 dark:text-neutral-400"
                            dateTime={date}>
                            {date}
                        </time>
                        <span className='text-neutral-500'>· 9 min read</span>
                    </div>
                </div>
            </div>
        </section>)
}