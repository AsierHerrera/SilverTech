import CardActivity from "./CardActivity";
import PropTypes from "prop-types";
import styles from "./UserProjects.module.css";

const UserProjects = ({ className = "" }) => {
  return (
    <section className={[styles.userProjects, className].join(" ")}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.misProyectos}>Mis proyectos</h1>
        <div className={styles.projectsList}>
          <div className={styles.projectCard}>
            <CardActivity />
            <CardActivity />
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
