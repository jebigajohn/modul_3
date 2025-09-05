import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogOverview from './pages/BlogOverview'
import BlogItem from './pages/BlogItem'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/blog',
        Component: BlogOverview,
      },
      {
        path: '/blog/:id',
        Component: BlogItem,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
