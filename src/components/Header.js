import logo from '../logo.svg'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ loggedIn, handleLogout }) {
  const currentUser = useContext(CurrentUserContext)
  const currentPath = useLocation().pathname
  const linkTo = currentPath === '/login' ? '/singup' : '/login'
  const linkText = currentPath === '/login' ? 'Sign up' : 'Log in'
  return (
    <header className="header">
      <img src={logo} alt="Around the US Logo" className="header__logo" />
      {loggedIn ? (
        <div className="header__log-info">
          <div className="header__user-email">{currentUser.email}</div>
          <div className="header__logout" onClick={handleLogout}>
            Log out
          </div>
        </div>
      ) : (
        <Link to={linkTo} className="header___link">
          {linkText}
        </Link>
      )}
    </header>
  )
}
export default Header
