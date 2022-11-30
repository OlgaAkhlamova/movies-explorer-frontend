import React from 'react';
import './MoviesCardList.css';
import MoviesCard1 from '../MoviesCard/MoviesCard1';
import MoviesCard2 from '../MoviesCard/MoviesCard2';

function MoviesCardList() {
  return (
    <>
      <div className='movies'>
        <MoviesCard1 />
        <MoviesCard2 />
        <MoviesCard1 />
        <MoviesCard2 />
        <MoviesCard1 />
        <MoviesCard2 />
        <MoviesCard1 />
        <MoviesCard2 />
        <MoviesCard1 />
        <MoviesCard2 />
      </div>
    </>
);
}

export default MoviesCardList;