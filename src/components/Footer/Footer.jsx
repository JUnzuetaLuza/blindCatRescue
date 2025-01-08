import css from './Footer.module.css';
import React from "react";
import logo from '../../assets/bcrLogo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
        <div className={css.container}>
            <div className={css.containerPart}>
                <img src={logo}  className={css.logo} />
                <p>Our finantial statements, Board of Directors, Audited Finantial and 990's are al listed HERE</p>
            </div>
            <ul className={`${css.containerPart} ${css.navLinks}`}>
                <NavLink to='/'         className={css.navLink}>Home</NavLink>
                <li className={css.navLink}>Volunteer</li>
                <NavLink to='/aboutus'  className={css.navLink}>About Us</NavLink>
                <li className={css.navLink}>Memorials</li>
                <NavLink to='/thecats'  className={css.navLink}>The Cats</NavLink>
                <li className={css.navLink}>Watch Live</li>
                <li className={css.navLink}>Wishlist</li>
                <li className={css.navLink}>Contacts</li>
            </ul>
            <div className={css.containerPart}>
                <div className={css.socialMedia}>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={youtube}/>
                    <img src={tiktok}/>
                </div>
                <p>blindcat@blindcatrescue.com</p>
            </div>
        </div>
        <p className={css.rights}>
            Blind Cat Rescue is a registered Trademark. You may not use our name any capacity with out our expressed written permission.<br/>
            Copyright 2024 Blind Cat Rescue. All Rights Reserved, Privacy Policy & Terms of Use.
        </p>
        </>
    )
}