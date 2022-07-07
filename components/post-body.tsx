type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">

      <div className="relative w-full lg:px-6 py-12 bg-white dark:bg-neutral-800 lg:shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div
          className='mx-auto prose prose-green lg:prose-lg dark:prose-invert'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default PostBody
