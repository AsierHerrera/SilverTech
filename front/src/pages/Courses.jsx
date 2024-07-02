import React from 'react';
import banner from "../../public/cover.png";
import "../pages/recursos/Recursos.scss";

const Courses = () => {
  return (
    <>
      <div className='card'>
        <img src={banner} alt="banner" className='card-img'/>
        <div className='seccion1'>
          <h2 >Cursos UX para las empresas</h2>
          <p className='card-progress'>100%</p>          
        </div>
        <div className='seccion2'>
          <p>Martes - 19:00</p>
          <p className='gris'>Bilbao</p>
        </div>
        <div className='seccion3'>
          <p className='gris'>👤 Asistentes: 60</p>
          <p>Precio: <span>75 EURO</span></p>
        </div>
        <p className='ver-mas'>Ver Curso</p>
      </div>
      
    </>
  )
};

export default Courses;
