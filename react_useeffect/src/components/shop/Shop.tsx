import React, { useEffect, useState } from 'react'
import './Shop.css'

import type { IProduct } from '../../interfaces/IProduct'
import Loading from '../loading/Loading'
import ProductItem from '../productItem/ProductItem'

interface ShopProps {
  warenKorb: IProduct[]
  setWarenKorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Shop(props: ShopProps) {
  const [megaData, setMegaData] = useState<null | IProduct[]>([])

  useEffect(() => {
    // Function zum Daten fetchen
    // der Vorteil hier ist, die Daten werden nur einmal gefetcht beim ersten Rendern der Component
    const fetchData = async (): Promise<void> => {
      const response = await fetch('https://fakestoreapi.com/products')
      const responseInJson = await response.json()

      setMegaData(responseInJson)
    }
    fetchData()
  }, [])

  // console.log(megaData)
  return (
    <div>
      <h2>Shop</h2>
      <div className="product_container">
        {megaData ? (
          <>
            {megaData.map((itemObj: IProduct, index: number) => {
              return (
                <div key={itemObj.id}>
                  <h4>Product</h4>
                  <ProductItem
                    itemObj={itemObj}
                    warenKorb={props.warenKorb}
                    setWarenKorb={props.setWarenKorb}
                  />
                </div>
              )
            })}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}
