import { Suspense } from 'react';
import { getAllPosts } from '@/lib/api'

import PostList from '@/components/post-list';

export default async function Page() {
    const posts = await getAllPosts()

    return (
        <Suspense>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-12 mb-16">
                {posts.map((post) => (
                    <PostList
                        key={post.id}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.id}
                        tags={['Technology', 'Trival']}
                    />
                ))}
            </section>
        </Suspense>
    )
}