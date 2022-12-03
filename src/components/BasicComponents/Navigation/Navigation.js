import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation () {
  return (
    <nav className="menu">
      <NavLink to="/movies" className="menu__link">Фильмы</NavLink>
      <NavLink to="/saved-movies" className="menu__link">Сохраненные фильмы</NavLink>
      <Link to="/profile" className="menu__akkaunt">
        <button type="button" className="menu__button">Аккаунт</button>
      </Link>
    </nav>
  )
}

export default Navigation; 