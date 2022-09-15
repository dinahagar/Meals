import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCookieBite , faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <span className='logo'>
          <FontAwesomeIcon icon={faCookieBite} />
        </span>
      </Link>
      <div className='navbar-right'>
        <Link to="/favourites">
          <span className='favourites'>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </Link>
        <Link to="/search">
          <span className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar