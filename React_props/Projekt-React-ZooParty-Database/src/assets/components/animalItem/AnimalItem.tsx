import React from "react"
import type { Animal } from "../../interfaces/AnimalInterface"

type Props = { animal: Animal }

export default function AnimalItem({ animal }: Props) {
  return (
    <>
      <div className="flex flex-col border-solid border-2 border-amber-200 gap-0.5 w-md bg-amber-700 shadow-amber-100 shadow-md">
        <p>Name: {animal.name}</p>
        <p>Species: {animal.species}</p>
        <p>Habitat: {animal.habitat}</p>
        <p>Lifespan: {animal.lifespan}</p>
        <p>Diet: {animal.diet}</p>
        {animal.funFacts?.length ? (
          <>
            <h4>Fun facts</h4>
            <ul>
              {animal.funFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </>
        ) : null}
        <div>{animal.emoji} </div>
      </div>
    </>
  )
}
