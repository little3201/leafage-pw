import Link from 'next/link'
import Image from 'next/image'
import type { Author } from '@/lib/type-guards'
import TagList from '@/components/tab-list'

type Props = {
    title: string
    coverImage: string
    date: string
    tags: string[]
    author: Author
    slug: number
}

export default function PostList({
    title,
    coverImage,
    date,
    tags,
    author,
    slug,
}: Props) {
    return (
        <article>
            <div className="relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 h-64">
                <Image
                    src={coverImage}
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 30vw, 33vw"
                />
            </div>
            <TagList tags={tags} />
            <h3 className="text-xl hover:text-green-600 transition-colors duration-200">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    {title}
                </Link>
            </h3>
            <div className='flex items-center space-x-3 mt-4'>
                <div className="relative h-5 w-5 flex-shrink-0">
                    <Image
                        src={author.picture}
                        alt={author.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                    />
                </div>
                <p className="text-neutral-800 dark:text-neutral-400">
                    {author.name}
                </p>
                <span className="text-xs text-gray-300 dark:text-gray-600">
                    &bull;
                </span>
                <div className="flex items-center space-x-2 text-sm">
                    <time
                        className="text-neutral-500 dark:text-neutral-400"
                        dateTime={date}>
                        {date}
                    </time>
                </div>
            </div>
        </article>
    );
}
