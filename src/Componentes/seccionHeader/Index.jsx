
import imagen from "../../img/fede.jpeg";
import style from '../../Componentes/seccionHeader/seccionHeader.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Index() {
 

  return (<>
    <div className={style.divContainer}>
    <div><h1 className={style.h1}>Fullstack Developer</h1></div>
      
      <div>

      <div className={style.divimgPortada} >
        <img className={style.imgPortada} src={imagen} alt="" />
      
      </div>
      <div> <LinkedInIcon/>
      <GitHubIcon/>
      <InstagramIcon/>
      </div>

      </div>
    
    </div>
   
    </>
  );
}

export default Index;