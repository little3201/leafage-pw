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
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className=" text-center">
        <span>布吉岛</span>
        {/* <Avatar name={author.nickname} picture={author.avatar} /> */}
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader
