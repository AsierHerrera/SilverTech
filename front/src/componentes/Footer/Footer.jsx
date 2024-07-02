import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__dropdown">
          <button className="footer__button footer__dropdown-toggle">Ayuda</button>
          <div className="footer__dropdown-menu">
            <Link className="footer__dropdown-item" to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
            <Link className="footer__dropdown-item" to="/contacto">Contacto</Link>
          </div>
        </div>
        <Link className="footer__button" to="/contactos">Contactos</Link>
        <div className="footer__dropdown">
          <button className="footer__button footer__dropdown-toggle">Legales</button>
          <div className="footer__dropdown-menu">
            <Link className="footer__dropdown-item" to="/aviso-legal">Aviso Legal</Link>
            <Link className="footer__dropdown-item" to="/politica-de-privacidad">Política de Privacidad</Link>
            <Link className="footer__dropdown-item" to="/politica-de-cookies">Política de Cookies</Link>
          </div>
        </div>
        <div className="footer__dropdown">
          <button className="footer__button footer__dropdown-toggle">Redes Sociales</button>
          <div className="footer__dropdown-menu">
            <Link className="footer__dropdown-item" to="/facebook">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
