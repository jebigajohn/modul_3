import React from 'react'
import DrinkList from '../drinklist/DrinkList'
import { NavLink } from 'react-router'

export default function Main() {
  return (
    <div>
      <div>
        <NavLink to={'/gin'}>Gin</NavLink>
        <NavLink to={'/vodka'}>Vodka</NavLink>
        <NavLink to={'/rum'}>Rum</NavLink>
        <NavLink to={'/scotch'}>Scotch</NavLink>
        <NavLink to={'/non_alcoholic'}>Alkoholfrei</NavLink>
        <NavLink to={'/random'}>Zufall</NavLink>
      </div>
      <DrinkList />
    </div>
  )
}
