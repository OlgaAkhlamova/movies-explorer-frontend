import React, {useState} from 'react';
import {Link,NavLink} from "react-router-dom";
import './Login.css';
import headerLogo from '../../../images/header-logo.svg';

function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChangeEmail(evt) {
    setEmail(evt.target.value)
  };

  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) {
      return;
    } else {
      onLogin({password, email});
    }
  }

  return (
    <div className="login__container">
      <Link to='/'>
        <img
          src={headerLogo}
          alt='белый щит в зеленом круге'
          className='login__logo'
        />
      </Link>
      <h3 className="login__title">Рады видеть!</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset className='login__fieldset'>
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
            Войти
        </button>
      </form>
      <div className="login__signup">
        <p className="signup__ask">Еще не зарегистрированы? </p>
        <NavLink className="signup__link" to="/signup">Регистрация</NavLink>
      </div>       
    </div>
  )
}

export default Login
