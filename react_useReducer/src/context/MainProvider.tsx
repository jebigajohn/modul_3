import React, { createContext, useEffect, useReducer } from 'react'
import type { IState, TAction } from '../interfaces/Interfaces'
import { reducer } from '../functions/functions'
import axios from 'axios'
import { data } from 'react-router'

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
  // useReducer => ist die optimierte Version von useState
  // useReducer besteht aus drei Eigenschaften =>
  // state => Das aktuelle Menü von einem Restaurant (Products)
  // dispatch => Der Kellner, die Anfragen bzw Bestellungen an die Küche weiterleiten und dann das Essen zurück an den Tisch
  // reducer => ist wie Küche, da wird entschieden was genau gekocht wird
  const [states, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' })
      try {
        const resp = await axios.get('https://fakestoreapi.com/products')
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: resp.data,
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
