import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`user-focus-icon-parent ${className}`}>
      <div className="user-focus-icon">
        <img
          className="digital-agility-icon"
          loading="lazy"
          alt=""
          src="/frame-person.svg"
        />
      </div>
      <div className="que-tus-usuarios-no-sean-gile-wrapper">
        <h1 className="que-tus-usuarios-container">
          <p className="que-tus-usuarios">{`Que tus usuarios no sean ágiles digitalmente, no significa que tengas que `}</p>
          <p className="prescindir-de-tecnologa-avanz">
            prescindir de tecnología avanzadada.
          </p>
        </h1>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
