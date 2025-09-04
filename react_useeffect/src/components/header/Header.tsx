import React, { useState } from 'react'
import type { IProduct } from '../../interfaces/IProduct'
import Cart from '../../assets/SVG/Cart'
import './Header.css'

interface HeaderProps {
  warenKorb: IProduct[]
  setWarenKorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Header({ warenKorb, setWarenKorb }: HeaderProps) {
  const [warenKorbModal, setWarenKorbModal] = useState<boolean>(false)

  const pay = () => {
    setWarenKorb([])
    alert('Vielen dank für deinen Einkauf')
    setWarenKorbModal(false)
  }

  const deleteProductFunction = (productId: number): void => {
    const deletedProductArray: IProduct[] = warenKorb.filter(
      (product: IProduct) => product.id !== productId
    )
    console.log(deletedProductArray)
    setWarenKorb(deletedProductArray)
  }

  console.log(warenKorbModal)
  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>

        <div onClick={() => setWarenKorbModal(!warenKorbModal)}>
          <p className="num">{warenKorb.length} </p>
          <Cart />
        </div>

        {/* Logik für Warenkorb anzeigen oder nicht, mit dem && frage ich an ob es true ist */}
        {warenKorbModal && (
          <div className="cart">
            <h3>Warenkorb</h3>
            {warenKorb.length !== 0 ? (
              <>
                {warenKorb.map((product: IProduct, index: number) => {
                  return (
                    <div key={product.id}>
                      <p>
                        {product.title} {product.price}
                      </p>
                      <button onClick={() => deleteProductFunction(product.id)}>
                        ❌
                      </button>
                    </div>
                  )
                })}
                <button onClick={pay}>Bezahlen</button>
              </>
            ) : (
              <p>Dein Warenkorb ist leer...</p>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
