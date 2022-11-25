import Author from './author'
import Category from './category'

type Post = {
  code: string
  title: string
  tags: string
  cover: string
  author: Author
  category: Category
  modifyTime: string
}

export default Post
