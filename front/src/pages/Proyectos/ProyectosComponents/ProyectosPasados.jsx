import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../../../context/userContext";
import PropTypes from 'prop-types';
import styles from './UserProjects.module.css';
import { getProjectByUserId } from '../../../utils/fetch';
import Card2 from './Card2';
import cover1 from "../../../../public/proyecto1.png"
import cover2 from "../../../../public/proyecto2.png"
import cover3 from "../../../../public/proyecto3.png"

const ProyectosPasados = ({ className = '' }) => {
    const { user } = useContext(UserContext);
    const [projects, setProjects] = useState([]);
    let fechaActual = Date.now();


    function checkProject(project) {
        return user._id == project.createdBy;
    }

    function checkProjectTime(project) {
        let fechaFinal = Date.parse(project.endDate)
        return fechaActual > fechaFinal;
        // el proyecto ha terminado
    }


  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await getProjectByUserId();
        const isProjectsData = projectsData.filter(checkProject);
        const passProjectsData = isProjectsData.filter(checkProjectTime);

        console.log("user id ", user._id)
        console.log("createBY", projectsData[0].createdBy)

        console.log("Proyectos pasados obtenidos:", passProjectsData);
        setProjects(passProjectsData);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error.message);
      }
    };
    fetchProjectsData();
  }, []);

  if (!Array.isArray(projects) ) {
    return <div>No se encontraron proyectos.</div>;
  }

  const covers = [cover1, cover2, cover3];

  return (
    <section className={`${styles.userProjects} ${className}`}>
      {/*<h1 className={styles.misProyectos}>Mis proyectos</h1> <br /><br />*/}
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
