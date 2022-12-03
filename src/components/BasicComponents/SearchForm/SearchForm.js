import React from 'react';
import './SearchForm.css';

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
        <input type='checkbox' name='shortmovie' id='short' />       
        <label for='short'className='form__label'>Короткометражки</label>
      </fieldset> 
    </form> 
  );
}

export default SearchForm
