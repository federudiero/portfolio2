import React from 'react';
import style from '../seccionProyectos/SeccionProyectos.module.css';
import limpiezaproyecto from '../../img/limpiezaproyecto.png';
import rjaProyecto from '../../img/rjaProyecto.png';
import blancasPiedras from '../../img/blancasPiedras.png';

function SeccionProyectos() {
  return (
    <div className={style.divContainerPadre}>
      <div className={style.divContainerH2}>
        <h2 className={style.h2Proyectos}>Proyectos</h2>
      </div>
      <div className={style.containerProyectos}>

      <div className="card w-64 sm:w-72 md:w-80 lg:w-80 shadow-xl p-4 " style={{borderTop: '4px solid #f7df1e'}}>
        <figure className="px-100 pt-100">
          <img src={limpiezaproyecto} alt="LimpiezaFR" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">LimpiezaFR</h2>
          <div className="card-actions">
            <a href="https://master--limpiezafr.netlify.app/">
              <button className={style.buttonColor}>Ir al proyecto</button>
            </a>
          </div>
        </div>
      </div>
      <div className="card w-64 sm:w-72 md:w-80 lg:w-80 shadow-xl p-4 " style={{borderTop: '4px solid #f7df1e'}}>
        <figure className="px-100 pt-100">
          <img src={rjaProyecto} alt="RJA ARIDOS" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">RJA ARIDOS</h2>
          <div className="card-actions">
            <a href="https://federudiero.github.io/RJA-ARIDOS/">
              <button className={style.buttonColor}>Ir al proyecto</button>
            </a>
          </div>
        </div>
      </div>
      <div className="card w-64 sm:w-72 md:w-80 lg:w-80 shadow-xl p-4 " style={{borderTop: '4px solid #f7df1e'}}>
        <figure className="px-100 pt-100">
          <img src={blancasPiedras} alt="Blancas Piedras" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Blancas Piedras</h2>
          <div className="card-actions">
            <a href="https://federudiero.github.io/proyecto-final/">
              <button className={style.buttonColor}>Ir al proyecto</button>
            </a>
          </div>
        </div>
      </div>



      </div>
     
      
    </div>
  );
}

export default SeccionProyectos;
