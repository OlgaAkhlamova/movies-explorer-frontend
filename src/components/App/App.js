import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../BasicComponents/Header/Header';
import Main from '../Main/Main';
import Footer from '../BasicComponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
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
