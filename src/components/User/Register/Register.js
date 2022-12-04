import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Register.css';
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
    <div className="reg__container">
      <Link to='/'>
        <img
          src={headerLogo}
          alt='белый щит в зеленом круге'
          className='reg__logo'
        />
      </Link>
      <h3 className="reg__title">Добро пожаловать!</h3>
      <form className="reg__form" onSubmit={handleSubmit}>
        <fieldset className='reg__fieldset'>
          <label className="reg__label" for="name">Имя</label>
          <input
            className="reg__input"
            name="name"
            type="text"
            id="name"
            value={name || ""}
            onChange={handleChangeName}
            required
          />
          <span class="reg__input-error"></span>
          <label className="login__label" for="email">E-mail</label>
          <input
            className="reg__input"
            name="email"
            type="email"
            id="email"
            value={email || ""}
            onChange={handleChangeEmail}
            required
          />
          <span class="reg__input-error"></span>
          <label className="reg__label" for="password">Пароль</label>
          <input
            className="reg__input"
            name="password"
            type="password"
            id="password"
            value={password || ""}
            onChange={handleChangePassword}
            required
          />
          <span class="reg__input-error"></span>
        </fieldset>
        <button
          className="reg__submit"
          type="submit">
            Зарегистрироваться
        </button>
      </form>
      <div className="reg__signup">
        <p className="reg__ask">Уже зарегистрированы? </p>
        <Link className="reg__link" to="/signin">Войти</Link>
      </div>       
    </div>
  );
}

export default Register