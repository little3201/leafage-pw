interface AbstractVO<T> {
    code: T,
    modifyTime: Date
}

export declare interface Category extends AbstractVO<string> {
    name: string,
    count: number,
    description: string
}

export declare interface Posts extends AbstractVO<string> {
    title: string,
    cover: string,
    category: string,
    tags: Array<string>,
    viewed: number,
    likes: number,
    comments: number
}

export declare interface PostsContent extends Posts {
    catalog: string,
    content: string
}

export declare interface Resource extends AbstractVO<string> {
    title: string,
    type: string,
    cover: string,
    category: string,
    viewed: number,
    downloads: number,
    description: string
}

export declare interface Comment extends AbstractVO<string> {
    posts: string,
    country: string,
    location: string,
    content: string,
    count: number
}
