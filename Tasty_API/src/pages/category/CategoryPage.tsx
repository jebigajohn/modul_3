import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { Meal } from '../../interface/Interfaces'
import { filterByCategories } from '../../api/Filter'

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>()
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!name) return
    setLoading(true)
    filterByCategories(name)
      .then(setMeals)
      .catch(() => setError('Fetch Error'))
      .finally(() => setLoading(false))
  }, [name])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!Array.isArray(meals) || meals.length === 0) return <p>No meals found</p>

  return (
    <div>
      <h2>Everything {name}</h2>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <Link to={`/category/${name!}/${meal.idMeal}`}>
            <article>
              <h1>{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </article>
          </Link>
        </div>
      ))}
    </div>
  )
}
