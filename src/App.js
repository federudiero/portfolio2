import React from 'react';
import ParticleBackground from './Componentes/ParticleBackground';
import Index from './Componentes/seccionHeader/Index';
import SeccionSkills from './Componentes/seccionSkills/SeccionSkills';
import SeccionProyectos from './Componentes/seccionProyectos/SeccionProyectos';
import Certificados from './Componentes/SeccionCertificados/Certificados';
import Footer from './Componentes/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ParticleBackground /> {/* Renderiza ParticleBackground como fondo de partículas */}
        <Index />
        <SeccionProyectos />
        <SeccionSkills />
        <Certificados />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
