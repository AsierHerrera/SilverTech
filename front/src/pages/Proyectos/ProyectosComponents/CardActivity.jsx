import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CardActivity.module.css';

const CardActivity = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>Card 2</div>
      <img src={project.imageUrl} alt="" className={styles.cardImg}/>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.date}>{new Date(project.startDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })} - 19:00</p>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.attendees}>
          <span className={styles.icon}>👤</span> Asistentes: {project.attendees}
        </p>
        <p className={styles.spots}>
          <span className={styles.icon}>🎟️</span> Plazas disponibles: {project.availableSpots}
        </p>
        <p className={styles.price}>Precio: <span>{project.price}€</span></p>
      </div>
      <Link className={styles.verMas} to={`/recursos/${project._id}`}>Ver más</Link>
    </div>
  );
};

CardActivity.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CardActivity;