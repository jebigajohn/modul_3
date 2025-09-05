import React from 'react'
import { blogData } from '../types/BlogData'
import { Link } from 'react-router'

export default function BlogOverview() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 justify-center items-center align-middle">
        {blogData.map((entry) => (
          <div
            className="flex flex-col justify-center items-center "
            key={entry.id}
          >
            <img
              src={entry.img_url}
              alt={entry.title}
              className="w-sm h-sm rounded-2xl"
            />
            <h1>{entry.title}</h1>
            <Link className="" to={`/blog/${entry.id}`}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
