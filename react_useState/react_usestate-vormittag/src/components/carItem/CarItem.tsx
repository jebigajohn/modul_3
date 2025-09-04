import React from 'react'
import type { Icar } from '../../interfaces/Icars'

interface carItemProps {
  car: Icar
}

export default function CarItem({ car }: carItemProps) {
  return (
    <>
      <h2>Marke: {car.marke}</h2>
      <h3>Modell: {car.modell}</h3>
      <p>PS: {car.ps}</p>
    </>
  )
}
