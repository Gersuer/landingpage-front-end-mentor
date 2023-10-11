import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>

      <nav className={styles.nav_bar}>
        <Link to='/features'>
          Features
        </Link>
        <Link to='/team'>
          Team
        </Link>
        <Link to='/signin'>
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default Header