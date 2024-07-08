import React from 'react';
import { Link } from "react-router-dom";
import iconUser from "../../public/icon_box.png";
import "./Courses.scss";

export default function Courses({ img, name, startDate, modality, availableSlots, price }) {
  const formattedDate = new Date(startDate).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className='card'>
      <img src={img} alt="banner" className='card-img' />
      <div>
        <div className='seccion1'>
          <h2>{name}</h2>
        </div>
        <div className='seccion2'>
          <p>{formattedDate}</p>
          <p className='gris'>{modality}</p>
          <p className='gris'><img src={iconUser} alt="" className='iconUser' /> Asistentes: 20</p>
          <p className='amarillo'><img src={iconUser} alt="" className='iconUser' /> Plazas Disponibles: {availableSlots}</p>
        </div>
        <div className='seccion3'>
          <p>Precio: <span>{price}€</span></p>
        </div>
      </div>
      <Link className="ver-mas" to={`/recursos/${name}`}>Ver Curso</Link>
    </div>
  );
}
