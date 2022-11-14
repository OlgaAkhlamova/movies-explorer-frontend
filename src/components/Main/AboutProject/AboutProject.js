import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title" id="about-project">
        О проекте
      </h2>
      <div className="about-project__container">
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-text">
          Составление плана, работу над бэкендом, вёрстку, 
          добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-text">
          У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__tape">
        <div className="about-project__backend">
          <p className="about-project__backend-field">1 неделя</p>
          <p className="about-project__subtitle">Back-end</p>
        </div>
        <div className="about-project__frontend">
          <p className="about-project__frontend-field">4 недели</p>
          <p className="about-project__subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;