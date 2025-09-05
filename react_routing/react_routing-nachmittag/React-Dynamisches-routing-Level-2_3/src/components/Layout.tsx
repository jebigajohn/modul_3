import React from 'react'
import Haeder from './Haeder'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <Haeder />
      <main></main>
      <Outlet />
    </div>
  )
}
