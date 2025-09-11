import type { Drink } from '../interface/Drink'

interface Props {
  drink: Drink
  link: string
}

export default function DrinkItem({ drink }: Props) {
  return (
    <div>
      <h1>Name: {drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
    </div>
  )
}
