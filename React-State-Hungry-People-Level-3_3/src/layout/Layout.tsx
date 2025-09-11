import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="relative w-lvw h-lvh overflow-hidden">
      {/* Hintergrund-Bild gespiegelt */}
      <div className="absolute inset-0 bg-[url(/fish.jpg)] bg-no-repeat bg-cover scale-x-[-1]" />

      {/* Inhalt normal */}
      <div className="relative z-10">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
