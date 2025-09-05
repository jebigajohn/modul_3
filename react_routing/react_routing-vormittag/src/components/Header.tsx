import CustomNavigationLink from './NavigationLink'

export default function Header() {
  return (
    <header className="bg-pink-500 p-2">
      <nav className="flex gap-2">
        <CustomNavigationLink to="/" text="Home" />
        <CustomNavigationLink to="/about" text="About" />
        <CustomNavigationLink to="/blog" text="Blog" />
        <CustomNavigationLink to="/pokemon" text="Pokémon" />
        <CustomNavigationLink to="/contact" text="Contact" />
      </nav>
    </header>
  )
}
