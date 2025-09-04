import React, { useState } from 'react'
import Example from '../../components/example/Example'
import type { IProduct } from '../../interfaces/IProduct'
import Shop from '../../components/shop/Shop'
import Header from '../../components/header/Header'

export default function Home() {
  const [warenKorb, setWarenKorb] = useState<IProduct[]>([])

  console.log(warenKorb)
  return (
    <>
      <Header warenKorb={warenKorb} setWarenKorb={setWarenKorb} />
      {/* <Example /> */}
      <Shop warenKorb={warenKorb} setWarenKorb={setWarenKorb} />
    </>
  )
}
