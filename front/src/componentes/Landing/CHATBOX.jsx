import GroupComponent6 from "./GroupComponent6";
import PropTypes from "prop-types";
import "./CHATBOX.css";

const CHATBOX = ({ className = "" }) => {
  return (
    <div className={`chat-box1 ${className}`}>
      <div className="chat-background" />
      <div className="chat-search">
        <div className="search-input-background-parent">
          <div className="search-input-background" />
          <img
            className="carbonsearch-icon"
            loading="lazy"
            alt=""
            src="/carbonsearch.svg"
          />
        </div>
      </div>
      <div className="chat-messages">
        <div className="chat-message">
          <GroupComponent6 />
          <GroupComponent6 />
          <GroupComponent6 />
        </div>
      </div>
      <div className="outgoing-message-background-parent">
        <div className="outgoing-message-background" />
        <div className="iconoirprofile-circle-parent">
          <img
            className="iconoirprofile-circle"
            alt=""
            src="/iconoirprofilecircle.svg"
          />
          <div className="mensajera-wrapper">
            <div className="mensajera">Mensajería</div>
          </div>
          <div className="weuiarrow-filled-wrapper">
            <img
              className="weuiarrow-filled-icon"
              alt=""
              src="/weuiarrowfilled@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CHATBOX.propTypes = {
  className: PropTypes.string,
};

export default CHATBOX;
