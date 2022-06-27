type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
      <div
        className='mx-auto prose prose-green lg:prose-lg'
        dangerouslySetInnerHTML={{ __html: content }}
      />
  )
}

export default PostBody
