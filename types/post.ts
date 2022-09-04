import Author from './author'

type PostType = {
  code: string
  title: string
  tags: string
  cover: string
  author: Author
  content: string
  category: string
  modifyTime: string
}

export default PostType
