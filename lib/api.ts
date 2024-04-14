import { parseDoc } from '@/lib/md-convert'
import type { Post } from './type-guards'

const REMOTE_URL = 'https://leafage.top/api'

const posts = [
    {
        id: 1,
        title: '这个是标题，可能会比较长，可以测试下布局是否好看，不是很方便吗',
        date: '2024-04-13',
        coverImage: '/ai.jpg',
        author: {
            name: '章三',
            picture: '/avatar-cartoon.jpg' 
        },
        excerpt: '这是帖子概要描述',
        ogImage: {
            url: ''
        },
        content: '### 三级标题 \n 换行了 \n <pre><code>function test () {}</code></pre>',
        parsedDoc: ''
    },
    {
        id: 2,
        title: '这个是标题，可能会比较长，可以测试下布局是否好看，不是很方便吗',
        date: '2024-04-13',
        coverImage: '/ai.jpg',
        author: {
            name: '章三',
            picture: '/avatar-cartoon.jpg' 
        },
        excerpt: '这是帖子概要描述',
        ogImage: {
            url: ''
        },
        content: '### 三级标题',
        parsedDoc: ''
    },
    {
        id: 2,
        title: '这个是标题，可能会比较长，可以测试下布局是否好看，不是很方便吗',
        date: '2024-04-13',
        coverImage: '/ai.jpg',
        author: {
            name: '章三',
            picture: '/avatar-cartoon.jpg' 
        },
        excerpt: '这是帖子概要描述',
        ogImage: {
            url: ''
        },
        content: '### 三级标题',
        parsedDoc: ''
    }
]

export async function getPostBySlug(slug: string): Promise<Post> {
    // const data = await fetch(`${REMOTE_URL}/assets/posts/${slug}`).then(res => res.json())
    // if (data.errors) {
    //     throw new Error('Failed to fetch API')
    // }
    // // parse context
    // const parsedDoc = await parseDoc(data.context || '')
    // // add parsed doc to data
    // const post = { ...data, parsedDoc: parsedDoc }
    const parsedDoc = await parseDoc(posts[0].content || '')
    const post = {...posts[0], parsedDoc: parsedDoc}
    return post
}

export async function getAllPosts(): Promise<Post[]> {
    // const data = await fetch(`${REMOTE_URL}/assets/posts`).then(res => res.json())
    // if (data.errors) {
    //     throw new Error('Failed to fetch API')
    // }
    // return data.content
    return posts
}
