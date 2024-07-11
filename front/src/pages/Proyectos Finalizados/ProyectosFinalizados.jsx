import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Elipse2 from "../../../public/Ellipse 2.png";
import styles from "./ProyectosFinalizados.module.css";
import Card2 from '../Proyectos/ProyectosComponents/Card2';
import { getProjectByUserId } from '../../utils/fetch';
import { Link } from 'react-router-dom';
import cover1 from "../../../public/proyecto1.png";
import cover2 from "../../../public/proyecto2.png";
import cover3 from "../../../public/proyecto3.png";

const ProyectosFinalizados = ({ className = '' }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await getProjectByUserId();        
        setProjects(projectsData);
        //console.log("Proyectos renderizados", projects)
      } catch (error) {
        console.error('Error al obtener los proyectos:', error.message);
      }
    };

    fetchProjectsData();
  }, []);

  if (projects.length === 0) {
    return <div>Cargando proyectos...</div>;
  }

  const covers = [cover1, cover2, cover3];

  return (
    <>
      <section>
        <div className={[styles.container, className].join(' ')}>
          <div className={styles.breadcrumb}>Inicio {'>'} Proyectos</div>
          <div className={styles.banner}>
            <div className={styles.text}>
              <h1>
                Descubre proyectos y conecta con otras empresas <br/>
                para <span>transformar la vida de las personas mayores.</span>
              </h1>
            </div>
            <div className={styles.imageContainer}>
              <img src={Elipse2} alt="banner" className={styles.image}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.cuerpoprincipal}>Nuevos proyectos que buscan colaboradores</h3>    
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Card2 key={project._id} img={covers[index % covers.length]} project={project} />
          ))}
        </div>
      </section>
      <section>
        <div className={[styles.container, className].join(' ')}>
          <div className={styles.banner2}>
            <div className={styles.text}>
              <h1>
                ¿Tienes una idea para <br /> un proyecto y buscas <br /> ayuda para cumplirlo?
              </h1>
            </div>
            <div className={styles.text}>
              <h1>
                ¡PINCHA AQUI!
              </h1>
              <Link className={styles.pinchaAqui} to={`/crear-proyecto`}>Ver más</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.cuerpoprincipal}>Proyectos finalizados</h3>    
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Card2 key={project._id} img={covers[index % covers.length]} project={project} />
          ))}
        </div>
      </section>
      <section>
        <div className={[styles.container, className].join(' ')}>
          <div className={styles.banner3}>
            <div className={styles.text}>
              <h1 className={styles.legal}>
                Accede a nuestros documentos legales y de confidencialidad. 
              </h1>
              <Link className={styles.pinchaAqui2} to={`/documentacion-legal-accesibilidad`}>Ver más</Link>
            </div>
            <div className={styles.text}>
              <h1 className={styles.tranquilidad}>
                Asegura tu información. ¡Protege tus datos y colabora con tranquilidad!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProyectosFinalizados.propTypes = {
  className: PropTypes.string,
};

export default ProyectosFinalizados;
