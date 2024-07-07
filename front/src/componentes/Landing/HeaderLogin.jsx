import PropTypes from "prop-types";
import "./HeaderLogin.css";

const HeaderLogin = ({ className = "" }) => {
  return (
    <div className={`header-login ${className}`}>
      <div className="logo">
        <img
          className="navbar-blanco-1"
          loading="lazy"
          alt=""
          src="/navbar-blanco-1@2x.png"
        />
        <div className="link-menu4">
          <div className="link-text9">Idioma</div>
          <img className="expand-more-icon5" alt="" src="/expand-more.svg" />
        </div>
      </div>
      <header className="menu">
        <div className="main-menu">
          <div className="link-menu5">
            <div className="link-text10">Inicio</div>
          </div>
          <div className="link-menu6">
            <div className="link-text11">Contratación de expertos</div>
            <img
              className="expand-more-icon6"
              alt=""
              src="/expand-more-1.svg"
            />
          </div>
          <div className="link-menu7">
            <div className="link-text12">Recursos</div>
            <img
              className="expand-more-icon7"
              alt=""
              src="/expand-more-2.svg"
            />
          </div>
          <div className="link-menu8">
            <div className="link-text13">Proyectos</div>
            <img
              className="expand-more-icon8"
              alt=""
              src="/expand-more-3.svg"
            />
          </div>
          <div className="link-menu9">
            <div className="link-text14">Networking</div>
            <img
              className="expand-more-icon9"
              alt=""
              src="/expand-more-4.svg"
            />
          </div>
          <div className="link-menu-group">
            <div className="link-menu10">
              <img
                className="account-circle-icon1"
                alt=""
                src="/account-circle.svg"
              />
              <div className="link-text15">Perfil</div>
            </div>
            <img
              className="expand-more-icon10"
              alt=""
              src="/expand-more-5.svg"
            />
          </div>
        </div>
        <div className="secodary-menu1">
          <div className="frame-parent4">
            <div className="frame-wrapper2">
              <div className="link-menu-container">
                <div className="link-menu11">
                  <div className="search-container">
                    <img className="search-icon1" alt="" src="/search.svg" />
                  </div>
                  <div className="link-text16">{`Buscar `}</div>
                </div>
              </div>
            </div>
            <div className="filtros1">
              <div className="divdirectoryfilters-eachdeskt-parent">
                <div className="divdirectoryfilters-eachdeskt">
                  <b className="categora">Categoría</b>
                  <img className="svg-icon2" alt="" src="/svg.svg" />
                </div>
                <div className="divdirectoryfilters-eachdeskt1">
                  <b className="disponibilidad">Disponibilidad</b>
                  <img className="svg-icon3" alt="" src="/svg-1.svg" />
                </div>
                <div className="divdirectoryfilters-eachdeskt2">
                  <b className="formato">Formato</b>
                  <img className="svg-icon4" alt="" src="/svg-2.svg" />
                </div>
                <div className="divdirectoryfilters-eachdeskt3">
                  <b className="precio">Precio</b>
                  <img className="svg-icon5" alt="" src="/svg-3.svg" />
                </div>
                <div className="divdirectoryfilters-eachdeskt4">
                  <b className="empresa">Empresa</b>
                  <img className="svg-icon6" alt="" src="/svg-4.svg" />
                </div>
                <div className="divdirectoryfilters-eachdeskt5">
                  <b className="ubicacin">Ubicación</b>
                  <img className="svg-icon7" alt="" src="/svg-5.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

HeaderLogin.propTypes = {
  className: PropTypes.string,
};

export default HeaderLogin;
