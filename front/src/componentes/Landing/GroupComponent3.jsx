import PropTypes from "prop-types";
import "./GroupComponent3.css";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div className={`dependes-mucho-de-whatsapp-par-group ${className}`}>
      <div className="dependes-mucho-de1">
        Tienes una web completa y un equipo informático pero ves que muchos
        usuarios se pierden, no entienden o acaban abandonando el sitio web.
      </div>
      <img className="lift-to-talk-icon2" alt="" src="/lift-to-talk2.svg" />
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
