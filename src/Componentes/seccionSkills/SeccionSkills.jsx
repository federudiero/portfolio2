import React, { useState, useEffect } from 'react';
import style from './SeccionSkills.module.css';
import javascript from '../../img/javascript.png';
import css from '../../img/css.png';
import html from '../../img/html.png';
import react from '../../img/react.png';
import daisyui from '../../img/daisyui-logomark-1024-1024.png';
import sequelize from '../../img/sequelize.png';
import bootstrap from '../../img/Bootstrap_logo.svg.png';
import github from '../../img/GITHUB.png';

function SeccionSkills() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const images = [javascript, css, html, react, daisyui, sequelize, bootstrap, github];
      const promises = images.map(imageSrc => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageSrc;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(promises)
        .then(() => setImagesLoaded(true))
        .catch(error => console.error('Error preloading images:', error));
    };

    preloadImages();
  }, []);

  return (
    <div className={`${style.divContainer} ${!imagesLoaded && style.loading}`}>
      <div>
        <h2 className={style.h2TituloSkills}>Skills</h2>
      </div>
      {imagesLoaded && (
        <div className={style.divContainerKlis}>
          <div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={html} alt="HTML" />
              <h2 className={style.h2Skills}>HTML</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={javascript} alt="JavaScript" />
              <h2 className={style.h2Skills}>JavaScript</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={css} alt="CSS" />
              <h2 className={style.h2Skills}>CSS</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={react} alt="React" />
              <h2 className={style.h2Skills}>React</h2>
            </div>
          </div>
          <div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={bootstrap} alt="Bootstrap" />
              <h2 className={style.h2Skills}>Bootstrap</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={daisyui} alt="DaisyUI" />
              <h2 className={style.h2Skills}>DaisyUI</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={sequelize} alt="Sequelize" />
              <h2 className={style.h2Skills}>Sequelize</h2>
            </div>
            <div className={style.divHijoNombreImg}>
              <img className={style.imgSkils} src={github} alt="GitHub" />
              <h2 className={style.h2Skills}>GitHub</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeccionSkills;