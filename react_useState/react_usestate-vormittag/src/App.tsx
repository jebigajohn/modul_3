import { useState } from 'react'
import './App.css'

import CounterComponent from './components/counterComponent/CounterComponent'
import Formular from './pages/formular/Formular'
import cars from './data/Cars'
import type { Icar } from './interfaces/Icars'
import CarItem from './components/carItem/CarItem'
import CarList from './components/carList/CarList'
import { Notifications, UserProfil } from './Recap'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const [data] = useState<Icar[]>(cars)

  return (
    // ! ALTERNATIVE className={darkMode ? "dark" : "light"}
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        <img src="../public/icon_dark-light-mode.png" alt="darkmode" />
      </button>
      <CounterComponent />
      <Formular />
      <CarList carsArray={data} />

      <br />
      <br />
      <br />

      <UserProfil name="Joe" />
      <UserProfil name={null} />
      <UserProfil />
      <UserProfil name="" />

      <br />
      <br />
      <br />

      <Notifications count={3} />
      <Notifications count={0} />
      <Notifications count={null} />
    </div>
  )
}

export default App
