export async function getPostBySlug(slug: string) {
  const res = await fetch(`https://www.leafage.top/api/assets/posts/${slug}/details`)
  const json = await res.json()
  console.log("json: ", json)
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json
}

export async function getAllPosts() {
  const res = await fetch(`https://www.leafage.top/api/assets/posts?page=0&size=12`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}
