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


import fede from '../../img/fede2.jpeg'

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
   
<div className={style.divContainer}>


{imagesLoaded && (
  <div className={style.divContainer}>
 

      <div className={style.divContainerHijo}>
     


      <div >
        <img className={style.imgSkils} src={html} alt="HTML" />
      
      </div>
      <div >
        <img className={style.imgSkils} src={javascript} alt="JavaScript" />
       
      </div>
      <div >
        <img className={style.imgSkils} src={css} alt="CSS" />
       
      </div>
      <div >
        <img className={style.imgSkils} src={react} alt="React" />
        
      </div>

      </div>




      <div className="card max-w-full sm:max-w-lg  shadow-xl p-4 " style={{borderTop: '4px solid #f7df1e'}}>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">About Me</h2>
  <figure className="px-4 sm:px-8 pt-4 sm:pt-8">
    <img src={fede} alt="LimpiezaFR" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center px-4 sm:px-8 py-4">
    
    <div className="text-left text-sm sm:text-base  " style={{ color: '#f7df1e' }} >
      <p className="mb-4">
        Soy Federico, un apasionado por la tecnología y los negocios. Con una sólida formación como técnico en computación y una amplia experiencia en roles de liderazgo y trabajo en equipo, por lo que he desarrollado habilidades de coordinación y compañerismo.
      </p>
      <p className="mb-4">
        Durante mi tiempo como técnico en computación, tuve el privilegio de desempeñarme como encargado del área, lo que me permitió liderar equipos y gestionar proyectos de manera efectiva. Esta experiencia me enseñó la importancia del liderazgo, la comunicación y el trabajo en conjunto para lograr objetivos desafiantes.
      </p>
      <p className="mb-4">
        Actualmente, soy propietario de mi propia empresa de venta de materiales áridos, donde me desempeño en el área de administración y de la cual he creado su página web. Esta experiencia me ha brindado la oportunidad de desarrollar habilidades metodológicas y organizativas, así como una sólida comprensión del mercado y las estrategias de venta.
      </p>
      <p className="mb-4">
        Además de mi experiencia empresarial, también soy un apasionado del desarrollo web. He completado programas de estudio en instituciones como Soy Henry y Coder House, donde adquirí habilidades técnicas en desarrollo web y programación. Estoy constantemente buscando oportunidades para crecer profesionalmente y aplicar mis conocimientos en nuevos proyectos.
      </p>
      <p>
        Soy una persona comprometida, orientada a resultados y siempre dispuesta a enfrentar nuevos desafíos. Constantemente buscando oportunidades para aprender y crecer tanto a nivel personal como profesional.
      </p>
    </div>
  </div>
</div>




<div className={style.divContainerHijo}>

      <div >
        <img className={style.imgSkils} src={bootstrap} alt="Bootstrap" />
       
      </div>
      <div >
        <img className={style.imgSkils} src={daisyui} alt="DaisyUI" />
        
      </div>
      <div >
        <img className={style.imgSkils} src={sequelize} alt="Sequelize" />
     
      </div>
      <div >
        <img className={style.imgSkils} src={github} alt="GitHub" />
        
      </div>
   

</div>


  



  </div>


)}


</div>



  );
}

export default SeccionSkills;