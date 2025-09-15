import React, { useContext, useState } from 'react'
import { mainContext, type MainProviderProps } from '../context/MainProvider'

export default function HeaderSection() {
  const { setLink } = useContext(mainContext) as MainProviderProps
  const [input, setInput] = useState('')

  const handleSearch = () => {
    if (input.trim() !== '') {
      setLink(input.trim().toLowerCase())
    }
  }

  return (
    <div>
      <h1>Cocktails & Getränke!</h1>
      <p>Herzlich willkommen in der Welt der Cocktails und Getränke!</p>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
