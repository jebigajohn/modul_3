import React, { useEffect, useState } from 'react'
import type { IProduct } from '../../interfaces/IProduct'
import axios from 'axios'
import ProductItem from '../../components/product/ProductItem'

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // const resp = await fetch("URL")
      const resp = await axios.get('https://fakestoreapi.com/products')
      setProducts(resp.data)
    }
    fetchData()
  }, [])

  console.log(products)
  return (
    <div>
      <h4>Produkt Liste</h4>

      {products.map((product: IProduct) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        )
      })}
    </div>
  )
}
