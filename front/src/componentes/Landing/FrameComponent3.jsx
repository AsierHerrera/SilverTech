import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent ${className}`}>
      <div className="frame-child" />
      <div className="frame-parent5">
        <div className="tus-usuarios-senior-mejor-aten-wrapper">
          <h1 className="tus-usuarios-senior-container">
            <p className="tus-usuarios-senior">
              Tus usuarios senior mejor atendidos
            </p>
            <p className="con-tecnologia-amigable">con tecnologia amigable</p>
          </h1>
        </div>
        <b className="consultora-especializada-en-container">
          <p className="consultora-especializada-en">{`Consultora especializada en accesibilidad tecnológica `}</p>
          <p className="de-productos-y">
            de productos y servicios orientados al público sénior
          </p>
        </b>
      </div>
      <div className="button-hero-primary-wrapper">
        <button className="button-hero-primary1">
          <div className="link-text17">Más información</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
