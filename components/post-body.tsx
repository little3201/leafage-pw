export default function PostBody({ content }: { content: string }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden py-8 lg:py-16">
            <div className="w-full grow rounded md:shadow-lg dark:shadow-neutral-500 max-w-4xl p-2 md:py-16">
                <div
                    className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    )
}