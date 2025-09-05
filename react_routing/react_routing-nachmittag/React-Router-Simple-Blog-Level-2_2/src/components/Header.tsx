import React from 'react'

import NavigationLink from './NavigationLink'

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-20 py-4 ">
          <div>
            <p className="text-xl font-bold text-green-500">My Life</p>
          </div>
          <div className="flex gap-10">
            <NavigationLink to="/home" text="Home" />
            <NavigationLink to="/blog" text="Blog" />
          </div>
        </nav>
      </header>
    </>
  )
}
