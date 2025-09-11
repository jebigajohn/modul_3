import { createContext, useEffect, useState } from 'react'
import type { ICharacter, IEpisode, ILocation } from '../interface/Interfaces'
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

type DataType = ICharacter | ILocation | IEpisode

export interface MainProviderProps {
  items: DataType[]
  setLink: React.Dispatch<React.SetStateAction<string | undefined>>
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [link, setLink] = useState<string | undefined>('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<any>([])
  const [darkMode, setDarkMode] = useState<boolean>(false)

  console.log(link)

  useEffect(() => {
    const getData = async () => {
      let url = ''
      if (link) {
        if (link === 'character') {
          url = 'https://rickandmortyapi.com/api/character'
        } else if (link === 'location') {
          url = 'https://rickandmortyapi.com/api/location'
        } else if (link === 'episode') {
          url = 'https://rickandmortyapi.com/api/episode'
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.results) {
            setItems(resp.data.results)
          }
        } catch (error) {
          console.error('Irgendwas ist schiefgelaufen', error)
        }
      }
    }
    getData()
  }, [link])

  // # Value übergibt unsere Werte als State
  return (
    <mainContext.Provider value={{ items, setLink, darkMode, setDarkMode }}>
      {children}
    </mainContext.Provider>
  )
}
