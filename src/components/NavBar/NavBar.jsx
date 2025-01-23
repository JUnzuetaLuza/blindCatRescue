import css from './NavBar.module.css';
import React from 'react';
import pawIcon from '../../assets/pawIcon.png';
import logo from '../../assets/bcrLogo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={css.container}>
      <img src={logo} className={css.logo}/>
      
      <a className={css.burger} onClick={toggleMenu}>
        ☰
      </a>

      <ul className={`${css.navButtons} ${menuOpen ? css.navOpen : ''}`}>
        <NavLink to='/'         className={({ isActive }) => (isActive ? `${css.navLink} ${css.navLinkActive}` : `${css.navLink}`)}>
          <img src={pawIcon} className={css.navLinkIcon} />Home</NavLink>
        <NavLink to='/aboutus'  className={({ isActive }) => (isActive ? `${css.navLink} ${css.navLinkActive}` : `${css.navLink}`)}>
          <img src={pawIcon} className={css.navLinkIcon} />About Us</NavLink>
        <NavLink to='/thecats'  className={({ isActive }) => (isActive ? `${css.navLink} ${css.navLinkActive}` : `${css.navLink}`)}>
          <img src={pawIcon} className={css.navLinkIcon} />The Cats</NavLink>
        <NavLink to=''  className={css.navLink}>
          <img src={pawIcon} className={css.navLinkIcon} />Wishlist</NavLink>
        <NavLink to=''  className={css.navLink}>
          <img src={pawIcon} className={css.navLinkIcon} />Volunteer</NavLink>
        <NavLink to=''  className={css.navLink}>
          <img src={pawIcon} className={css.navLinkIcon} />Memorials</NavLink>
        <NavLink to=''  className={css.navLink}>
          <img src={pawIcon} className={css.navLinkIcon} />Watch Live</NavLink>
      </ul>

    </div>
  )
}
