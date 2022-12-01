import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import headerLogo from '../../../images/header-logo.svg';

function Register({onRegister}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value)
  };
  
  function handleChangeEmail(evt) {
    setEmail(evt.target.value)
  };

  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({password, email});
  };
  

  return (
    <div className="login__container">
      <img
        src={headerLogo}
        alt='белый щит в зеленом круге'
        className='login__logo'
      />
      <h3 className="login__title">Добро пожаловать!</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset>
          <label className="login__label" for="name">Имя</label>
          <input
            className="login__input"
            name="name"
            type="text"
            id="name"
            value={name || ""}
            onChange={handleChangeName}
            required
          />
          <span class="login__input-error"></span>
          <label className="login__label" for="email">E-mail</label>
          <input
            className="login__input"
            name="email"
            type="email"
            id="email"
            value={email || ""}
            onChange={handleChangeEmail}
            required
          />
          <span class="login__input-error"></span>
          <label className="login__label" for="password">Пароль</label>
          <input
            className="login__input"
            name="password"
            type="password"
            id="password"
            value={password || ""}
            onChange={handleChangePassword}
            required
          />
          <span class="login__input-error"></span>
        </fieldset>
        <button
          className="login__submit"
          type="submit">
            Зарегистрироваться
        </button>
      </form>
      <div className="login__signup">
        <p className="signup__ask">Уже зарегистрированы? </p>
        <NavLink className="signup__link" to="/signin">Войти</NavLink>
      </div>       
    </div>
  );
}

export default Register