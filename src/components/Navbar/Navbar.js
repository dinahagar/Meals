import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <span className='logo'>
          <FontAwesomeIcon icon={faCookieBite} />
        </span>
      </Link>
      <Link to="/search">
        <span className='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </Link>
    </div>
  )
}

export default Navbar