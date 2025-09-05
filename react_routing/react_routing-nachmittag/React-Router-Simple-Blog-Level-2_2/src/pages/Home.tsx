import React from 'react'
import NavigationLink from '../components/NavigationLink'

export default function Home() {
  return (
    <div>
      <div>
        <img
          src="../../public/img/0bc8595e75b47c2ccf8ee4f6b4cdefe8a5b4b349.jpg"
          alt="HomeIMG"
          className="flex w-screen h-5"
        />
      </div>
      <div>
        <h1>Welcome to my simple Blog</h1>
        <NavigationLink to="/blog" text="Go to Articles " />
      </div>
    </div>
  )
}
