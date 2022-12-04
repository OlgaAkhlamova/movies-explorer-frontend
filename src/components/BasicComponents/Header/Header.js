import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';
import headerLogo from '../../../images/header-logo.svg';

function Header({children}) {
  return (
    <header className="header">
      <div className='header__container'>
        <NavLink exact to="/" className="menu__link">
          <img
            src={headerLogo}
            alt='белый щит в зеленом круге'
            className='header__logo'
          />
        </NavLink>  
        {children}
      </div>
    </header>
  );
}

export default Header;