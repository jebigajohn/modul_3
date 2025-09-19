import React, { createContext, useEffect, useReducer } from 'react'
import type { IState, TAction } from '../interface/Interfaces'
import axios from 'axios'
import { reducer } from '../functions/Function'

export interface MainProviderProps {
  states: IState
  dispatch: React.Dispatch<TAction>
}

export const mainContext = createContext<MainProviderProps | undefined>(
  undefined
)

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [states, dispatch] = useReducer(reducer, {
    categories: [],
    loading: false,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' })
      try {
        const resp = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        )
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: resp.data.categories,
        })
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: 'Fetch Error' })
      }
    }
    fetchData()
  }, [])

  return (
    <mainContext.Provider value={{ states, dispatch }}>
      {children}
    </mainContext.Provider>
  )
}
