import React, { useState } from 'react'

export default function Input() {
  const [vorName, setVorname] = useState<string>('')
  const [nachName, setNachname] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <>
      <form className="mt-10 flex flex-col">
        <div className="flex gap-2">
          <input
            className="bg-amber-50 text-black"
            type="text"
            value={vorName}
            onChange={(event) => setVorname(event.target.value)}
          />
          <input
            className="bg-amber-50 text-black"
            type="text"
            value={nachName}
            onChange={(event) => setNachname(event.target.value)}
          />
          <input
            className="bg-amber-50 text-black"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-baseline">
          <label htmlFor="vorName" className="text-red-400">
            Vorname: {vorName}
          </label>
          <label htmlFor="nachName" className="text-blue-400">
            Nachname: {nachName}
          </label>
          <label htmlFor="email" className="text-green-400">
            Email: {email}
          </label>
        </div>
      </form>
    </>
  )
}
