// import moviesData from "../../data.ts"
import type { IMovie } from '../../interface/IMovie'

interface MovieOverviewProps {
  movieList: IMovie[]
}

export default function MovieOverview({ movieList }: MovieOverviewProps) {
  return (
    <>
      <ul className="p-[2rem] flex flex-row flex-wrap justify-center items-center gap-[1rem] mt-[5rem]">
        {movieList.map((movieEntry) => (
          <li
            key={movieEntry.title}
            className="flex flex-col justify-evenly items-center mb-[1rem] border p-[1rem] w-[15rem] h-[20rem] bg-[var(--bg-color-movies)] hover:w-[20rem] hover:h-[25rem] hover:text-2xl"
          >
            <p className="text-center">{movieEntry.title}</p>
            <p>{movieEntry.year}</p>
            <p>{movieEntry.director}</p>
            <p>{movieEntry.duration}</p>
            <p className="mb-[1rem]">{movieEntry.rate}</p>

            {movieEntry.genre.map((movieGenre) => (
              <p key={movieGenre} className="text-xs leading-0.5">
                {movieGenre}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </>
  )
}
