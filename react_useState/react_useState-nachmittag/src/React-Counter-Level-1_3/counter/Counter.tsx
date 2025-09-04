import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState<number>(0)

  const plus = () => {
    setCounter(counter + 1)
  }
  const minus = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <div className="flex justify-evenly  items-center mb-0.5">
        <button onClick={minus}>-</button>
        {/* Counter */}
        <p>{counter}</p>
        <button onClick={plus}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  )
}
