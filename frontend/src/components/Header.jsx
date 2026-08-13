import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/">
        <span className="brand-mark">P</span>
        <span>Plain Notes</span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" end>
          Notes
        </NavLink>
        <NavLink to="/new">New Note</NavLink>
        <NavLink to="/find">Find Notes</NavLink>
      </nav>
    </header>
  )
}

export default Header
