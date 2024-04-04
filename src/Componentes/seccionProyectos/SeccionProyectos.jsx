import React from 'react'
import style from '../seccionProyectos/SeccionProyectos.module.css'
import limpiezaproyecto from '../../img/limpiezaproyecto.png'
import rjaProyecto from '../../img/rjaProyecto.png'
import blancasPiedras from '../../img/blancasPiedras.png'

function SeccionProyectos() {

  return (
<div className={style.divContainerPadre}>

<div className={style.divContainerH2}>
<h2 className={style.h2Proyectos}>Proyectos</h2>
</div>
    <div className={style.containerProyectos}>



    <div className="card w-96  w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-base-100 shadow-xl p-4">
    <figure className="px-100 pt-100">
    <img src={limpiezaproyecto} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">LimpiezaFR</h2>
    
    <div className="card-actions">
      <a href="https://master--limpiezafr.netlify.app/"><button className="btn btn-primary">ir al proyecto</button></a>
    </div>
  </div>
</div>


  
<div className="card w-96  w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-base-100 shadow-xl p-4">
    <figure className="px-100 pt-100">
    <img src={rjaProyecto} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">RJA ARIDOS</h2>
    
    <div className="card-actions">
      <a href="https://federudiero.github.io/RJA-ARIDOS/"><button className="btn btn-primary">ir al proyecto</button></a>
    </div>
  </div>
</div>

<div className="card w-96  w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-base-100 shadow-xl p-4">
    <figure className="px-100 pt-100">
    <img src={blancasPiedras} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">RJA ARIDOS</h2>
    
    <div className="card-actions">
      <a href="https://federudiero.github.io/proyecto-final/"><button className="btn btn-primary">ir al proyecto</button></a>
    </div>
  </div>
</div>

   


</div>
</div>


  )
}

export default SeccionProyectos