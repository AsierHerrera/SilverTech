import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo_azul.png'; 

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <img src={logo} alt="Logo" className="navbar__logo" />
        <Link className="navbar__link" to="/">Inicio</Link>
        <Link className="navbar__link" to="/subforum">Foro</Link>
        <Link className="navbar__link" to="/recursos">Recursos</Link>
        <Link className="navbar__link" to="/contratar-expertos">Contratar Expertos</Link>
        <Link className="navbar__link" to="/panel-de-usuario">Panel de Usuario</Link>
      </nav>
    </header>
  );
};

export default NavBar;

