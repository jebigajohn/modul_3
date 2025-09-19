import { Link } from 'react-router'
import { useCategories } from '../../functions/Function'
import type { CategoryElement } from '../../interface/Interfaces'

export default function Home() {
  const { states } = useCategories()

  if (states.error) {
    return (
      <>
        <p>Couldn´t load Categories</p>
      </>
    )
  }

  if (states.loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }
  return (
    <div className="mt-10 flex flex-col gap-10">
      <h2 className="text-5xl text-[var(--mint)] font-light text-nowrap">
        Or go through our categories
      </h2>
      <div className="grid grid-cols-3 gap-5 w-fit">
        {states.categories.map((categorie: CategoryElement) => {
          return (
            <div key={categorie.idCategory}>
              <Link to={`/category/${categorie.strCategory}`}>
                <article className="bg-[var(--mint)] items-center flex flex-col p-4 rounded-2xl">
                  <h3 className="text-white text-2xl">
                    {categorie.strCategory}
                  </h3>
                  <img
                    src={categorie.strCategoryThumb}
                    alt={categorie.strCategory}
                    className="w-[269px] h-[168px]"
                  />
                </article>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
