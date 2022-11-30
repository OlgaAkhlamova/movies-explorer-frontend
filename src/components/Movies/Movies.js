import React from 'react';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className='movies'>
      <Header />
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