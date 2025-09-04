import React from 'react'
import './ProductItem.css'
import type { IProduct } from '../../interfaces/IProduct'

interface ProductItemProps {
  itemObj: IProduct
  warenKorb: IProduct[]
  setWarenKorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function ProductItem({
  itemObj,
  warenKorb,
  setWarenKorb,
}: ProductItemProps) {
  const addToCartFunction = (item: IProduct) => {
    console.log(item)
    if (!item) return
    // der Warenkorb darf nicht überschrieben werden, sondern das Produkt soll jeweils pro onClick hinzugefügt werden
    setWarenKorb([...warenKorb, item])
  }
  return (
    <>
      <div>
        <h5>Product Item</h5>
        <h6>Title: {itemObj.title}</h6>
        <p>Price: ${itemObj.price}</p>
        <p>Category: {itemObj.category}</p>
        <img src={itemObj.image} alt="ItemIMG" />
        <button onClick={() => addToCartFunction(itemObj)}>Add to Cart</button>
      </div>
    </>
  )
}
