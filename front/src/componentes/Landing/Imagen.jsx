import PropTypes from "prop-types";
import "./Imagen.css";

const Imagen = ({ className = "" }) => {
  return (
    <img
      className={`image-8-icon ${className}`}
      alt=""
      src="/image-8@2x.png"
      data-scroll-to="image8"
    />
  );
};

Imagen.propTypes = {
  className: PropTypes.string,
};

export default Imagen;
