import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="technic">
      <h2 className="techs__title">
        Технологии
      </h2>
      <div className="techs__container">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-info">HTML</li>
          <li className="techs__list-info">CSS</li>
          <li className="techs__list-info">JS</li>
          <li className="techs__list-info">React</li>
          <li className="techs__list-info">Git</li>
          <li className="techs__list-info">Express.js</li>
          <li className="techs__list-info">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;