import React from 'react';
import './SavedMovies.css';
import Header from '../BasicComponents/Header/Header';
import SearchForm from '../BasicComponents/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../BasicComponents/Footer/Footer';
import Navigation from '../BasicComponents/Navigation/Navigation';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <Header>
        <Navigation />
      </Header>
      <main className='saved-movies__main'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies