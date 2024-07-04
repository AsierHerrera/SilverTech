import React from 'react';
import banner from "../../../../public/cover.png";
import "./CardActivity.module.scss";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className='card'>
        <img src={banner} alt="banner" className='card-img'/>
        <div className='seccion1'>
          <h2 >Cursos UX para las empresas</h2>
          <p className='card-progress'>40</p>          
        </div>
        <div className='seccion2'>
          <p>20 de Julio 2024 - 19:00</p>
          <p className='gris'>Bilbao, Urazurrutia Kalea 3Â</p>
          <p className='gris'>48003</p>
          <p className='gris'> Asistentes: 60</p>
        </div>
        <div className='seccion3'>
          
          <p>Precio: <span>75 EURO</span></p>
        </div>
        <Link className="ver-mas" to={`/recursos/1`}>Ver Curso</Link>
      </div>
      
    </>
  )
};

export default Courses;