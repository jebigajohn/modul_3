/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { mainContext, type MainProviderProps } from '../../context/MainProvider'
import DrinkItem from '../../components/DrinkItem'

export default function DrinkList() {
  const { linkParam } = useParams<{ linkParam: string }>()

  const { drinks, setLink } = useContext(mainContext) as MainProviderProps

  useEffect(() => {
    setLink(linkParam ?? '')
  }, [linkParam, setLink])

  return (
    <div>
      <h2>{linkParam?.toUpperCase()} Page</h2>
      <div>
        {drinks.map((drink) => (
          <div key={drink.idDrink}>
            <DrinkItem drink={drink} link={linkParam ?? ''} />
          </div>
        ))}
      </div>
    </div>
  )
}
