import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  deLasEmpresasEspaolas,
  estnOrientadoSusProductos,
  alPblicoSnior,
}) => {
  return (
    <div className={`stats-bars-inner ${className}`}>
      <div className="group-div">
        <div className="de-las-empresas-espaolas-est-wrapper">
          <div className="de-las-empresas-container">
            <p className="de-las-empresas">{deLasEmpresasEspaolas}</p>
            <p className="estn-orientado-sus">{estnOrientadoSusProductos}</p>
            <p className="al-pblico-snior">{alPblicoSnior}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  deLasEmpresasEspaolas: PropTypes.string,
  estnOrientadoSusProductos: PropTypes.string,
  alPblicoSnior: PropTypes.string,
};

export default GroupComponent1;
