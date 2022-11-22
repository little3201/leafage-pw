import Author from './author'
import Category from './category'

type Resource = {
  code: string
  title: string
  cover: string
  author: Author
  type: string
  category: Category
  modifyTime: string
}

export default Resource
