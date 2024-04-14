import { Suspense } from 'react';
import { getAllPosts } from '@/lib/api'

import HeroPost from '@/components/hero-post';

export default async function Page() {
    const posts = await getAllPosts()

    return (
        <Suspense>
            <HeroPost
                title={posts[0].title}
                cover={posts[0].coverImage}
                date={posts[0].date}
                author={posts[0].author}
                slug={posts[0].id}
                category="TECHNOLOGY"
            />
        </Suspense>
    )
}