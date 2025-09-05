import { Link } from 'react-router'
import cars from '../cars.json'

export default function CarsList() {
  return (
    <div className="grid">
      {cars.map((entry) => (
        <div key={entry.id} className="gridcard">
          <h1>{entry.CarMake}</h1>
          <Link to={`/cars/${entry.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
