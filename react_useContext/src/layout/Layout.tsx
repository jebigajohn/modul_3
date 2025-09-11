import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import { mainContext, type MainProviderProps } from '../context/MainProvider'

export default function Layout() {
  const { darkMode } = useContext(mainContext) as MainProviderProps

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
