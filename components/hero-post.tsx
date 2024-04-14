import Link from 'next/link'
import type { Author } from '@/lib/type-guards'

type Props = {
  title: string
  cover: string
  date: string
  category: string
  author: Author
  slug: number
}

export default function HeroPost ({ title, cover, date, category, author, slug }: Props) {
  return (
    <div className="my-12 group">
      <article className="relative">
        <div className="relative ml-28 shadow-sm group-hover:shadow-lg transition-shadow duration-200" style={{ height: 640 }}>
          {/* <CoverImage slug={slug} title={title} src={cover} /> */}
        </div>
        <div className="absolute left-0 top-1/2 -rotate-90">
          <div className="mr-3 font-bold text-xs">
            <Link
              href="/about"
              className="block w-10 h-10 rounded-full overflow-hidden float-left mr-3">
              {/* <Avatar name={title} picture={author.avatar} /> */}
            </Link>
            <div className="whitespace-nowrap">
              <Link href="/about" className="block mb-1 text-lg" rel="author">
                {author.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bg-white left-0 bottom-0 w-96 py-8 pr-10">
          <Link
            href="/category"
            className="block mb-3 leading-tight text-xs uppercase text-green-700 font-semibold">
            {category}
          </Link>
          <h3 className="relative pb-5 text-3xl font-medium before:absolute before:w-10 before:h-1 before:bottom-0 before:left-0 before:content-[''] before:bg-green-700 hover:text-green-600 transition-colors duration-200">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {title}
            </Link>
          </h3>
        </div>
      </article >
    </div >
  );
}