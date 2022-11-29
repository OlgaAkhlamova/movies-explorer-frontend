import React from "react";
import studentPhoto from "../../../images/student-photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__container">
        <div className="about-me__left-column">
          <h3 className="about-me__subtitle">Ольга</h3>
          <p className="about-me__prof">
            Фронтенд - разработчик
          </p>
          <p className="about-me__text">
            Я родилась и живу в Москве, закончилa факультет электронной техники МЭИ.
            Есть семья. Люблю слушать музыку, мастерить и путешествовать. 
            Недавно увлеклась цифровыми профессиями - веб-дизайном, версткой, 
            захотелось полнее окунуться в новый вид деятельности. После того, как 
            прошла курс по веб-разработке, начала заниматься фриланс-заказами 
            и ушла с постоянной работы.
          </p>
          <a 
            className="about-me__link" 
            href="https://github.com/OlgaAkhlamova" 
            target="_blanc" 
            rel='noreferrer'>
            Github
          </a>
        </div>
        <div className="about-me__right-column">
          <img 
            className="about-me__photo"
            src={studentPhoto} 
            alt="фото студента" 
          />
        </div>   
      </div>
    </section>
  );
}

export default AboutMe;