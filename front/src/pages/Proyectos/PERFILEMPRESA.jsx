import { useCallback } from "react";
import Content from "./ProyectosComponents/Content";
import UserProjects from "./ProyectosComponents/UserProjects";
import styles from "./PERFILEMPRESA.module.css";

const PERFILEMPRESA = () => {
  const onButtonCrearCuentaContainerClick = useCallback(() => {
    // Please sync "Crear proyecto " to the project
  }, []);

  return (
    <div className={styles.perfilEmpresa}>
      <main className={styles.frameParent}>

        <Content />
        <section className={styles.profileDescription}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.descripcin}>Descripción</h1>
            <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
              <h3 className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
            </div>
          </div>
        </section>
        <UserProjects />
      </main>
      <div className={styles.projectCallToAction}>
        <h1 className={styles.tienesUnaIdea}>
          ¿Tienes una idea para un proyecto y quieres colaborar con esta
          empresa?
        </h1>
        <div className={styles.projectProposal}>
          <h3 className={styles.comienzaUnProyecto}>
            Comienza un proyecto y colaborad juntos
          </h3>
          <div
            className={styles.buttonCrearCuenta}
            onClick={onButtonCrearCuentaContainerClick}
          >
            <div className={styles.createProjectLink}>
              Crear Proyecto Colaborativo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PERFILEMPRESA;
