import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`pioneers-description-parent ${className}`}>
      <div className="pioneers-description">
        <div className="pioneers-description-child" />
        <div className="somos-pioneros-en-desarrollar-wrapper">
          <h1 className="somos-pioneros-en-container">
            <p className="somos-pioneros-en">
              Somos pioneros en desarrollar productos tecnológicos
            </p>
            <p className="para-personas-senior">para personas senior</p>
          </h1>
        </div>
        <b className="descubre-nuestra-plataforma-container">
          <p className="descubre-nuestra-plataforma">
            Descubre nuestra plataforma de reservas y pasarela de pago para
            pequeñas empresas
          </p>
        </b>
      </div>
      <div className="pioneers-button">
        <div className="pioneers-button-child" />
        <button className="button-hero-primary2">
          <div className="link-text18">Saber más</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
