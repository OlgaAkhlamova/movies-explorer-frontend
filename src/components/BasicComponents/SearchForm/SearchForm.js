import React from 'react';
import './SearchForm.css';
import checkboxoff from '../../images/smalltumboff.svg';

function SearchForm () {
  return (
    <form className='form-container'>
      <fieldset className='form__all'>
        <input 
          type='search'
          name='movie'
          className='form__input' 
          placeholder='Фильм' />
        <button className='form__button'>Найти</button>
      </fieldset>
      <fieldset className='form__short'>
        <input type='checkbox' name='shortmovie' id='short'>
          <img className='form__img'
            src={checkboxoff} />
        </input>
        <label for='short'className='form__label'>Короткометражки</label>
      </fieldset> 
    </form> 
  );
}

export default SearchForm
