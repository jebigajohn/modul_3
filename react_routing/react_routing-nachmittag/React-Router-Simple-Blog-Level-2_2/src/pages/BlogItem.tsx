import React from 'react'
import { useParams } from 'react-router'
import { blogData } from '../types/BlogData'

export default function BlogItem() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return '404 Error!'
  }

  const blogEntry = blogData.find((entry) => entry.id === Number(id))

  if (!blogEntry) {
    return '404, Article not found'
  }

  console.log(blogEntry)

  return (
    <div>
      <img src={blogEntry.img_url} alt={blogEntry.title} />
      <h1>{blogEntry.title}</h1>
      <p>{blogEntry.description}</p>
      <p>{blogEntry.author}</p>
    </div>
  )
}
