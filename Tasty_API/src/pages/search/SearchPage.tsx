import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { Meal } from '../../interface/Interfaces'

export default function SearchPage() {
  const { term } = useParams<{ term: string }>()
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!term) return
    setLoading(true)
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => setMeals(res.data.meals ?? []))
      .catch(() => setError('Fetch error'))
      .finally(() => setLoading(false))
  }, [term])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!meals.length) return <p>No results found for "{term}"</p>

  return (
    <div>
      <h2>Search results for "{term}"</h2>
      <div>
        {meals.map((meal: Meal) => (
          <Link
            key={meal.idMeal}
            to={`/category/${meal.strMeal}/${meal.idMeal}`}
            className=""
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
