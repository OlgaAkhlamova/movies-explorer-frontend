import React from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';
import Header from '../../BasicComponents/Header/Header';
import Navigation from '../../BasicComponents/Navigation/Navigation';

function Profile() {
  
  return (
    <div className="profile">
      <Header>
        <Navigation />
      </Header>
      <main className='profile__container'>
        <h3 className='profile__title'>
          Привет, Виталий!
        </h3>
        <form className='profile__form'>
          <fieldset className='form__row'>
            <label className="login__label" for="name">Имя</label>
            <input
              className="login__input"
              name="name"
              type="text"
              id="name"
              placeholder="Виталий"
              required
            />
            <span class="login__input-error"></span>
          </fieldset>
          <fieldset className='form__row'>
            <label className="login__label" for="email">E-mail</label>
            <input
              className="login__input"
              name="email"
              type="email"
              id="email"
              placeholder="pochta@yandex.ru"
              required
            />
            <span class="login__input-error"></span>
          </fieldset>
          <button type="submit" className="profile__button">
            Редактировать
          </button>
          <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </form>
      </main>
    </div>
  );
}

export default Profile 