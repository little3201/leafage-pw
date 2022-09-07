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
    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //       <a className="hover:underline hover:text-green-600">{title}</a>
    //     </Link>
    //   </h3>
    //   <div className="text-lg mb-4">
    //     <DateFormatter dateString={date} />
    //   </div>
    //   <p className="text-lg leading-relaxed mb-4">{category}</p>
    //   {/* <Avatar name={author.nickname} picture={author.avatar} /> */}
    // </div>
    <article className="relative">
      <div className="w-full relative" style={{ height: 240 }}>
        <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${coverImage})` }}></div>
        <a className="absolute top-5 left-5 px-4 py-2 inline-block uppercase text-xs text-white bg-green-700" href="/logen/tag/health/">{category}</a>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="absolute inset-0"></a>
        </Link>
      </div>
      <div className="-mt-5 pl-5">
        <div className="relative top-0 left-0 mb-4">
          <div className="mr-3 font-bold text-xs">
            <a className="block w-10 h-10 mb-4 rounded-full overflow-hidden" href="/logen/author/dannyings/">
              <img src="https://secure.gravatar.com/avatar/a85fbe13ad8e5648f5e462665915c9ab?s=512&amp;d=mm&amp;r=g"
                className="w-full h-auto align-middle" data-pagespeed-url-hash="2454222443" />
            </a>
            <div className="whitespace-nowrap">
              <a className="block mb-1" rel="author" href="/logen/author/dannyings/">Danny Ings</a>
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
        <h3 className="text-xl hover:text-green-600">
          <a>{title}</a>
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
