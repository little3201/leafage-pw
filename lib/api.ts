import { ca } from 'date-fns/locale'
import {REMOTE_URL} from './constants'

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${REMOTE_URL}/posts/${slug}/details`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json
}


export async function getPostsByPage(page: number, size: number) {
  const res = await fetch(`${REMOTE_URL}/posts?page=${page}&size=${size}`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}

export async function getAllPosts() {
  const res = await fetch(`${REMOTE_URL}/posts?page=0&size=99`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}

export async function getPostsByCategory(category:string) {
  const res = await fetch(`${REMOTE_URL}/posts?page=0&size=99&category=${category}`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}

export async function getAllCategories() {
  const res = await fetch(`${REMOTE_URL}/category?page=0&size=99`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}
