import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from '../lib/markdownToHtml'

import { REMOTE_URL } from './constants'

// markdown file directory
const docsDirectory = path.join(process.cwd(), 'docs')

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

export async function getPostsByCategory(page: number, size: number, category: string) {
  const res = await fetch(`${REMOTE_URL}/posts?page=${page}&size=${size}&category=${category}`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}

export async function getAllCategories() {
  const res = await fetch(`${REMOTE_URL}/categories?page=0&size=99`)
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  return json.content
}

export function getSortedDocData() {
  // Get file names under /docs
  const fileNames = fs.readdirSync(docsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { modifyTime: string; title: string })
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => a.modifyTime < b.modifyTime ? 1 : -1)
}

export function getAllDocIds() {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '')
    };
  });
}

export async function getDocData(id: string) {
  const fullPath = path.join(docsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const contentHtml: string = await markdownToHtml(matterResult.content || '')

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { modifyTime: string; title: string })
  }
}