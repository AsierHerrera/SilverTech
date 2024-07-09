import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from './silvertech_logo2.jpg';
import userIcon from './user_icon.png';
import { getToken, deleteToken, parseToken } from '../../utils/local';
import UserContext from '../../context/userContext';

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [dropdowns, setDropdowns] = useState({
        expertos: false,
        recursos: false,
        proyectos: false,
        networking: false,
        usuario: false,
    });

    const [activeSections, setActiveSections] = useState({
        inicio: false,
        expertos: false,
        recursos: false,
        proyectos: false,
        networking: false,
        usuario: false,
    });

    const navRef = useRef(null);

    const handleMouseEnter = (name) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [name]: true,
        }));
    };

    const handleMouseLeave = (name) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [name]: false,
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

    useEffect(() => {
        // Detecta cambios en la ubicación para actualizar activeSections
        const currentPath = location.pathname;
        setActiveSections((prevActiveSections) => ({
            ...prevActiveSections,
            inicio: currentPath === '/landing',
            expertos: currentPath.startsWith('/expertos'),
            recursos: currentPath.startsWith('/recursos') || currentPath === '/biblioteca' || currentPath === '/publicaciones' || currentPath === '/silver-economy' || currentPath === '/recursos' || currentPath === '/plantillas-herramientas',
            proyectos: currentPath.startsWith('/proyectos') || currentPath === '/crear-proyecto' || currentPath === '/proyectos-finalizados' || currentPath === '/documentacion-legal-accesibilidad',
            networking: currentPath.startsWith('/networking') || currentPath === '/foro' || currentPath === '/eventos' || currentPath === '/charlas',
            usuario: currentPath.startsWith('/usuario') || currentPath === '/mis-datos' || currentPath === '/mis-proyectos' || currentPath === '/recursos' || currentPath === '/ajustes' || currentPath === '/dashboard-formaciones' || currentPath === '/dashboard-eventos',
        }));
    }, [location.pathname]);

    return (
        <header className="navbar container">
            <div className="navbar__logo-container">
                <img src={logo} alt="Logo" className="navbar__logo" />
            </div>

            <div className="navbar__menu-bar">
                <nav className="navbar__nav" ref={navRef}>
                    <Link
                        className={`navbar__link ${activeSections.inicio ? 'active' : ''}`}
                        to="/landing"
                        onMouseEnter={() => handleMouseEnter('inicio')}
                        onMouseLeave={() => handleMouseLeave('inicio')}
                    >
                        Inicio
                    </Link>

                    <div
                        className="navbar__item"
                        onMouseEnter={() => handleMouseEnter('expertos')}
                        onMouseLeave={() => handleMouseLeave('expertos')}
                    >
                        <button
                            className={`navbar__link ${activeSections.expertos ? 'active' : ''}`}
                            onClick={() => toggleDropdown('expertos')}
                        >
                            Expertos
                        </button>
                        {dropdowns.expertos && (
                            <div className="dropdown__menu anchura1">
                                <Link className={`dropdown__item ${location.pathname.startsWith('/expertos') ? 'active' : ''}`} to="/expertos">Nuestros expertos</Link>
                                <Link className={`dropdown__item ${location.pathname.startsWith('/documentacion-legal-accesibilidad') ? 'active' : ''}`}  to="/documentacion-legal-accesibilidad">Documentación Legal y Accesibilidad</Link>

                            </div>
                        )}
                    </div>

                    <div
                        className="navbar__item"
                        onMouseEnter={() => handleMouseEnter('recursos')}
                        onMouseLeave={() => handleMouseLeave('recursos')}
                    >
                        <button
                            className={`navbar__link ${activeSections.recursos ? 'active' : ''}`}
                            onClick={() => toggleDropdown('recursos')}
                        >
                            Recursos
                        </button>
                        {dropdowns.recursos && (
                            <div className="dropdown__menu anchura1">
                                <Link className={`dropdown__item ${location.pathname === '/biblioteca' ? 'active' : ''}`} to="/biblioteca">Biblioteca</Link>
                                <Link className={`dropdown__item ${location.pathname === '/publicaciones' ? 'active' : ''}`} to="/publicaciones">Publicaciones</Link>
                                <Link className={`dropdown__item ${location.pathname === '/silver-economy' ? 'active' : ''}`} to="/silver-economy">Silver Economy</Link>
                                <Link className={`dropdown__item ${location.pathname === '/recursos' ? 'active' : ''}`} to="/recursos">Cursos y Talleres</Link>
                                <Link className={`dropdown__item ${location.pathname === '/plantillas-herramientas' ? 'active' : ''}`} to="/plantillas-herramientas">Plantillas і Herramientas</Link>
                                {userRole === 'admin' && <Link className={`dropdown__item ${location.pathname === '/crear-recurso' ? 'active' : ''}`} to="/crear-recurso">Crear Recurso</Link>}
                            </div>
                        )}
                    </div>

                    <div
                        className="navbar__item"
                        onMouseEnter={() => handleMouseEnter('proyectos')}
                        onMouseLeave={() => handleMouseLeave('proyectos')}
                    >
                        <button
                            className={`navbar__link ${activeSections.proyectos ? 'active' : ''}`}
                            onClick={() => toggleDropdown('proyectos')}
                        >
                            Proyectos
                        </button>
                        {dropdowns.proyectos && (
                            <div className="dropdown__menu anchura1">
                                <Link className={`dropdown__item ${location.pathname === '/proyectos' ? 'active' : ''}`} to="/proyectos">Mis Proyectos</Link>
                                <Link className={`dropdown__item ${location.pathname === '/crear-proyecto' ? 'active' : ''}`} to="/crear-proyecto">Crear Nuevo Proyecto</Link>
                                <Link className={`dropdown__item ${location.pathname === '/proyectos-finalizados' ? 'active' : ''}`} to="/proyectos-finalizados">Proyectos Finalizados</Link>
                                <Link className={`dropdown__item ${location.pathname === '/documentacion-legal-accesibilidad' ? 'active' : ''}`} to="/documentacion-legal-accesibilidad">Documentación Legal</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="navbar__item"
                        onMouseEnter={() => handleMouseEnter('networking')}
                        onMouseLeave={() => handleMouseLeave('networking')}
                    >
                        <button
                            className={`navbar__link ${activeSections.networking ? 'active' : ''}`}
                            onClick={() => toggleDropdown('networking')}
                        >
                            Networking
                        </button>
                        {dropdowns.networking && (
                            <div className="dropdown__menu anchura2">
                                <Link className={`dropdown__item ${location.pathname === '/foro' ? 'active' : ''}`} to="/foro">Foro</Link>
                                <Link className={`dropdown__item ${location.pathname === '/eventos' ? 'active' : ''}`} to="/eventos">Eventos</Link>
                                <Link className={`dropdown__item ${location.pathname === '/charlas' ? 'active' : ''}`} to="/charlas">Charlas</Link>
                                {userRole === 'admin' && <Link className={`dropdown__item ${location.pathname === '/crear-recurso' ? 'active' : ''}`} to="/crear-recurso">Crear Recurso</Link>}
                            </div>
                        )}
                    </div>

                    <div
                        className="navbar__item"
                        onMouseEnter={() => handleMouseEnter('usuario')}
                        onMouseLeave={() => handleMouseLeave('usuario')}
                    >
                        <button
                            className={`navbar__link ${activeSections.usuario ? 'active' : ''}`}
                            onClick={() => toggleDropdown('usuario')}
                        >
                            <img src={userIcon} alt="Usuario" className="navbar__user-icon" />
                        </button>
                        {dropdowns.usuario && (
                            <div className="dropdown__menu anchura1">
                                <Link className={`dropdown__item ${location.pathname === '/mis-datos' ? 'active' : ''}`} to="/mis-datos">Mis Datos</Link>
                                <Link className={`dropdown__item ${location.pathname === '/mis-proyectos' ? 'active' : ''}`} to="/mis-proyectos">Mis Proyectos</Link>
                                <Link className={`dropdown__item ${location.pathname === '/recursos' ? 'active' : ''}`} to="/recursos">Mis Formaciones</Link>
                                <Link className={`dropdown__item ${location.pathname === '/ajustes' ? 'active' : ''}`} to="/ajustes">Ajustes de Perfil</Link>
                                {userRole === 'admin' && <Link className={`dropdown__item ${location.pathname === '/dashboard-formaciones' ? 'active' : ''}`} to="/dashboard-formaciones">Dashboard formaciones</Link>}
                                {userRole === 'admin' && <Link className={`dropdown__item ${location.pathname === '/dashboard-eventos' ? 'active' : ''}`} to="/dashboard-eventos">Dashboard eventos</Link>}
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
