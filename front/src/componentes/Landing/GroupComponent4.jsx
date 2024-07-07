import PropTypes from "prop-types";
import "./GroupComponent4.css";

const GroupComponent4 = ({ className = "" }) => {
  return (
    <div className={`dependes-mucho-de-whatsapp-par-parent ${className}`}>
      <div className="dependes-mucho-de-container">
        <p className="usas-un-programa">
          Usas un programa informático pero acabas
        </p>
        <p className="gestionando-muchas-tareas">
          gestionando muchas tareas manualmente por teléfono o por email.
        </p>
      </div>
      <img className="lift-to-talk-icon1" alt="" src="/lift-to-talk1.svg" />
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
