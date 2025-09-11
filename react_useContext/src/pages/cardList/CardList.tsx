import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { mainContext, type MainProviderProps } from '../../context/MainProvider'
import CardItems from '../../components/CardItems'

export default function CardList() {
  const { linkParam } = useParams<string>()

  // # Die Variablen aus dem MainContext bzw. MainProvider kann durch eine Methode und zwar "useContext" verwendet werden

  const { items, setLink } = useContext(mainContext) as MainProviderProps

  console.log(items)

  useEffect(() => {
    setLink(linkParam)
  }, [linkParam])

  // console.log(linkParam)

  return (
    <div>
      <h2>{linkParam?.toUpperCase()} Page</h2>
      <div>
        {items.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CardItems item={item} link={linkParam || ''} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
