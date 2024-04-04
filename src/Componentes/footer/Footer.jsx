import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
  <Link
          to={`/nosotros`}
          
          className="btn btn-ghost text-xl"
        >
         Nosotros
        </Link>
        <Link
          to={`/nosotros`}
          
          className="btn btn-ghost text-xl"
        >
         Contacto
        </Link>
   
  </nav> 
  <nav>
  <div className="grid grid-flow-col gap-4">
  <a href="https://wa.me/message/MJCIY3UU4SYQD1" target="_blank">
    <WhatsAppIcon/>
  </a>
  
</div>


  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Developer- <CodeIcon/> / Federico Rudiero / <CodeIcon/> </p>
  </aside>
</footer>
  )
}

export default Footer  