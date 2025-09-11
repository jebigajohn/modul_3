import Header from '../..//components/Header'
import MovieOverview from '../home/Home'
import type { IMovie } from '../../interface/IMovie'

interface LayoutProps {
  sortingMoviesButtons: (movie: string) => void
  movieList: IMovie[]
}

export default function Layout({
  sortingMoviesButtons,
  movieList,
}: LayoutProps) {
  return (
    <>
      <Header sortingMoviesButtons={sortingMoviesButtons} />
      <main>
        <MovieOverview movieList={movieList} />
      </main>
    </>
  )
}
