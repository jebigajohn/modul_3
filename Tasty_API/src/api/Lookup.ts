import axios from 'axios'
import type { IDish } from '../interface/Interfaces'

const lookup = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
})

export async function lookUpByMeal(id: string | number): Promise<IDish[]> {
  const { data } = await lookup.get(`lookup.php?i=${id}`)
  return data.meals ?? []
}
