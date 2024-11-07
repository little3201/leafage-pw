import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/app/lib/api'
import type { Post } from '@/app/lib/type-guards'

import PostHeader from '@/app/ui/post-header'
import PostBody from '@/app/ui/post-body'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  return (
    <article>
      <PostHeader
        title={post.title}
        tags={['Technology', 'Lifestyle']}
        date={post.date}
      />
      <PostBody content={post.parsedDoc} />
    </article>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const slug = (await params).slug
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound()
  }

  return {
    title: post.title,
    description: post.title
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post: Post) => ({
    slug: String(post.id)
  }))
}