import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import CarsList from './pages/Cars'
import CarDetail from './pages/CarItems'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/cars" replace />,
  },
  { path: '/cars', element: <CarsList /> },
  { path: '/cars/:id', element: <CarDetail /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
