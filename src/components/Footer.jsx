import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
    </div>
  );
}

export default Footer;