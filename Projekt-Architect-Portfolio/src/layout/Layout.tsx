import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen ">
      <header className="px-30">
        <Header />
      </header>

      <main className="px-30 pb-40">
        <Outlet />
      </main>
      <footer className="bg-[#2C2C2C]">
        <div className="px-30">
          <Footer /> {/* Inhalt */}
        </div>

        {/* volle Breite, kein Padding */}
        <hr className="text-[#C8C8C880]/30 " />

        <div className="px-30 py-8">
          <p className="text-[#C8C8C880] text-center text-sm">
            © 2021 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
