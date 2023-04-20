import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="flex items-center relative mb-12">
        <div className="">
          <span className="capitalize text-black text-opacity-60 italic font-serif">From Blog</span>
          <h4 className="text-4xl font-bold font-serif">The Latest News</h4>
        </div>
        <div className="flex-1">
          <p className="text-sm max-w-md text-neutral-400 font-serif ml-16 pl-6 border-l-4 border-green-700 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-12 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.cover}
            date={post.modifyTime}
            author={post.author}
            slug={post.id}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
