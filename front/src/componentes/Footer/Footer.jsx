import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer-big ${className}`}>
      <img
        className="footer-top-icon"
        loading="lazy"
        alt=""
        src="/frame-31@2x.png"
      />
      <div className="footer-content">
        <div className="footer-links">
          <div className="help">
            <b className="help-title">Ayuda</b>
            <div className="sub-links">
              <div className="text">Preguntas Frecuentes</div>
              <div className="text1">Más información</div>
            </div>
          </div>
          <div className="contact">
            <b className="contact-title">Contacta</b>
            <div className="contact-links">
              <div className="link">
                <img className="svg-icon6" alt="" src="/svg-6.svg" />
                <div className="infosilvertechcom">info@silvertech.com</div>
              </div>
              <div className="link1">
                <img className="svg-icon7" alt="" src="/svg-7.svg" />
                <div className="div2">+34 600 000 000</div>
              </div>
            </div>
            <div className="social-media">
              <div className="text2">Síguenos en:</div>
              <div className="social-media-icon">
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
                <img
                  className="social-media-placeholder"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="seniority-2023">© Seniority 2023</div>
        <div className="link2">Condiciones de Uso</div>
        <div className="link3">Política de privacidad</div>
        <div className="link4">Política de cookies</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
