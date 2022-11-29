import React from 'react';
import landingLogo from '../../../images/landing-logo.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo__container'>
      <div className='promo__table'>
        <div className='promo__table-left'>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#technic">
            <button 
              type="button"  
              className="promo__button" 
              title="Узнать больше. Пока не нажмешь - не узнаешь 0_0">
              Узнать больше
            </button>
          </a>
        </div>
        <div className='promo__table-right'>
          <img
            className="promo__logo" 
            src={landingLogo} 
            alt="Силуэт земного шара, составленный из слова веб "
            name="landing__logo" 
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;