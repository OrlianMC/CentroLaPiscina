import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className="text">
        <div className="title">
          <h1>Contacto</h1>
        </div>
        <div className="info">
          <p>Telf: 53535093</p>
          <div className="icons">
            <a href="https://wa.me/53535093" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="wsp" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="fb" />
            </a>
          </div>
        </div>
      </div>
      <img src="/img/pool2.jpg" alt="Swimming pool" />
    </div>
  );
}

export default Contact;