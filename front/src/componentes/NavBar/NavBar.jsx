import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from './silvertech_logo2.jpg';
import userIcon from './user_icon.png';
import { getToken, deleteToken, parseToken } from '../../utils/local';
import UserContext from '../../context/userContext';

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

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

    async function handleLogout(e) {
        e.preventDefault();
        setUser(null);
        deleteToken();
        navigate("/register");
    }

    const token = getToken();
    const decodedToken = parseToken(token);
    const userRole = decodedToken ? decodedToken.role : null;

    return (
        <header className="navbar container">
            <div className="navbar__logo-container">
                <img src={logo} alt="Logo" className="navbar__logo" />
            </div>

            <div className="navbar__menu-bar">
                <nav className="navbar__nav" ref={navRef}>
                    <Link className="navbar__link" to="/landing">Inicio</Link>

                    <div className="navbar__item">
                        <button className="navbar__link" onClick={() => toggleDropdown('expertos')}>Contratación de Expertos</button>
                        {dropdowns.expertos && (
                            <div className="dropdown__menu anchura1">
                                <Link className="dropdown__item" to="/expertos">Nuestros Expertos</Link>
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
                                <Link className="dropdown__item" to="/recursos">Cursos y Talleres</Link>
                                <Link className="dropdown__item" to="/plantillas-herramientas">Plantillas і Herramientas</Link>
                                {userRole === 'admin' && <Link className="dropdown__item" to="/crear-recurso">Crear Recurso</Link>}
                            </div>
                        )}
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__link" onClick={() => toggleDropdown('proyectos')}>Proyectos</button>
                        {dropdowns.proyectos && (
                            <div className="dropdown__menu anchura1">
                                <Link className="dropdown__item" to="/proyectos">Mis Proyectos</Link>
                                <Link className="dropdown__item" to="/crear-proyecto">Crear Nuevo Proyecto</Link>
                                <Link className="dropdown__item" to="/proyectos-finalizados">Proyectos Finalizados</Link>
                                <Link className="dropdown__item" to="/documentacion-legal-accesibilidad">Documentación Legal</Link>
                            </div>
                        )}
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__link" onClick={() => toggleDropdown('networking')}>Networking</button>
                        {dropdowns.networking && (
                            <div className="dropdown__menu anchura2">
                                <Link className="dropdown__item" to="/foro">Foro</Link>
                                <Link className="dropdown__item" to="/eventos">Eventos</Link>
                                <Link className="dropdown__item" to="/charlas">Charlas</Link>
                                {userRole === 'admin' && <Link className="dropdown__item" to="/crear-recurso">Crear Recurso</Link>}
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
                <Link className="dropdown__item" to="/recursos">Mis Formaciones</Link>
                <Link className="dropdown__item" to="/ajustes">Ajustes de Perfil</Link>
                {userRole === 'admin' && <Link className="dropdown__item" to="/dashboard-formaciones">Dashboard formaciones</Link>}
                {userRole === 'admin' && <Link className="dropdown__item" to="/dashboard-eventos">Dashboard eventos</Link>}
                {!user ? (
                    <Link className="dropdown__item" to="/register">Login</Link>
                ) : (
                    <Link className="dropdown__item" to="/register" onClick={handleLogout}>Logout</Link>
                )}


              </div>
              
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
