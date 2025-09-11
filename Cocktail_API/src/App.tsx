import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'
import Layout from './layout/Layout'

import DrinkList from './pages/drinklist/DrinkList'
import Main from './pages/home/Main'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/:linkParam" element={<DrinkList />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
