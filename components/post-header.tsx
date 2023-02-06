import Link from 'next/link'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return <>
    <PostTitle>{title}</PostTitle>
    <div className='flex items-center justify-center'>
      <div className="mr-2 font-bold text-xs">
        <Link href="/about" className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar name={'WQ Li'} picture="https://cdn.leafage.top/avatar.jpg?imageMogr2/thumbnail/40x40/blur/1x0/quality/75" />
        </Link>
      </div>

      <div className="whitespace-nowrap text-sm">
        <Link href="/about" className="block" rel="author">
          WQ Li
        </Link>
        <DateFormatter dateString={date} />
      </div>
    </div>
  </>;
}

export default PostHeader
