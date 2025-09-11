import React from 'react'
import { NavLink } from 'react-router'

export default function Nav() {
  return (
    <nav>
      <h1>Drinks&Chill</h1>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/margarita'}>Margartia</NavLink>
        <NavLink to={'/vodka'}>Vodka</NavLink>
        <NavLink to={'/gin'}>Gin</NavLink>
      </div>
      <a href="" className="">
        Menu
      </a>
    </nav>
  )
}
