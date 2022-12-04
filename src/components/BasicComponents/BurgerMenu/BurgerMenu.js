import React from 'react';
import {Link,NavLink} from 'react-router-dom';

function BurgerMenu() {
  return (
    <div className='popup'>
      <div className='popup-container'>
        <button 
        type='button' 
        className='popup-close'
        aria-label="закрыть форму" 
        title="закрыть форму"></button>
      </div>
      <NavLink to="/" className='burger-link' activeClassName='burger-link_active'>Главная</NavLink>
      <NavLink to="/movies" className='burger-link' activeClassName='burger-link_active'>Фильмы</NavLink>
      <NavLink to="/saved-movies" className='burger-link' activeClassName='burger-link_active'>Сохраненные фильмы</NavLink>
      <Link to="/profile" className="menu__akkaunt">
        <button type="button" className="menu__button">Аккаунт</button>
      </Link>
    </div>
  );
}

export default BurgerMenu