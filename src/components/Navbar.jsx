import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/matches', label: 'Played Matches' },
    { to: '/upcoming', label: 'Upcoming' },
    { to: '/players', label: 'Player Stats' },
    { to: '/news', label: 'News' },
    { to: '/contact', label: 'Support' },
  ]

  return (
    <>
      <header className="site-header">
        <span className="logo">⚽ KICK<span className="logo-dot">OFF</span></span>
        <a href="#" className="search-icon">🔍</a>
      </header>
      <nav className="site-nav">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Navbar
