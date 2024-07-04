import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo_azul.png';
import userIcon from './user_icon.png';

const NavBar = () => {
  const [dropdowns, setDropdowns] = useState({
    expertos: false,
    recursos: false,
    proyectos: false,
    networking: false,
    usuario: false,
  });

  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setDropdowns((prevDropdowns) => ({
      expertos: false,
      recursos: false,
      proyectos: false,
      networking: false,
      usuario: false,
      [name]: !prevDropdowns[name],
    }));
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setDropdowns({
        expertos: false,
        recursos: false,
        proyectos: false,
        networking: false,
        usuario: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__logo-bar">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>

      <div className="navbar__menu-bar">
        <nav className="navbar__nav" ref={navRef}>
          <Link className="navbar__link" to="/">Inicio</Link>

          <div className="navbar__item">
            <button className="navbar__link" onClick={() => toggleDropdown('expertos')}>Contratación de Expertos</button>
            {dropdowns.expertos && (
              <div className="dropdown__menu anchura1">
                <Link className="dropdown__item" to="/guias">Guías</Link>
                <Link className="dropdown__item" to="/libros">Libros</Link>
                <Link className="dropdown__item" to="/documentacion-legal-accesibilidad">Documentación Legal y Accesibilidad</Link>
              </div>
            )}
          </div>

          <div className="navbar__item">
            <button className="navbar__link" onClick={() => toggleDropdown('recursos')}>Recursos</button>
            {dropdowns.recursos && (
              <div className="dropdown__menu anchura1">
                <Link className="dropdown__item" to="/biblioteca">Biblioteca</Link>
                <Link className="dropdown__item" to="/publicaciones">Publicaciones</Link>
                <Link className="dropdown__item" to="/silver-economy">Silver Economy</Link>
                <Link className="dropdown__item" to="/recurso">Cursos y Talleres</Link>
                <Link className="dropdown__item" to="/plantillas-herramientas">Plantillas y Herramientas</Link>
              </div>
            )}
          </div>

          <div className="navbar__item">
            <button className="navbar__link" onClick={() => toggleDropdown('proyectos')}>Proyectos</button>
            {dropdowns.proyectos && (
              <div className="dropdown__menu anchura1">
                <Link className="dropdown__item" to="/ProyectosComponents">Mis Proyectos</Link>
                <Link className="dropdown__item" to="/Proyectos">Crear Nuevo Proyecto</Link>
                <Link className="dropdown__item" to="/proyectos-finalizados">Proyectos Finalizados</Link>
                <Link className="dropdown__item" to="/documentacion-legal">Documentación Legal</Link>
              </div>
            )}
          </div>

          <div className="navbar__item">
            <button className="navbar__link" onClick={() => toggleDropdown('networking')}>Networking</button>
            {dropdowns.networking && (
              <div className="dropdown__menu anchura2">
                <Link className="dropdown__item" to="/subforum">Foro</Link>
                <Link className="dropdown__item" to="/eventos">Eventos</Link>
                <Link className="dropdown__item" to="/charlas">Charlas</Link>
              </div>
            )}
          </div>

          <div className="navbar__item">
            <button className="navbar__link" onClick={() => toggleDropdown('usuario')}>
              <img src={userIcon} alt="Usuario" className="navbar__user-icon" />
            </button>
            {dropdowns.usuario && (
              <div className="dropdown__menu anchura1">
                <Link className="dropdown__item" to="/mis-datos">Mis Datos</Link>
                <Link className="dropdown__item" to="/mis-proyectos">Mis Proyectos</Link>
                <Link className="dropdown__item" to="/mis-formaciones">Mis Formaciones</Link>
                <Link className="dropdown__item" to="/UserPanel">Ajustes de Perfil</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
