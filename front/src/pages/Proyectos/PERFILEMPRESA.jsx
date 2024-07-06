import { useCallback } from "react";
import Content from "./ProyectosComponents/Content";
import UserProjects from "./ProyectosComponents/UserProjects";
import  Card2 from './ProyectosComponents/Card2';
import styles from "./PERFILEMPRESA.module.css";
import "./ProyectosComponents/Components.scss"
import Footer2 from "../../componentes/Footer/Footer2";
import cover1 from "../../../public/proyecto1.png"
import cover2 from "../../../public/proyecto2.png"
import cover3 from "../../../public/proyecto3.png"

const PERFILEMPRESA = () => {
  const onButtonCrearCuentaContainerClick = useCallback(() => {
    // Please sync "Crear proyecto " to the project
  }, []);

  return (
    <>
    <div className={styles.perfilEmpresa}>
      <main className={styles.frameParent}>

        <Content />
        <section>
          <div id="proyecto-descripcion">
            <h2>Descripción</h2>
              <h3 >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
          </div>
        </section>

        <h2 id="mis-proyectos">Mis Proyectos</h2>

      {/*Dentro de este div mete las card generadas por el back y a esas card dile que llamen a Card2.scss para que se vean iguales a estas*/}
      <div id="lista-proyectos">
        <Card2 img={cover1} title={"Colaboración: Accesibilidad robótica"}/>
        <Card2 img={cover2} title={"Colaboración de comunicación "}/>
        <Card2 img={cover3} title={"Implementación de AI en diseños UX"}/>        
      </div>

        
        {/*<UserProjects />*/}
      </main>

    </div>      
    <div id="creacion-proyectos">
        <h1 >
          ¿Tienes una idea para un proyecto y quieres colaborar con esta
          empresa?
        </h1>
        <div >
          <h3 >
            Comienza un proyecto y colaborad juntos
          </h3>
          <div className={styles.buttonCrearCuenta} onClick={onButtonCrearCuentaContainerClick}>
            <div >
              Crear Proyecto Colaborativo
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  );
};

export default PERFILEMPRESA;
