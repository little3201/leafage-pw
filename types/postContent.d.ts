import Author from './author'
import Category from './category'
import Content from './content'

type PostContent = {
    code: string
    title: string
    tags: string
    cover: string
    author: Author
    content: Content
    category: Category
    modifyTime: string
}

export default PostContent