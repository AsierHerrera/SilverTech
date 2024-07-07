import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getProjectByUserId } from '../../../utils/fetch';
import Card2 from './Card2';
import cover1 from "../../../../public/proyecto1.png"
import cover2 from "../../../../public/proyecto2.png"
import cover3 from "../../../../public/proyecto3.png"

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

  const covers = [cover1, cover2, cover3];

  return (
    <section className={`${styles.userProjects} ${className}`}>
      <h1 className={styles.misProyectos}>Mis proyectos</h1> <br /><br />
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

UserProjects.propTypes = {
  className: PropTypes.string,
};

export default UserProjects;
