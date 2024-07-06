import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardActivity = ({ project }) => {
  return (
    <div className='card'>
      {/* Banner de la imagen del proyecto (banner) */}
      {/* Ajusta la ruta de la imagen de fondo según corresponda */}
      <img src="/cover@2x.png" alt="" className='card-img'/> 

      {/* Sección 1: Título y progreso */}
      <div className='seccion1'>
        <h2>{project.title}</h2>
        {/* Mostrar los impactos esperados */}
      </div>

      {/* Sección 2: Detalles del proyecto */}
      <div className='seccion2'>
        {/* Fecha de inicio y detalles adicionales */}
        <p>{new Date(project.startDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })} - 19:00</p>
        <p className='gris'>{project.contactInfo}</p>
        <p className='gris'>{project.beneficiaries}</p>
      </div>

      {/* Sección 3: Información adicional */}
      <div className='seccion3'>
        <p>Precio: <span>{project.price} EURO</span></p>
      </div>

      {/* Botón para ver más detalles del proyecto */}
      <Link className="ver-mas" to={`/recursos/${project._id}`}>Ver Proyecto</Link>
    </div>
  );
};

CardActivity.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CardActivity;
