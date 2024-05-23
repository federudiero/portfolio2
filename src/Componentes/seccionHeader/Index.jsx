
import imagen from "../../img/fede.jpeg";
import style from '../../Componentes/seccionHeader/seccionHeader.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactsIcon from '@mui/icons-material/Contacts';


function Index() {
  const iconStyle = {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    color: '#f7df1e' 
  };

  return (<>
    <div className={style.divContainer}>
    <div><h1 className={style.h1}>Fullstack Developer</h1></div>
      
      <div>

      <div className={style.divimgPortada} >
        <img className={style.imgPortada} src={imagen} alt="" />
      
      </div>
      <div className={style.divIcon}> 
<a href="https://www.linkedin.com/in/federico-rudiero"><LinkedInIcon style={iconStyle} /></a>
<a href="https://github.com/federudiero"><GitHubIcon style={iconStyle} /></a>

<a href="https://wa.me/message/MJCIY3UU4SYQD1"><WhatsAppIcon style={iconStyle} /></a>

      
      
      
      </div>

      </div>
    
    </div>
   
    </>
  );
}

export default Index;