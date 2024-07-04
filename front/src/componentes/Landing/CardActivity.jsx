import PropTypes from "prop-types";
import styles from "./CardActivity.module.css";

const CardActivity = ({ className = "", text = "No Publicada" }) => {
  return (
  
    <div className={[styles.cardActivity, className].join(" ")}>
      <img
        className={styles.coverIcon}
        loading="lazy"
        alt=""
        src="/cover@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <b className={styles.creaJabonesArtesanos}>
            Crea jabones artesanos como los de antes
          </b>
        </div>
        <div className={styles.date}>
          <div className={styles.martesYJueves}>
            Martes y Jueves · 17:00-19:00
          </div>
        </div>
        <div className={styles.publicStatus}>
          <div className={styles.publicIconContainer}>
            <img
              className={styles.publicGlobeIcon}
              alt=""
              src="/public-globe.svg"
            />
            <div className={styles.activityStatus}>
              <b className={styles.noPublicada}>{text}</b>
            </div>
          </div>
          <div className={styles.moreOptions}>
            <img
              className={styles.moreHorizIcon}
              alt=""
              src="/more-horiz.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardActivity.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default CardActivity;
