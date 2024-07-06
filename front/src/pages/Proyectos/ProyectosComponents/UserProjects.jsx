import React, { useState, useEffect } from 'react';
import CardActivity from './CardActivity';
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getProjectByUserId } from '../../../utils/fetch';

const UserProjects = ({ className = '' }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await getProjectByUserId();
        console.log("Proyectos obtenidos:", projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error.message);
      }
    };
    fetchProjectsData();
  }, []);

  if (!Array.isArray(projects) || projects.length === 0) {
    return <div>No se encontraron proyectos.</div>;
  }

  return (
    <section className={`${styles.userProjects} ${className}`}>
      <h1 className={styles.misProyectos}>Mis proyectos</h1>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <CardActivity
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

UserProjects.propTypes = {
  className: PropTypes.string,
};

export default UserProjects;