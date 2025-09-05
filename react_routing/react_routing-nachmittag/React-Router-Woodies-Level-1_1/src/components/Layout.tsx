import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex justify-between items-center h-screen  mx-20">
        {/* Im Outlet werden Child-Routen gerendert */}
        <Outlet />
      </main>
    </div>
  )
}
