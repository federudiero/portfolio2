
import NavBar   from "./Componentes/navBar/NavBar";
import Index   from "./Componentes/seccionHeader/Index";
import SeccionSkills   from "./Componentes/seccionSkills/SeccionSkills";
import SeccionAboutMe from "./Componentes/seccionAboutMe/SeccionAboutMe";
import SeccionProyectos from "./Componentes/seccionProyectos/SeccionProyectos";
import Certificados from "./Componentes/SeccionCertificados/Certificados";
import Footer from "./Componentes/footer/Footer";
import { BrowserRouter  } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Index/>
      <SeccionProyectos/>
      <SeccionSkills  />
      <SeccionAboutMe/>
      <Certificados/>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
