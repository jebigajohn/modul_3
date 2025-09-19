import axios from 'axios'
import type { Meal } from '../interface/Interfaces'

const filter = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
})

export async function filterByCategories(categorie: string): Promise<Meal[]> {
  const { data } = await filter.get(`/filter.php?c=${categorie}`)
  return data.meals ?? []
}
