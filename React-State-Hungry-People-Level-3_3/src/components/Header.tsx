import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-center gap-40  text-white">
        <div className="flex gap-20">
          <NavLink to={'/'}>HOME</NavLink>
          <NavLink to={'/team'}>TEAM</NavLink>
        </div>

        <img src={'./Vector.png'} alt="" />
        <div className="flex gap-20">
          <NavLink to={'/menu'}>MENU</NavLink>
          <NavLink to={'/booking'}>BOOKING</NavLink>
        </div>
      </nav>
    </header>
  )
}
