import { useState } from 'react'

import moviesData from './data'
import Layout from './pages/layout/Layout'

function App() {
  const [sortingMovies, setSortingMovies] = useState(moviesData)

  const sortingBy = (movie: string) => {
    const sortedMovies = [...sortingMovies]

    if (movie === 'dateUp') {
      sortedMovies.sort((a, b) => Number(a.year) - Number(b.year))
    } else if (movie === 'dateDown') {
      sortedMovies.sort((a, b) => Number(b.year) - Number(a.year))
    } else if (movie === 'bestRate') {
      sortedMovies.sort((a, b) => Number(b.rate) - Number(a.rate))
    } else if (movie === 'a-z') {
      sortedMovies.sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
    } else if (movie === 'z-a') {
      sortedMovies.sort((a, b) => b.title.toLowerCase().localeCompare(a.title))
    }

    setSortingMovies(sortedMovies)
  }
  return (
    <>
      <Layout sortingMoviesButtons={sortingBy} movieList={sortingMovies} />
    </>
  )
}

export default App
