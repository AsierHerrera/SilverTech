import PropTypes from "prop-types";
import "./GroupComponent6.css";

const GroupComponent6 = ({ className = "" }) => {
  return (
    <div className={`chat-message-backgrounds-parent ${className}`}>
      <div className="chat-message-backgrounds" />
      <img
        className="chat-message-icons"
        loading="lazy"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <div className="chat-message-user-wrapper">
        <div className="chat-message-user">
          <b className="carlos-garca">Carlos García</b>
          <div className="silvereconomygroup">Silvereconomygroup</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent6.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent6;
