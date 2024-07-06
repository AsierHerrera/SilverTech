import React from 'react';
import { Link } from "react-router-dom";
import iconUser from "../../../../public/icon_box.png";
import "./Card2.scss"

export default function Card2 ({ img, title }) {
  return (
    <>
      <div className='card-proyecto'>          
        <img src={img} alt="banner" className='card-img'/> 
        <div>
          <div className='seccion1-proyecto'>
            <h2 >{title}</h2>
            {/*<p className='card-progress'>40</p>*/}      
          </div>
          <div className='seccion2-proyecto'>
            <p>20 de Julio 2024 - 19:00</p>
            <p className='gris'>Bilbao, Urazurrutia Kalea 3, 48003</p>
            <p className='gris'><img src={iconUser} alt="" className='iconUser'/> Asistentes: 60</p>
            <p className='amarillo'><img src={iconUser} alt="" className='iconUser'/> Plazas Disponible: 40</p>
          </div>
          <div className='seccion3-proyecto'>
            <p>Precio: <span>75 EURO</span></p>
          </div>          
        </div>

        <Link className="ver-proyecto" to={``}>Ver Eventos</Link>
      </div>
      
    </>
  )
};


