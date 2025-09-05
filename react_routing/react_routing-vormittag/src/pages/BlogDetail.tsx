import { useParams } from 'react-router'
import blogData from '../blogData.json'

export default function BlogDetailPage() {
  // const location = useLocation()
  const { slug } = useParams()
  // const slug = useParams().slug!

  if (!slug) {
    return '404 Error!'
  }
  const blogEntry = blogData.find((entry) => entry.slug === slug)

  if (!blogEntry) {
    return '404, Article not found!'
  }

  console.log(blogEntry)

  return (
    <div>
      <h1>{blogEntry.title}</h1>

      <p>{blogEntry.content} </p>
    </div>
  )
}
