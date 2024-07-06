import PropTypes from "prop-types";
import "./ArrowSplitIcon.css";

const ArrowSplitIcon = ({ className = "" }) => {
  return (
    <img
      className={`arrow-split-icon ${className}`}
      loading="lazy"
      alt=""
      src="/arrow-split.svg"
    />
  );
};

ArrowSplitIcon.propTypes = {
  className: PropTypes.string,
};

export default ArrowSplitIcon;
