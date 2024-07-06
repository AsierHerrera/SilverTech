import React from 'react';
import banner from "../../public/cover.png";
import "../pages/recursos/Recursos.scss";
import { Link } from "react-router-dom";
import iconUser from "../../public/icon_box.png";
import "./Courses.scss"

export default function Courses({ img }) {
  return (
    <>
      <div className='card'>          
        <img src={img} alt="banner" className='card-img'/>
        <div>
          <div className='seccion1'>
            <h2 >Cursos Lorem Ipsum</h2>
            {/*<p className='card-progress'>40</p>*/}     
          </div>
          <div className='seccion2'>
            <p>20 de Julio 2024 - 19:00</p>
            <p className='gris'>Bilbao, Urazurrutia Kalea 3 </p>
            <p className='gris'>48003</p>
            <p className='gris'><img src={iconUser} alt="" className='iconUser'/> Asistentes: 60</p>
            <p className='amarillo'><img src={iconUser} alt="" className='iconUser'/> Plazas Disponibles: 40</p>
          </div>
          <div className='seccion3'>
            
            <p>Precio: <span>75€</span></p>
          </div>          
        </div>

        <Link className="ver-mas" to={`/recursos/1`}>Ver Curso</Link>
      </div>
      
    </>
  )
};


