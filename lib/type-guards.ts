export type Author = {
    name: string;
    picture: string;
}

export type Post = {
    id: number
    title: string;
    date: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    tags: string[];
    parsedDoc: string
}

export type Doc = {
    id: number
}

export type Pagation = {
    totalPages: number
    page: number
}