import PropTypes from "prop-types";
import "./Cabecera.css";

const Cabecera = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <img
        className="navbar-blanco-1"
        loading="lazy"
        alt=""
        src="/navbar-blanco-1@2x.png"
      />
      <div className="link-menu3">
        <div className="link-text8">Idioma</div>
        <img className="expand-more-icon5" alt="" src="/expand-more.svg" />
      </div>
    </div>
  );
};

Cabecera.propTypes = {
  className: PropTypes.string,
};

export default Cabecera;
