import PropTypes from "prop-types";
import styles from "./CardActivity.module.css";

const CardActivity = ({ className = "" }) => {
  return (
    <div className={[styles.cardActivity, className].join(" ")}>
      <img
        className={styles.coverIcon}
        loading="lazy"
        alt=""
        src="/cover@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.cardInfo}>
          <div className={styles.projectHeader}>
            <div className={styles.title}>
              <h3 className={styles.colaboracinParaCreacin}>
                Colaboración para creación de moda senior
              </h3>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <b className={styles.b}> 40</b>
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.fechaDeInicio}>
              Fecha de inicio: 20/04/2024
            </div>
            <div className={styles.fechaDeCierre}>
              Fecha de cierre: 20/05/2024
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.projectParticipants}>
              <img
                className={styles.personIcon}
                loading="lazy"
                alt=""
                src="/person.svg"
              />
              <div className={styles.participantes}>4 Participantes</div>
            </div>
            <div className={styles.projectInfo} />
          </div>
        </div>
        <button className={styles.projectLink}>
          <b className={styles.verCurso}>Ver Curso</b>
        </button>
      </div>
    </div>
  );
};

CardActivity.propTypes = {
  className: PropTypes.string,
};

export default CardActivity;
