import Author from './author'

type Document = {
  id: number
  title: string
  cover: string
  context: string
  modifyTime: string
  author: Author
}

export { Document }