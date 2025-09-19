import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { IDish } from '../../interface/Interfaces'
import { lookUpByMeal } from '../../api/Lookup'

export default function DishPage() {
  const { id } = useParams<{ id: string }>()
  const [dishes, setDishes] = useState<IDish[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    lookUpByMeal(id)
      .then(setDishes)
      .catch(() => setError('Fetch Error'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  const dish = dishes[0]
  return (
    <div>
      <img src={dish.strDishThumb} alt={dish.strDish} />
      <h1>{dish.strDish}</h1>
      <p>{dish.strInstructions}</p>

      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => {
          const ing = (dish as any)[`strIngredient${n}`] as string | undefined
          const mea = (dish as any)[`strMeasure${n}`] as string | undefined
          if (!ing || ing.trim() === '') return null
          return (
            <li key={n}>
              {mea} {ing}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
