import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductJenson from './pages/ProductJenson'
import ProductDeon from './pages/ProductDeon'
import ProductKrisha from './pages/ProductKrisha'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/products',
        Component: Products,
      },
      {
        path: '/products/jenson',
        Component: ProductJenson,
      },
      {
        path: '/products/deon',
        Component: ProductDeon,
      },
      {
        path: '/products/krisha',
        Component: ProductKrisha,
      },
      {
        path: '*',
        element: <div>Error 404</div>,
      },
    ],
  },
])

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
