import React, { useState } from 'react'

export default function CounterComponent() {
  // ? Was ist ein HOOK in React?
  // Ein Hook ist eine Function, die uns bestimmt Functions von React gibt,
  // z.B. State (Daten merken oder speichern), Effekte (etwas auführen, wenn sich was ändert)
  // oder Refs (Sachen langfristig speichern, ohne neu zu rendern)

  // UseState
  // ❌ const pizzaVariante = "Funghi"

  // Stattdessen => UseState
  // # UseState
  // ⤵️ die Schreibweise von UseState sieht so aus
  const [counter, setCounter] = useState<number>(0)
  // * der erste Wert "counter" ist wie ein getter, wo ich mir den Wert der Daten holen kann
  // * der zweite Wert "setCounter" ist wie der setter, sollte immer mit set beginnen und ist die function mit der wir den Wert abändern können.

  // ? Entweder Function auslagern ⤵️ und dann ist JSX/TSX Bereich aufrufen

  const plus = () => {
    setCounter(counter + 1)
  }
  return (
    // ! ab hier ist JSX/TSX Bereich
    <>
      {counter}
      <div>
        <p>Das ist der Counter: {counter}</p>
        <button onClick={plus}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </>
  )
}
