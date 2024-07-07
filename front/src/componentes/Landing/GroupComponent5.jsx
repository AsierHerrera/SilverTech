import PropTypes from "prop-types";
import "./GroupComponent5.css";

const GroupComponent5 = ({ className = "" }) => {
  return (
    <div className={`voice-message-icon-parent ${className}`}>
      <div className="voice-message-icon">
        <img
          className="lift-to-talk-icon"
          loading="lazy"
          alt=""
          src="/lift-to-talk.svg"
        />
      </div>
      <div className="dependes-mucho-de">
        Dependes mucho de WhatsApp para la comunicación con tus usuarios y
        sientes que no eres todo lo productivo que podrías ser.
      </div>
    </div>
  );
};

GroupComponent5.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent5;
