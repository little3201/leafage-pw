import Tag from '@/app/ui/tag'

type Props = {
    title: string
    tags: string[]
    date: string
}

export default function PostHeader({ title, tags, date }: Props) {
    return (
        <section>
            <div className='flex flex-row justify-center space-x-2'>
                {tags.map((tag) => <Tag key={tag} text={tag} />)}
            </div>

            <h1 className="text-4xl mx-auto max-w-2xl font-semibold tracking-tight my-8 text-center lg:text-4xl lg:leading-snug">
                {title}
            </h1>
            <div className="flex items-center justify-center text-sm">
                <time
                    className="text-neutral-500 dark:text-neutral-400"
                    dateTime={date}>
                    {date}
                </time>
                <span className='text-neutral-500'> · 9 min read</span>
            </div>
        </section>)
}