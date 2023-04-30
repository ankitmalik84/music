import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav
        className='main-nav'
        data-aos='fade-down'
        data-aos-easing='ease-in-out'
      >
        {/* 1st logo part  */}
        <div className='logo'>
          <h2>
            <span>M</span>usic
            <span>T</span>herapy
          </h2>
        </div>
        {/* 2nd logo part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          data-aos='zoom-out'
          data-aos-delay='100'
          data-aos-easing='ease-in-out'
        >
          <ul>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/#history'>History</NavLink>
            </li>
            <li>
              <NavLink to='/#description'>Description</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className='social-media'>
          <ul className='social-media-desktop'></ul>
          {/* hamburget menu start  */}
          <div className='hamburger-menu'>
            <a href='#'>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
