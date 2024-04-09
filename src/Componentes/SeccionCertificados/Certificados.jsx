import React from 'react';
import javascript from '../../img/javascriptc.png';
import desarrolloweb from '../../img/desarrolloweb.png';
import certificadoSoyHenry from '../../img/certificadoSoyHenry.png';
import reactjs from '../../img/reactjs.png';
import carreradedesarrolladorfullstack from '../../img/carreradedesarrolladorfullstack.png';
import programacionBackend from '../../img/programacionBackend.png';
import style from '../../Componentes/SeccionCertificados/Certificados.module.css';

function Certificados() {
  return (
    <>
      <h2 className={style.h2Certificados}>Certificados</h2>

      <div className={style.divHenry}>
        <div className={style.divContainerHijoCertificados}>
          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={javascript} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en javascript</h2>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={certificadoSoyHenry} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en Soy Henry</h2>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={desarrolloweb} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en Desarrollo web</h2>
            </div>
          </div>
        </div>

        <div className={style.divContainerHijoCertificados}>
          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={reactjs} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en React js</h2>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={carreradedesarrolladorfullstack} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en Desarrollo FullStack</h2>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl border-t-4 border-teal-600">
            <figure className="px-100 pt-100">
              <img src={programacionBackend} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Certificaion en Programacion Backend</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificados;
