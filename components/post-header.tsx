import Link from 'next/link'
import PostTitle from '@/components/post-title'
import type { Author } from '@/lib/type-guards'

type Props = {
    title: string
    date: string
    author: Author
}

export default function PostHeader({ title, date, author }: Props) {
    return <>
        <PostTitle>{title}</PostTitle>
        <div className='flex items-center justify-center'>
            <div className="mr-2 font-bold text-xs">
                <Link href="/about" className="w-10 h-10 rounded-full overflow-hidden">
                    <img alt={author.name} src={author.picture} />
                </Link>
            </div>

            <div className="whitespace-nowrap text-sm">
                <Link href="/about" className="block" rel="author">
                    {author.name}
                </Link>
            </div>
        </div>
    </>;
}