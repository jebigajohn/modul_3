import { createBrowserRouter, Link } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Layout from './components/Layout'
import BlogOverviewPage from './pages/BlogOverview'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/about',
        Component: AboutPage,
      },
      {
        path: '/contact',
        Component: ContactPage,
      },
      {
        path: '/blog',
        Component: BlogOverviewPage,
      },
      {
        path: '/blog/:slug',
        element: <div>Detailseite</div>,
      },
      {
        path: '*',
        element: <div>Sorry, 404, alles kaputt</div>,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
