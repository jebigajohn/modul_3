import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  const linkClass = () => `uppercase hover:border-t hover:border-b`

  return (
    <header className="flex items-center justify-between py-10">
      <img src="/icons/logo_architect.svg" alt="" className="w-8 h-auto" />
      <nav className="flex gap-16  items-center">
        <NavLink className={linkClass} to={'/'}>
          Main
        </NavLink>
        <NavLink className={linkClass} to={'/Gallery'}>
          Gallery
        </NavLink>
        <NavLink className={linkClass} to={'/Projects'}>
          Projects
        </NavLink>
        <NavLink className={linkClass} to={'/Certifications'}>
          Certifications
        </NavLink>
        <NavLink className={linkClass} to={'/Contacts'}>
          Contacts
        </NavLink>
        <img src="/icons/icon_darkmode.svg" alt="" />
      </nav>
    </header>
  )
}
