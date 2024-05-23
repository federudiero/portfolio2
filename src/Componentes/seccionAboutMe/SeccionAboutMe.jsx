import React from 'react';
import style from '../../Componentes/seccionAboutMe/SeccionAboutMe.module.css';
import withScrollEffect from '../../effectscroll/withScrollEffect.jsx';
import fede from '../../img/fede2.jpeg'

function SeccionAboutMe({ isVisible }) {
  return (
<div className={style.containerAboutMe}>
    <div className="card max-w-full sm:max-w-md lg:max-w-lg bg-base-100 shadow-xl p-4 border-t-4 border-teal-600">
  <figure className="px-4 sm:px-8 pt-4 sm:pt-8">
    <img src={fede} alt="LimpiezaFR" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center px-4 sm:px-8 py-4">
    <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
    <div className="text-left text-sm sm:text-base">
      <p className="mb-4">
        Soy Federico, un apasionado por la tecnología y los negocios. Con una sólida formación como técnico en computación y una amplia experiencia en roles de liderazgo y trabajo en equipo, por lo que he desarrollado habilidades de coordinación y compañerismo.
      </p>
      <p className="mb-4">
        Durante mi tiempo como técnico en computación, tuve el privilegio de desempeñarme como encargado del área, lo que me permitió liderar equipos y gestionar proyectos de manera efectiva. Esta experiencia me enseñó la importancia del liderazgo, la comunicación y el trabajo en conjunto para lograr objetivos desafiantes.
      </p>
      <p className="mb-4">
        Actualmente, soy propietario de mi propia empresa de venta de materiales áridos, donde me desempeño en el área de administración y de la cual he creado su página web. Esta experiencia me brindadó la oportunidad de desarrollar habilidades metodológicas y organizativas, así como una sólida comprensión del mercado y las estrategias de venta.
      </p>
      <p className="mb-4">
        Además de mi experiencia empresarial, también soy un apasionado del desarrollo web. He completado programas de estudio en instituciones como Soy Henry y Coder House, donde adquirí habilidades técnicas en desarrollo web y programación. Estoy constantemente buscando oportunidades para crecer profesionalmente y aplicar mis conocimientos en nuevos proyectos.
      </p>
      <p>
        Soy una persona comprometida, orientada a resultados y siempre dispuesta a enfrentar nuevos desafíos.
      </p>
    </div>
  </div>
</div>


</div>
    
  );
}

export default withScrollEffect(SeccionAboutMe);