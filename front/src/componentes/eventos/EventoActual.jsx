import React from 'react';
import { Link } from "react-router-dom";
import iconPlanet from "../../../public/icon_planet.png";
import "./EventoActual.scss"

export default function EventoActual({ img }) {
  return (
    <>
      <div className='card-evento'>
        <img src={img} alt="banner" className='card-img'/>
        <h2 >Nuevas Normativas de UX</h2>      
        <div className='evento-contenido'>
          <p>16 de Agosto 2024 / 15h30</p>
          <p >Bilbao, Urazurrutia Kalea 3, </p>
          <p >48003</p>
          <p > Asistentes: 50</p>
        </div>
        <div className="evento-detalles">
        <Link  to={`/eventos/1`}>Detalles</Link>            
        </div>

      </div>
      
    </>
  )
};
