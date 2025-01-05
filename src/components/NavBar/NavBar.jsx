import css from './NavBar.module.css';
import React from 'react';
import logo from '../../assets/bcrLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={css.container}>
      <img src={logo} className={css.logo}/>
      
      <button className={css.burger} onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`${css.navButtons} ${menuOpen ? css.navOpen : ''}`}>
        <li className={css.navLink}><Link to='/'>Home</Link></li>
        <li className={css.navLink}><Link to='/aboutus'>About Us</Link></li>
        <li className={css.navLink}><Link to='/thecats'>The Cats</Link></li>
        <li className={css.navLink}>Wishlist</li>
        <li className={css.navLink}>Volunteer</li>
        <li className={css.navLink}>Memorials</li>
        <li className={css.navLink}>Watch Live</li>
      </ul>

    </div>
  )
}
