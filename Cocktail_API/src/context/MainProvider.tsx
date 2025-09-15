import { createContext, useEffect, useState } from 'react'
import type { Drink } from '../interface/Drink'
import axios from 'axios'

export interface MainProviderProps {
  drinks: Drink[]
  setLink: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [link, setLink] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  useEffect(() => {
    const getData = async () => {
      if (!link) {
        setDrinks([])
        return
      }

      // #⤵️ V1 (vorheriger Code um nur bestimmte Cocktails zu rendern)
      // link === 'margarita'
      //   ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      //   : link === 'vodka'
      //   ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka'
      //   : link === 'gin'
      //   ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin'
      //   : link === 'rum'
      //   ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum'
      //   : link === 'scotch'
      //   ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=scotch'
      //   : ''
      // if (!url) {
      //   setDrinks([])
      //   return
      // }

      // # V2 Code um mit search input nach Cocktails zu suchen
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${link}`

      try {
        const resp = await axios.get(url)
        const list = (resp.data.drinks ?? []) as Drink[]
        setDrinks(list)
      } catch (error) {
        console.error('Fetch error', error)
        setDrinks([])
      }
    }
    getData()
  }, [link])

  return (
    <mainContext.Provider value={{ drinks, setLink }}>
      {children}
    </mainContext.Provider>
  )
}
