import React from 'react';
import "./about.css";

function About() {
  return (
    <div className='about'>
      <img src="img/swiming.jpg"/>
      <div className="text">
      <h1>Proyecto "La Piscina"</h1>
      <p>
        El proyecto "La Piscina" en el encantador poblado de Alacranes representa un renacer lleno de esperanza y esfuerzo colectivo.
        Después de años de esplendor, la piscina cerró sus puertas, pero gracias al arduo trabajo y la dedicación de la comunidad, ha
        sido restaurada con gran sacrificio y perseverancia.
        <br /><br />
        Este ambicioso proyecto no solo busca revitalizar un espacio querido por todos, sino también ofrecer a los habitantes y visitantes
        de Alacranes una experiencia recreativa única. Con diversas ofertas y actividades, La Piscina está lista para convertirse en el
        corazón del pueblo, un lugar donde se celebran momentos de alegría, diversión y convivencia.
        <br /><br />
        Estamos emocionados de abrir nuevamente nuestras puertas y compartir este nuevo capítulo con todos, invitando a la comunidad
        a disfrutar de un espacio renovado y lleno de vida. ¡Ven y sé parte de esta nueva era en La Piscina de Alacranes!
      </p>
      </div>
    </div>
  );
}

export default About;