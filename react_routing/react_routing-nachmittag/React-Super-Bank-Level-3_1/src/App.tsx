import { CreditCard } from 'react-kawaii'
import './App.css'
import { useState } from 'react'

function App() {
  const [balance, setBalance] = useState<number>(0)
  const [amount, setAmount] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleDeposit = () => {
    setBalance(balance + Number(amount))
    setAmount('')
  }

  const handleWithdraw = () => {
    setBalance(balance - Number(amount))
    setAmount('')
  }

  const getMood = () => {
    if (balance > 999) return 'blissful'
    if (balance >= 0) return 'happy'
    return 'sad'
  }

  return (
    <div className="flex flex-col justify-center align-middle items-center gap-5">
      <CreditCard size={240} mood={getMood()} color="#84d1fb" />
      <h1 className="uppercase ">Super Bank</h1>
      <div className="flex flex-col gap-5 p-5 text-black rounded-2xl bg-[#84d1fb] ">
        <h1 className="text-xs ">Dein Girokonto</h1>
        <label className="">{balance} €</label>
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder="Gib einen Geldbetrag ein"
          className="bg-white mx-5 p-2 rounded-2xl"
        />
        <div className="flex justify-between px-5 text-white">
          <button onClick={handleDeposit}>Einzahlen</button>
          <button onClick={handleWithdraw}>Auszaheln</button>
        </div>
      </div>
    </div>
  )
}

export default App
