import { Link } from 'react-router'
import blogData from '../blogData.json'

export default function BlogOverviewPage() {
  return (
    <div>
      <h1>Mein Blog</h1>
      <p>Willkommen auf meinem Blog</p>
      <br />
      <ul>
        {blogData.map((entry) => (
          <li>
            <Link to={`/blog/${entry.slug}`} />
            {entry.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
