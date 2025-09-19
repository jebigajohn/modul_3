import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
