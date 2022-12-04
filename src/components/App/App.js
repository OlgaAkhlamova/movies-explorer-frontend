import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Header from '../BasicComponents/Header/Header';
import Main from '../Main/Main';
import Footer from '../BasicComponents/Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import PageNotFound from '../BasicComponents/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header>
            <div className='header__nav'>
              <NavLink to="/signup" className='header__reg'>Регистрация</NavLink>
              <NavLink to="/signin" >
                <button type='button' className='header__in'>Войти</button>
              </NavLink>
            </div>
          </Header>
          <Main /> 
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
