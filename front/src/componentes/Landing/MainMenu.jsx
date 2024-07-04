import PropTypes from "prop-types";
import styles from "./MainMenu.module.css";


const MainMenu = ({ className = "" }) => {
  return (
    <div className={[styles.mainMenu, className].join(" ")}>
      <div className={styles.linkMenu}>
        <div className={styles.linkText}>Inicio</div>
      </div>
      <div className={styles.linkMenu1}>
        <div className={styles.linkText1}>Contratación de expertos</div>
        <img className={styles.expandMoreIcon} alt="" src="/expand-more.svg" />
      </div>
      <div className={styles.linkMenu2}>
        <div className={styles.linkText2}>Recursos</div>
        <img className={styles.expandMoreIcon1} alt="" src="/expand-more.svg" />
      </div>
      <div className={styles.linkMenu3}>
        <div className={styles.linkText3}>Proyectos</div>
        <img className={styles.expandMoreIcon2} alt="" src="/expand-more.svg" />
      </div>
      <div className={styles.linkMenu4}>
        <div className={styles.linkText4}>Networking</div>
        <img className={styles.expandMoreIcon3} alt="" src="/expand-more.svg" />
      </div>
      <div className={styles.accountMenu}>
        <div className={styles.linkMenu5}>
          <img
            className={styles.accountCircleIcon}
            loading="lazy"
            alt=""
            src="/account-circle.svg"
          />
          <div className={styles.linkText5}>Perfil</div>
        </div>
        <img className={styles.expandMoreIcon4} alt="" src="/expand-more.svg" />
      </div>
      
    </div>
  );
};

MainMenu.propTypes = {
  className: PropTypes.string,
};

export default MainMenu;
