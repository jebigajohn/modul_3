import './Header.css'
import NavigationLink from './NavigationLink'

export default function Header() {
  return (
    <header className="bg-pink-500 p-2">
      <nav className="flex gap-2">
        <NavigationLink to="/" text="Home" />
        <NavigationLink to="/contact" text="Contact" />
        <NavigationLink to="/about" text="About" />
        <NavigationLink to="/blog" text="Blog" />
      </nav>
    </header>
  )
}
