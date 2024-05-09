import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
 
    const iconStyle = {
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      color: '#f7df1e' 
    };
  
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded " style={{borderTop: '4px solid #f7df1e'}}>
     
      <nav>
        <div className="grid grid-flow-col gap-4">
         
          <a href="https://www.linkedin.com/in/federico-rudiero"><LinkedInIcon style={iconStyle} /></a>
<a href="https://github.com/federudiero"><GitHubIcon style={iconStyle} /></a>

<a href="https://wa.me/message/MJCIY3UU4SYQD1"><WhatsAppIcon style={iconStyle} /></a>
      
        </div>
        <p>Gmail: federudiero@gmail.com </p>
        <a href="https://wa.me/message/MJCIY3UU4SYQD1"><p>celular: 03518120950 </p></a>
      </nav> 
      <aside>
        <p>Copyright © 2024 - Todos los derechos reservados por Developer - <CodeIcon/> / Federico Rudiero / <CodeIcon/> </p>
      </aside>
    </footer>
  );
}

export default Footer;
