// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  
  return [{
    slug: '1',
  }]
}

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <article className="flex min-h-screen flex-col items-center justify-center overflow-hidden py-8 lg:py-16">
      <div className="w-full grow rounded bg-white md:shadow-2xl dark:bg-neutral-900 dark:shadow-neutral-500 max-w-4xl p-2 md:py-16">
        <div
          className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'
          dangerouslySetInnerHTML={{ __html: 'xxxx内容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试容测试' }}
        />
      </div>
    </article>
  )
}