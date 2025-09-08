import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { IProduct } from '../../interfaces/IProduct'

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct>()
  const { id } = useParams()

  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(resp.data)
    }
    fetchData()
  }, [id])
  return (
    <div>
      <h3>Title: {product?.title}</h3>
      <p>Price: {product?.price}</p>
      <img src={product?.image} alt="" />
      <p>Description: {product?.description}</p>
      <Link to={'/shop'}>Back to Store</Link>
    </div>
  )
}
