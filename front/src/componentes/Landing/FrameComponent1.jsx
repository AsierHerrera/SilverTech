import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`inicio-inner1 ${className}`}>
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <div className="sabas-qu-wrapper">
          <div className="sabas-qu">¿Sabías qué...?</div>
        </div>
        <div className="stats-content">
          <div className="stats-bars">
            <div className="stats-bar-content">
              <div className="stats-bar-values">50%</div>
            </div>
            <GroupComponent1
              deLasEmpresasEspaolas="de las empresas españolas "
              estnOrientadoSusProductos="están orientado sus productos"
              alPblicoSnior=" al público sénior."
            />
          </div>
          <div className="stats-bars1">
            <div className="wrapper">
              <div className="div1">61%</div>
            </div>
            <GroupComponent1
              deLasEmpresasEspaolas="de personas mayores de 60 "
              estnOrientadoSusProductos="no han usado un servicio digital "
              alPblicoSnior="porque no sabían cómo utilizarlo."
            />
          </div>
          <div className="stats-bars2">
            <div className="container">
              <div className="div2">6%</div>
            </div>
            <GroupComponent1
              deLasEmpresasEspaolas="de las webs de la Admin. "
              estnOrientadoSusProductos="Pública cumple plenamente "
              alPblicoSnior="la directiva de accesibilidad."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
