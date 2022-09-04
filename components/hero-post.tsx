import DateFormatter from './date-formatter'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  cover: string
  date: string
  category: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  cover,
  date,
  category,
  author,
  slug,
}: Props) => {
  return (<div className="mb-12">
    <article className="relative">
      <div className="relative ml-28" style={{ height: 600 }}>
        <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>
        </div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="absolute inset-0"></a>
        </Link>
      </div>
      <div className="absolute left-0 top-1/2 -rotate-90">
        <div className="mr-3 font-bold text-xs">
          <a className="block w-10 h-10 rounded-full overflow-hidden float-left mr-3" href="/logen/author/dannyings/">
            <img src="https://secure.gravatar.com/avatar/a85fbe13ad8e5648f5e462665915c9ab?s=512&d=mm&r=g"
              className="w-full h-auto align-middle" alt="avatar" data-pagespeed-url-hash="2454222443" />
          </a>
          <div className="whitespace-nowrap">
            <a className="block mb-1" rel="author" href="/logen/author/dannyings/">Danny Ings</a>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
      <div className="absolute bg-white left-0 bottom-0 w-96 py-8 pr-10">
        <a className="block mb-3 leading-tight text-xs uppercase text-green-700 font-semibold " href="/logen/tag/book/">{category}</a>
        <h3 className="relative pb-5 text-3xl font-medium before:absolute before:w-10 before:h-1 before:bottom-0 before:left-0 before:content-[''] before:bg-green-700 hover:text-green-600">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>

      </div>
    </article >
  </div >)
}

export default HeroPost
