import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout() {
  // Wir brauchen die Layout Seite damit wir das Outlet von React Router benutzen können
  // Outlet ist dafür zuständig, dass alles was sich innerhalb der Seite wie Home, Dashboard, Productlist usw. befindet

  // useLocation ist ein Hook von React Router um die aktuelle URL abzurufen
  const location = useLocation()

  console.log(location)

  const hideFooter = location.pathname === '/login'

  return (
    <>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}
