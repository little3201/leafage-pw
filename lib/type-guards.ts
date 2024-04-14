export type Author = {
    name: string;
    picture: string;
}

export type Post = {
    id: number
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
    parsedDoc: string
}

export type Doc = {
    id: number
}