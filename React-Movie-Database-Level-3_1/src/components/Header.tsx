import Buttons from '../components/Button'

interface HeaderProps {
  sortingMoviesButtons: (movie: string) => void
}

export default function Header({ sortingMoviesButtons }: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <div className="flex flex-row justify-evenly p-5">
          <Buttons
            onClick={() => sortingMoviesButtons('dateUp')}
            buttonName="Sort by Date Ascending"
          />
          <Buttons
            onClick={() => sortingMoviesButtons('dateDown')}
            buttonName="Sort by Date Descending"
          />
          <Buttons
            onClick={() => sortingMoviesButtons('bestRate')}
            buttonName="Best Rate"
          />
          <Buttons
            onClick={() => sortingMoviesButtons('a-z')}
            buttonName="A-Z"
          />
          <Buttons
            onClick={() => sortingMoviesButtons('z-a')}
            buttonName="Z-A"
          />
        </div>
      </header>
    </>
  )
}
