import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__row">
          <div>
            <a
            href="https://olgaakhlamova.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel='noreferrer'
            >
            Статичный сайт
            </a>
          </div>
          <div>
            <a
            href="https://olgaakhlamova.github.io/how-to-learn/"
            className="portfolio__arrow"
            target="_blank"
            rel='noreferrer'
            >
              &#8599;
            </a>
          </div>
        </li>
        <li className="portfolio__row">
          <div>
            <a
            href="https://olgaakhlamova.github.io/russian-travel/"
            className="portfolio__link"
            target="_blank"
            rel='noreferrer'
            >
              Адаптивный сайт
            </a>
          </div>
          <div>
            <a
            href="https://olgaakhlamova.github.io/russian-travel/" 
            className="portfolio__arrow"
            target="_blank"
            rel='noreferrer'
            >
              &#8599;
            </a>
          </div>
        </li>
        <li className="portfolio__row">
          <div>
            <a
            href=" https://best.rest.mesto.nomorepartiesxyz.ru"
            className="portfolio__link"
            target="_blank"
            rel='noreferrer'
            >
              Одностраничное приложение
            </a>
          </div>
          <div>
            <a
            href=" https://best.rest.mesto.nomorepartiesxyz.ru" 
            className="portfolio__arrow"
            target="_blank"
            rel='noreferrer'
            >&#8599;</a>
          </div>          
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;