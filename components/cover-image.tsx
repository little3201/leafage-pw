import cn from 'classnames'
import Image from "next/image";
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug: string
  rounded?: boolean
}

const CoverImage = ({ title, src, slug, rounded }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full hover:shadow-lg hover:opacity-80 transition-all duration-200', {
        'rounded-full': rounded,
      })}
      priority
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        objectPosition: "center"
      }} />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export default CoverImage
