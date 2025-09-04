import React, { useState } from 'react'

export default function Formular() {
  const [vorName, setVorname] = useState<string>('')
  const [nachName, setNachname] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [happy, setHappy] = useState<boolean>(false)
  const [shoes, setShoes] = useState<string[]>([
    'Adidas',
    'Nike',
    'Puma',
    'New Balance',
  ])

  interface IUser {
    userName: string
    email: string
    age: number
  }

  const [userOne, setUserOne] = useState<IUser>({
    userName: '',
    email: '',
    age: 0,
  })

  return (
    <>
      <form>
        <label htmlFor="vorname">FirstName</label>
        <input
          type="text"
          value={vorName}
          onChange={(event) => setVorname(event.target.value)}
        />
        <label htmlFor="nachname">LastName</label>
        <input
          type="text"
          value={nachName}
          onChange={(event) => setNachname(event.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />

        <br />
        <br />

        <label htmlFor="happy">Are you happy?</label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={happy}
          onChange={(event) => setHappy(event.target.checked)}
        />
      </form>
      <div>Firstname: {vorName}</div>
      <div>Lastname: {nachName}</div>
      <div>Age: {age}</div>
      <p>Are you Happy? {happy ? '😊' : '😢'}</p>

      <div>
        <ul>
          {shoes.map((shoe: string, index: number) => {
            return <li key={index}>{shoe}</li>
          })}
        </ul>
      </div>
    </>
  )
}
