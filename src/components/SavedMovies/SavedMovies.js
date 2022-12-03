import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
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