import React, { useState, useEffect } from 'react';
import CardActivity from './CardActivity';
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getProjectByUserId } from '../../../utils/fetch'; // Ajusta la ruta según corresponda

const UserProjects = ({ className = '' }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await getProjectByUserId(); // Obtener los proyectos del usuario
        console.log("Proyectos obtenidos:", projectsData);
        setProjects(projectsData); // Actualizar el estado con los proyectos obtenidos
      } catch (error) {
        console.error('Error al obtener los proyectos:', error.message);
        // Manejar el error según sea necesario
      }
    };

    fetchProjectsData();
  }, []);

  // Verificar si projects no es un array o está vacío
  if (!Array.isArray(projects) || projects.length === 0) {
    return <div>No se encontraron proyectos.</div>;
  }

  // Renderizar los proyectos si hay datos
  return (
    <section className={[styles.userProjects, className].join(' ')}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.misProyectos}>Mis proyectos</h1>
        <div className={styles.projectsList}>
          <div className={styles.projectCard}>
            {projects.map(project => (
              <CardActivity
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

UserProjects.propTypes = {
  className: PropTypes.string,
};

export default UserProjects;
