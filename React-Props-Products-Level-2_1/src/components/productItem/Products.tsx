import React from "react"
import Product from "../productList/Product"

export default function Products() {
  return (
    <section className="flex gap-20">
      <Product img="/coco.jpg" title="Kuckucksöl" price="$30" />
      <Product img="/polaroid.avif" title="Polaroid" price="$60" />
      <Product img="/saft.avif" title="Öl" price="$20" />
    </section>
  )
}
