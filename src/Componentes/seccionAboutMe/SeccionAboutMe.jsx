import React from 'react';
import style from '../../Componentes/seccionAboutMe/SeccionAboutMe.module.css';
import withScrollEffect from '../../effectscroll/withScrollEffect.jsx';
import fede from '../../img/fede2.jpeg'

function SeccionAboutMe({ isVisible }) {
  return (
    <div className={style.divContainerAboutMe }>
      <div className={style.divAoutMeH3H4}>
        <h3 className={style.h3Aboutme}>About me</h3>
       
      </div>
      <div className={style.divAoutMeH3H4}>
        <h4 className={style.h4AboutMe}>Soy Federico, un apasionado por la tecnología y los negocios. Con una sólida formación como técnico en computación y una amplia experiencia en roles de liderazgo y trabajo en equipo, por lo que he desarrollado habilidades de coordinación y compañerismo.

Durante mi tiempo como técnico en computación, tuve el privilegio de desempeñarme como encargado del área, lo que me permitió liderar equipos y gestionar proyectos de manera efectiva. Esta experiencia me enseñó la importancia del liderazgo, la comunicación y el trabajo en conjunto para lograr objetivos desafiantes.

Actualmente, soy propietario de mi propia empresa de venta de materiales áridos, donde me desempeño en el área de ventas , administración y de la cual he creado su pagina web. Esta experiencia me ha brindado la oportunidad de desarrollar habilidades metodológicas y organizativas, así como una sólida comprensión del mercado y las estrategias de venta.

Además de mi experiencia empresarial, también soy un apasionado del desarrollo web. He completado programas de estudio en instituciones como Soy Henry y Coder House, donde adquirí habilidades técnicas en desarrollo web y programación. Estoy constantemente buscando oportunidades para crecer profesionalmente y aplicar mis conocimientos en nuevos proyectos .

Soy una persona comprometida, orientada a resultados y siempre dispuesta a enfrentar nuevos desafíos. Constantemente buscando oportunidades para aprender y crecer tanto a nivel personal como profesional.</h4>
      </div>
    </div>
  );
}

export default withScrollEffect(SeccionAboutMe);