import React from 'react'
import NavigationLink from './NavigationLink'

export default function Haeder() {
  return (
    <header>
      <nav>
        <h1>SuperCarList</h1>
        <NavigationLink to="/" text="Home" />
      </nav>
    </header>
  )
}
