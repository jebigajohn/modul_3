import React from 'react'
import NavigationLink from './NavigationLink'

export default function Header() {
  return (
    <>
      <header className="flex justify-between pt-2 px-20">
        <img src="../../public/img/Logo.png" alt="Logo" />
        <nav className="flex gap-10 ">
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/about" text="About Us" />
          <NavigationLink to="/products" text="Products" />
        </nav>
      </header>
    </>
  )
}
