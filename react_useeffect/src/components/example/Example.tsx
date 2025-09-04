import React, { useEffect, useState } from 'react'

// ? Was ist UseEffect?
// ein useEffect ist dafür da, um einen Seiteneffekt zu erstellen, heißt es wird immer ausgeführt wenn sich ein Wert ändert.

// ? Wie ist die schreibweise?
// useEffect, dann als erstes Argument eine callBackFunction und dann eine Dependencie als leeres Array []
// ⤵️
// useEffect(() => {}, [])

export default function Example() {
  const [counter, setCounter] = useState<number>(0)
  const [slider, setSlider] = useState<string>('0')

  const changeCounter = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const changeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(slider)
    setSlider(event.target.value)
  }

  useEffect(() => {
    // innerhalb des useEffect kann man unendlich viele Abhängigkeiten haben
    // ❌ NO GO ⤵️ Bitte den Setter nie innerhalb des useEffect schreiben
    // setCounter(counter + 1)
    // console.log(counter)
    // console.log(slider)
  }, [counter, slider])

  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={changeCounter}>+1</button>

        <p>Slider: {slider}</p>
        <input
          type="range"
          name=""
          id=""
          value={slider}
          onChange={changeSlider}
        />
      </div>
    </>
  )
}
