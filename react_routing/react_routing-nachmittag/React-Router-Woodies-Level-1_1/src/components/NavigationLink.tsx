import React from 'react'
import { NavLink } from 'react-router'

interface NavigationLinkProps {
  to: string
  text: string
}

export default function NavigationLink(props: NavigationLinkProps) {
  return (
    <>
      <NavLink to={props.to}>{props.text}</NavLink>
    </>
  )
}
