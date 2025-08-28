import React from "react"

interface ScoreItemProps {
  score: {
    name: string
    points: number
    icon: string
  }
}

export default function ScoreItem({ score }: ScoreItemProps) {
  return (
    <>
      <div>
        <p>Name: {score.name}</p>
        <span>{score.points} PTS</span>
        <div>{score.icon}</div>
      </div>
    </>
  )
}
