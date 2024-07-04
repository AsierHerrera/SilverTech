import PropTypes from "prop-types";
import styles from "./Image1.module.css";

const Image1 = ({ className = "" }) => {
  return (
    <div className={[styles.image4, className].join(" ")}>
      <img
        className={styles.image4Icon}
        loading="lazy"
        alt=""
        src="/image-4@2x.png"
      />
    </div>
  );
};

Image1.propTypes = {
  className: PropTypes.string,
};

export default Image1;
