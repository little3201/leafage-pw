import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  category: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  category,
  author,
  slug,
}: Props) => {
  return (
    <article className="relative">
      <div className="w-full relative shadow-sm hover:shadow-lg transition-shadow duration-200" style={{ height: 540 }}>
        <CoverImage slug={slug} title={title} src={coverImage} />
        <Link href="/category">
          <a className="absolute top-5 left-5 px-4 py-2 inline-block uppercase text-xs text-white bg-green-700">{category}</a>
        </Link>
      </div>
      <div className="-mt-5 pl-5">
        <div className="relative top-0 left-0 mb-4">
          <div className="mr-3 font-bold text-xs">
            <Link href="/about">
              <a className="block w-10 h-10 mb-4 rounded-full overflow-hidden" >
                <Avatar name={title} picture="/assets/avatar.jpg" />
              </a>
            </Link>
            <div className="whitespace-nowrap">
              <Link href="/about">
                <a className="block mb-1" rel="author">WQ Li</a>
              </Link>
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
        <h3 className="text-xl hover:text-green-600 transition-colors duration-200">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
        <div className=" text-neutral-200 mt-4">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="pb-1 border-b-2 border-green-600 font-serif">
              <span className="text-xs text-green-600">View More</span>
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostPreview
