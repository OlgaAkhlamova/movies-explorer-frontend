import React from 'react';
import './MoviesCard.css';
import poster1 from '../../../images/poster.jpg';

function MoviesCard() {
  return (
    <div className='card'>
      <img 
        className='card__image'
        src={poster1} 
        alt='постер фильма' 
      />
      <div className='card__pitch'>
        <h3 className='card__title'>
          Пи Джей Харви: A dog called money
        </h3>
        <button type='button' className='card__like' />
      </div>
      <p className='card__duration'>
        1ч 42мин
      </p>
    </div>
  );
}

export default MoviesCard