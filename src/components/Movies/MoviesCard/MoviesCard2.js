import React from 'react';
import './MoviesCard.css';
import poster2 from '../../../images/poster2.jpg';

function MoviesCard() {
  return (
    <div className='card'>
      <img 
        className='card__image'
        src={poster2} 
        alt='постер фильма' 
      />
      <div className='card__pitch'>
        <h3 className='card__title'>
          Бег это свобода
        </h3>
        <button type='button' className='card__like_active' />
      </div>
      <p className='card__duration'>
        1ч 42мин
      </p>
    </div>
  );
}

export default MoviesCard