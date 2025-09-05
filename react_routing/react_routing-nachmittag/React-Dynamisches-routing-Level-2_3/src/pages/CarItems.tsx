import { useParams, Link } from 'react-router'
import cars from '../cars.json'

export default function CarDetail() {
  const { id } = useParams<{ id: string }>()
  const car = cars.find((e) => e.id === Number(id))
  if (!car) return '404, Article not found!'

  return (
    <div>
      <h1>{car.CarMake}</h1>
      <h2>{car.carModel}</h2>
      <p>{car.CarYear}</p>
      <Link to="/cars">← back</Link>
    </div>
  )
}
