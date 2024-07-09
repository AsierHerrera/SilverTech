import React, { useState, useEffect, useCallback } from 'react';
import Content from "./ProyectosComponents/Content";
import ProximosProyectos from "./ProyectosComponents/ProximosProyectos";
import ProyectosPasados from "./ProyectosComponents/ProyectosPasados";
import ProximosAsistencias from "./ProyectosComponents/ProximasAsistencias";
import AsistenciasPasados from "./ProyectosComponents/AsistenciasPasadas";
import styles from "./PERFILEMPRESA.module.css";
import "./ProyectosComponents/Components.scss"
import Footer2 from "../../componentes/Footer/Footer2";
import { Link } from "react-router-dom";

const PERFILEMPRESA = () => {
  const onButtonCrearCuentaContainerClick = useCallback(() => {
    // Please sync "Crear proyecto " to the project
  }, []);

  const [contenido, setContenido] = useState("proyectos");
  const [clase, setClase] = useState("elegido1");
  const [clase2, setClase2] = useState("");
  const [clase3, setClase3] = useState("elegido2");
  const [clase4, setClase4] = useState("");
  const [ocultar1, setOcultar1] = useState("");
  const [ocultar2, setOcultar2] = useState("oculto");
  const [ocultar3, setOcultar3] = useState("oculto");
  const [ocultar4, setOcultar4] = useState("oculto");

  const proyectosClick = () => {
      setContenido("proyectos");
      setClase("elegido1");
      setClase2("");
      setClase3("elegido2");
      setClase4("");
      setOcultar1("");
      setOcultar2("oculto");
      setOcultar3("oculto");
      setOcultar4("oculto");
  };

  const asistenciasClick = () => {
      setContenido("asistencias");
      setClase("");
      setClase2("elegido1");
      setClase3("elegido2");
      setClase4("");
      setOcultar1("oculto");
      setOcultar2("oculto");
      setOcultar3("");
      setOcultar4("oculto");
  };

  const proximosClick = () => {
    if (contenido === "proyectos") {
      setOcultar1("");
      setOcultar2("oculto");
    } else {
      setOcultar3("");
      setOcultar4("oculto");
    }
    setClase3("elegido2");
    setClase4("");
  };

  const pasadosClick = () => {
    if (contenido === "proyectos") {
      setOcultar1("oculto");
      setOcultar2("");
    } else {
      setOcultar3("oculto");
      setOcultar4("");
    }
    setClase3("");
    setClase4("elegido2");
  };

  return (
    <>
      <div className={styles.perfilEmpresa}>
        <main className={styles.frameParent}>
          <Content />
          <section>
            <div id="proyecto-descripcion">
              <h2>Descripción</h2>
              <h3>
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
          <div className="proyectos-asistencias">
            <div>
              <h2 id="misProyectos" className={clase} onClick={proyectosClick}>Mis Proyectos</h2>
              <h2 id="misAsistencias" className={clase2} onClick={asistenciasClick}>Mis asistencias</h2>
            </div>
            <div>
              <h3 id="proximos" className={clase3} onClick={proximosClick}>Próximos {contenido}</h3>
              <h3 id="pasados" className={clase4} onClick={pasadosClick}>Pasados {contenido}</h3>
            </div>
          </div>
          <div id="lista-proyectos">
            <ProximosProyectos className={ocultar1} />
            <ProyectosPasados className={ocultar2} />
            <ProximosAsistencias className={ocultar3} />
            <AsistenciasPasados className={ocultar4} />
          </div>
        </main>
      </div>
      <div id="creacion-proyectos">
        <h1>
          ¿Tienes una idea para un proyecto y quieres colaborar con esta
          empresa?
        </h1>
        <div>
          <h3>
            Comienza un proyecto y colaborad juntos
          </h3>
          <div className={styles.buttonCrearCuenta} onClick={onButtonCrearCuentaContainerClick}>
            <Link className={styles.pinchaAqui} to={`/crear-proyecto`}>Crear proyecto colaborativo</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PERFILEMPRESA;
