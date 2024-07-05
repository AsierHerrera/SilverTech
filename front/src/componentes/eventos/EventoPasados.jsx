import React from 'react';
import { Link } from "react-router-dom";
import iconUser from "../../../public/icon_box.png";
import "./EventoPasados.scss"

export default function EventoPasados({ img }) {
  return (
    <>
      <div className='card'>
        <img src={img} alt="banner" className='card-img'/> 
        <div className='seccion1'>
          <h2 >Cursos UX para las empresas</h2>
          <p className='card-progress'>40</p>          
        </div>
        <div className='seccion2'>
          <p>20 de Julio 2024 - 19:00</p>
          <p className='gris'>Bilbao, Urazurrutia Kalea 3 </p>
          <p className='gris'>48003</p>
          <p className='gris'><img src={iconUser} alt="" className='iconUser'/> Asistentes: 60</p>
        </div>
        <div className='seccion3'>
          
          <p>Precio: <span>75 EURO</span></p>
        </div>
        <Link className="ver-eventos-p" to={`/eventos/1`}>Ver Eventos</Link>
      </div>
      
    </>
  )
};


