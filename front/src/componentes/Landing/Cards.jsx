import GroupComponent5 from "./GroupComponent5";
import GroupComponent4 from "./GroupComponent4";
import ArrowSplitIcon from "./ArrowSplitIcon";
import GroupIcon from "./GroupIcon";
import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";
import "./Cards.css";

const Cards = ({ className = "" }) => {
  return (
    <div className={`cards ${className}`}>
      <div className="voice-message">
        <GroupComponent5 />
      </div>
      <div className="card-items">
        <GroupComponent4 />
        <ArrowSplitIcon />
      </div>
      <div className="card-items1">
        <GroupIcon />
        <GroupComponent2 />
      </div>
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
};

export default Cards;
