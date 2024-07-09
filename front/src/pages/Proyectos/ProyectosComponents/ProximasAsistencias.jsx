import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getUserResources } from '../../../utils/fetch';
import Courses from "../../Courses";
import cover1 from '../../../../public/proyecto1.png';
import cover2 from '../../../../public/proyecto2.png';
import cover3 from '../../../../public/proyecto3.png';

const ProximosAsistencias = ({ className = '' }) => {
  const [projects, setProjects] = useState([]);
  let fechaActual = Date.now();

  function checkProjectTime(project) {
    let fechaFinal = Date.parse(project.endDate);
    return fechaActual < fechaFinal; // El proyecto todavía no ha terminado
  }

  const fetchProjectsData = async () => {
    try {
      const projectsData = await getUserResources();
      const nextProjectsData = projectsData.filter(checkProjectTime);
      setProjects(nextProjectsData);
    } catch (error) {
      console.error('Error al obtener los recursos:', error.message);
    }
  };

  useEffect(() => {
    // Realiza la primera llamada para obtener los recursos
    fetchProjectsData();

    // Establece un intervalo para actualizar los recursos cada 30 segundos
    const intervalId = setInterval(fetchProjectsData, 3000000);

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
          <Courses
            key={project._id}
            img={covers[index % covers.length]} // Asigna una imagen de la lista de covers de manera cíclica
            name={project.name} // Ajusta de acuerdo a cómo se llame el campo en tus datos de proyecto
            startDate={project.startDate} // Ajusta de acuerdo a cómo se llame el campo en tus datos de proyecto
            modality={project.modality} // Ajusta de acuerdo a cómo se llame el campo en tus datos de proyecto
            availableSlots={project.availableSlots} // Ajusta de acuerdo a cómo se llame el campo en tus datos de proyecto
            price={project.price} // Ajusta de acuerdo a cómo se llame el campo en tus datos de proyecto
          />
        ))}
      </div>
    </section>
  );
};

ProximosAsistencias.propTypes = {
  className: PropTypes.string,
};

export default ProximosAsistencias;
