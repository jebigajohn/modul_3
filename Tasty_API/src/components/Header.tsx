import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/search/${query}`)
  }

  return (
    <div>
      <header className="flex flex-col gap-10 mt-10 w-full">
        <div className="flex items-center justify-center ">
          <Link to={'/'}>
            <img src="/tasty-logo-04 1.png" alt="tasty Logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-5xl text-[var(--mint)] font-light text-nowrap">
            Find a recipe, an idea, an inspiration...
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 ">
              <input
                type="text"
                value={query}
                placeholder="Type something to search"
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded-sm w-96 bg-[var(--sage)] text-[var(--mint)] pl-4 "
              />
              <button
                type="submit"
                className="bg-[var(--mint)] text-white px-6 py-1.5 rounded-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  )
}
