import React from 'react';
import './Movies.css';
import Preloader from '../Movies/Preloader/Preloader';
import Header from '../BasicComponents/Header/Header';
import SearchForm from '../BasicComponents/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../BasicComponents/Footer/Footer';
import Navigation from '../BasicComponents/Navigation/Navigation';

function Movies() {
  return (
    <div className='movies'>
      <Header>
        <Navigation />
      </Header>
      <main className='movies__main'>
        <SearchForm />
        <Preloader />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}

export default Movies