import React from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <img
          src={headerLogo}
          alt='белый щит в зеленом круге'
          className='header__logo'
        />
        <div className='header__nav'>
          <p className='header__reg'>Регистрация</p>
          <button type='button' className='header__in'>Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;