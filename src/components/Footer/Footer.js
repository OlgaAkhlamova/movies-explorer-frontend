import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy;&nbsp; 2022</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/OlgaAkhlamova"
            className="footer__link"
            target="_blank"
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;