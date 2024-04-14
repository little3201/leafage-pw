import { Metadata } from "next";
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import type { Post } from '@/lib/type-guards'

import PostHeader from "@/components/post-header"
import PostBody from "@/components/post-body"


export default async function Page({ params }: Params) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return notFound();
  }

  return (
    <article>
      <PostHeader
        title={post.title}
        tags={['Technology', 'Lifestyle']}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.parsedDoc} />
    </article>
  )
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata | undefined> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
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
    slug: String(post.id),
  }))
}