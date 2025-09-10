import React from 'react'

interface HeroHeaderProps {
  text: string
}

export default function HeroHeader({ text }: HeroHeaderProps) {
  return (
    <div>
      <h1 className="text-[#BDBDBD] text-5xl font-light">{text}</h1>
    </div>
  )
}
