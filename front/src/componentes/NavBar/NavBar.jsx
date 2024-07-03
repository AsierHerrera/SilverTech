import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo_azul.png';
import userIcon from './user_icon.png';

const NavBar = () => {
  return (
    <header>
      <div className="navbar__logo-bar">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__menu-bar">
        <nav className="navbar__nav">
          <Link className="navbar__link" to="/">Inicio</Link>
          <Link className="navbar__link" to="/contratar-expertos">Contratacion de Expertos</Link>
          <Link className="navbar__link" to="/cursos-y-talleres">Recursos</Link>
          <Link className="navbar__link" to="/foro">Proyectos</Link>
          <Link className="navbar__link" to="/foro">Networking</Link>
          <Link className="navbar__link" to="/panel-de-usuario">
            <img src={userIcon} alt="Perfil" className="navbar__user-icon" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
