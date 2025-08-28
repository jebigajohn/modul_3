import React from "react"
import { scoresArray } from "../../data/scores"
import ScoreItem from "../scoreItem/ScoreItem"

export default function ScoreList() {
  return (
    <>
      {/* Wenn wir mit Map Array arbeiten wollen, soll jede Component einen props "key" mitgegeben werden, der den Eintrag identifiziert. Das kann eine ID sein oder in diesem Fall die Index von unserem Array */}
      <section>
        {scoresArray.map((score, index) => {
          return (
            <div key={index}>
              <ScoreItem score={score} />
            </div>
          )
        })}
      </section>
    </>
  )
}
