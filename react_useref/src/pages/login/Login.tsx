import React, { useState } from 'react'

interface IUser {
  username: string
  email: string
  tel: string
}

export default function Login() {
  // const [username, setUsername] = useState<string>('')

  const [user, setUser] = useState<IUser>({
    username: '',
    email: '',
    tel: '',
  })

  const emailFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value })
  }

  const telFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, tel: event.target.value })
  }

  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`${user.username} wurde erfolgreich eingeloggt`)
  }

  return (
    <>
      <div className="mx-auto flex">
        <div className="bg-[url(/funny_bg.jpeg)] w-lvw h-lvh mx-auto bg-no-repeat"></div>
        <h3 className="text-2xl mb-6">Login</h3>
        {/* <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id=""
          className="w-full rounded-md border border-slate-300 h-10"
          value={username}
        /> */}
        <form className="space-y-4 w-full text-blue-950" onSubmit={loginFunc}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded-md broder border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring2 focus:bg-yellow-400 "
              value={user.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name=""
              id=""
              value={user.email}
              className="w-full rounded-md broder border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring2 focus:bg-yellow-400 "
              onChange={emailFunc}
            />
          </div>
          <div>
            <label htmlFor="tel">Tel</label>
            <input
              type="text"
              name=""
              id=""
              value={user.tel}
              className="w-full rounded-md broder border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring2 focus:bg-yellow-400 "
              onChange={telFunc}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 hover:bg-red-700 text-white px-4 py-4 font-medium "
          >
            Einloggen
          </button>
        </form>
      </div>
    </>
  )
}
