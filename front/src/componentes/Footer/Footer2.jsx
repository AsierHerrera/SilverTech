import PropTypes from "prop-types";
import "./Footer2.scss";
import facebook from "../../../public/Vector.png"

const FooterBig = ()=>{
  return (
    <footer>
      <img alt="" src="/silvertech_logo.png" />
      <div id="footer-seccion1">
        <div>
          <p className="negrita">Ayuda</p>
          <p className="subrayado">Preguntas Frecuentes</p>
          <p className="subrayado">Más información</p>
        </div>
        <div>
          <p className="negrita">Contacta</p>
          <p><img src="/svg-6.svg" alt="" /> info@silvertech.com</p>
          <p><img src="/svg-7.svg" alt="" /> +34 600 000 000</p>
          <p><img src={facebook} alt="" /><img src="/frame.svg" alt="" /></p>
        </div>
      </div>
      <div id="footer-seccion2">
        <p>© Seniority 2024</p>
        <p className="subrayado">Condiciones de Uso</p>
        <p className="subrayado">Política de privacidad</p>
        <p className="subrayado">Política de cookies</p>
      </div>
    </footer>
  );
};

export default FooterBig;