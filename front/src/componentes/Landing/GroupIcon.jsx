import PropTypes from "prop-types";
import "./GroupIcon.css";

const GroupIcon = ({ className = "" }) => {
  return (
    <img
      className={`card-items-child ${className}`}
      loading="lazy"
      alt=""
      src="/group-67.svg"
    />
  );
};

GroupIcon.propTypes = {
  className: PropTypes.string,
};

export default GroupIcon;
