import React from "react"
import AnimalItem from "../animalItem/AnimalItem"
import { animals } from "../../data/Animal" // <-- deine Daten importieren (Pfad ggf. anpassen)

export default function AnimalList() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {animals.map((animal) => (
        <AnimalItem key={animal.name} animal={animal} />
      ))}
    </section>
  )
}
