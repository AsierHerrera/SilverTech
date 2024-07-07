import React from 'react';
import { Link } from "react-router-dom";
import iconUser from "../../../../public/icon_box.png";
import "./Card2.scss";

export default function Card2({ img, project }) {
  return (
    <div className='card-proyecto'>          
      <img src={img} alt="banner" className='card-img'/> 
      <div>
        <div className='seccion1-proyecto'>
          <h2>{project.title}</h2>
          {/*<p className='card-progress'>40</p>*/}      
        </div>
        <div className='seccion2-proyecto'>
          <p>{project.startDate}</p>
          <p> Persona de contacto: {project.contactInfo}</p>
          <p className='gris'>{project.location}</p>
          <p className='gris'><img src={iconUser} alt="" className='iconUser'/> Asistentes: 60</p>
          <p className='amarillo'><img src={iconUser} alt="" className='iconUser'/> Plazas Disponible: 40</p>
        </div>
        <div className='seccion3-proyecto'>
          <p>Beneficiarios: <span>{project.beneficiaries} </span></p>
        </div>       
      </div>
        <Link className="ver-proyecto" to={`/recursos/${project._id}`}>Ver Eventos</Link>
    </div>
  );
};
