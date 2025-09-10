import React from 'react'
import HeroHeader from '../../components/HeroHeader'

export default function AboutStatement() {
  return (
    <div className="mt-20 flex flex-col gap-10">
      <HeroHeader text="Main Focus/Mission Statement" />
      <div className="flex justify-between ">
        <div className="flex items-center gap-10">
          <h1 className="text-9xl font-bold opacity-5">1</h1>
          <p className="w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <h1 className="text-9xl font-bold opacity-5">2</h1>
          <p className="w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </div>
  )
}
