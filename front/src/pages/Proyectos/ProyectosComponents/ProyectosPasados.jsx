import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getProjectByUserId } from '../../../utils/fetch';
import Card2 from './Card2';
import cover1 from '../../../../public/proyecto1.png';
import cover2 from '../../../../public/proyecto2.png';
import cover3 from '../../../../public/proyecto3.png';

const ProyectosPasados = ({ className = '' }) => {
  const [projects, setProjects] = useState([]);
  let fechaActual = Date.now();

  function checkProjectTime(project) {
    let fechaFinal = Date.parse(project.endDate);
    return fechaActual > fechaFinal; // El proyecto todavía no ha terminado
  }

  const fetchProjectsData = async () => {
    try {
      const projectsData = await getProjectByUserId();
      const nextProjectsData = projectsData.filter(checkProjectTime);
      setProjects(nextProjectsData);
    } catch (error) {
      console.error('Error al obtener los proyectos:', error.message);
    }
  };

  useEffect(() => {
    // Realiza la primera llamada para obtener los proyectos
    fetchProjectsData();

    // Configura el polling para actualizar los proyectos cada 30 segundos (30000 ms)
    const intervalId = setInterval(fetchProjectsData, 500);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  if (!Array.isArray(projects)) {
    return <div>No se encontraron proyectos.</div>;
  }

  const covers = [cover1, cover2, cover3];

  return (
    <section className={`${styles.userProjects} ${className}`}>
      <div className={`${styles.projectsGrid} projectsGrid`}>
        {projects.map((project, index) => (
          <Card2
            key={project._id}
            img={covers[index % covers.length]} // Asigna una imagen de la lista de covers de manera cíclica
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

ProyectosPasados.propTypes = {
  className: PropTypes.string,
};

export default ProyectosPasados;
