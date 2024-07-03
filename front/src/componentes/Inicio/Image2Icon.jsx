import PropTypes from "prop-types";
import styles from "./Image2Icon.module.css";

const Image2Icon = ({ className = "" }) => {
  return (
    <img
      className={[styles.image2Icon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/image-2@2x.png"
    />
  );
};

Image2Icon.propTypes = {
  className: PropTypes.string,
};

export default Image2Icon;
