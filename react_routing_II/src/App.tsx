import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Shop from './pages/shop/Shop'
import ProductDetail from './components/product/ProductDetail'

function App() {
  // die Variable router wird mit der Methode createBrowserRouter erstellt
  // innerhalb dieser Methode bzw function wird noch eine andere Function benötigt und zwar createRoutesFromElement
  // Danach kommt das Element Route
  // Route ist ein Elternelement und muss mit einem offenden und Schließenden Tag geschriben wird
  // Die Kindelemente haben nur einen einzigen Tag
  // Die Route hat zwei Eigenschaften "path" und "element"
  // am Ende brauchen wir noch RouterProvider mit dem Attribut router

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        {/* Was man ab dem : schreibt, ist das was man in der ProductDetail Seite als useParam wieder übernimmt */}
        <Route path="shop/:id" element={<ProductDetail />} />
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
