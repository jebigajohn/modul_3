import React from 'react'
import { useProducts } from '../../functions/functions'
import type { IProduct } from '../../interfaces/Interfaces'

export default function Home() {
  const { states } = useProducts()

  if (states.error) {
    ;<>
      <p>Error ist da</p>
    </>
  }

  if (states.loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  return (
    <div>
      <h2>Products</h2>
      {states.products.map((product: IProduct) => {
        return (
          <>
            <p>Title{product.title}</p>
            <p>Price{product.price}</p>
          </>
        )
      })}
    </div>
  )
}
