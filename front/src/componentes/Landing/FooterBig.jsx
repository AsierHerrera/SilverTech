import PropTypes from "prop-types";
import styles from "./FooterBig.module.css";

const FooterBig = ({ className = "" }) => {
  return (
    <footer className={[styles.footerBig, className].join(" ")}>
      <img className={styles.footerLeftIcon} alt="" src="/frame-31-1@2x.png" />
      <div className={styles.footerRight}>
        <div className={styles.footerContent}>
          <div className={styles.help}>
            <b className={styles.helpTitle}>Ayuda</b>
            <div className={styles.subLinks}>
              <div className={styles.helpLinkOne}>Preguntas Frecuentes</div>
              <div className={styles.helpLinkTwo}>Contactar</div>
            </div>
          </div>
          <div className={styles.contact}>
            <b className={styles.contactTitle}>Contacta</b>
            <div className={styles.contactLinks}>
              <div className={styles.link}>
                <img className={styles.svgIcon} alt="" src="/svg-6.svg" />
                <div className={styles.infosenioritycom}>
                  info@seniority.com
                </div>
              </div>
              <div className={styles.link1}>
                <img className={styles.svgIcon1} alt="" src="/svg-7.svg" />
                <div className={styles.div}>+34 600 000 000</div>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.text}>Síguenos en:</div>
              <div className={styles.socialIconContainer}>
                <img
                  className={styles.socialIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <img
                  className={styles.socialIconPlaceholder}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.seniority2024}>© Seniority 2024</div>
        <div className={styles.link2}>Condiciones de Uso</div>
        <div className={styles.link3}>Política de privacidad</div>
        <div className={styles.link4}>Política de cookies</div>
      </div>
    </footer>
  );
};

FooterBig.propTypes = {
  className: PropTypes.string,
};

export default FooterBig;
