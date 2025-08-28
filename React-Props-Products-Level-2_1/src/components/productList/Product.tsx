import React from "react"

interface ProductItem {
  img: string
  title: string
  price: string
}

export default function Product(item: ProductItem) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <img src={item.img} alt={item.title} className="w-xs" />
        <h1>{item.title}</h1>
        <p>{item.price}</p>
        <button>Buy now</button>
      </div>
    </>
  )
}
