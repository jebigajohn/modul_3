import React from 'react'
import type { Icar } from '../../interfaces/Icars'
import CarItem from '../carItem/CarItem'

interface ListItemProps {
  carsArray: Icar[]
}
export default function CarList({ carsArray }: ListItemProps) {
  console.log(carsArray)
  return (
    <>
      {carsArray.map((car: Icar, index: number) => {
        console.log(car)
        return (
          // <div>
          //     <h2>{car.marke}</h2>
          //     <p>{car.ps}</p>
          //   </div>
          <>
            <div key={index}>
              <CarItem car={car} key={index} />
            </div>
          </>
        )
      })}
    </>
  )
}
