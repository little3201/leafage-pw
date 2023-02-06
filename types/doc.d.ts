import Author from './author'

type Doc = {
  id: string
}

type Document = {
    title: string
    cover: string
    contentHtml: string
    modifyTime: string
    author: Author
}

export { Doc, Document}