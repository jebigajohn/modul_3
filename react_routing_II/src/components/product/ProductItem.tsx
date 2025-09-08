import React from 'react'
import type { IProduct } from '../../interfaces/IProduct'
import { Link } from 'react-router'

interface ProductProps {
  product: IProduct
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <div>
      <h3>Title: {product.title}</h3>
      <img src={product.image} alt="" />
      <Link to={`${product.id}`}>See more Details</Link>
    </div>
  )
}
