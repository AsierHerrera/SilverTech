import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.companyProfile}>
        <h1 className={styles.perfilDeEmpresa}>Perfil de empresa</h1>
        <div className={styles.profileDetails}>
          <div className={styles.profileDetailsInner}>
            <div className={styles.avatarBackgroundParent}>
              <img
                className={styles.avatarBackgroundIcon}
                alt=""
                src="/avatar-background@2x.png"
              />
              <img
                className={styles.avaIcon}
                loading="lazy"
                alt=""
                src="/ava@2x.png"
              />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileNameTime}>
              <div className={styles.nameTimeContainer}>
                <h1 className={styles.nikcname}>Zapaterías Lola</h1>
                <h3 className={styles.time}>Pequeño comercio de zapatería</h3>
              </div>
            </div>
            <div className={styles.profileContact}>
              <div className={styles.contactContainer}>
                <div className={styles.direccinNmeroCifContainer}>
                  <p className={styles.direccin}>Dirección:</p>
                  <p className={styles.nmeroCif}>Número CIF:</p>
                  <p className={styles.sitioWeb}>Sitio Web:</p>
                  <p className={styles.contacto}>Contacto</p>
                </div>
                <div className={styles.alcobendasMadridA12345678Container}>
                  <p className={styles.alcobendasMadrid}>Alcobendas, Madrid</p>
                  <p className={styles.a12345678}>A12345678</p>
                  <p className={styles.wwwzapateriaslolacom}>
                    www.zapateriaslola.com
                  </p>
                  <p className={styles.zapateriaslolanegociocom}>
                    zapateriaslola@negocio.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
