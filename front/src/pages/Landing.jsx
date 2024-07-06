import { useCallback } from "react";
import Imagen from "../componentes/Landing/Imagen";
/* import HeaderLogin from "../components/HeaderLogin"; */
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../componentes/Landing/FrameComponent3";
import CHATBOX from "../componentes/Landing/CHATBOX";
import FrameComponent2 from "../componentes/Landing/FrameComponent2";
import Cards from "../componentes/Landing/Cards";
import FrameComponent1 from "../componentes/Landing/FrameComponent1";
import GroupComponent from "../componentes/Landing/GroupComponent";
import FrameComponent from "../componentes/Landing/FrameComponent";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const onLinkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="inicio">
      <Imagen />
     
      <section className="frame-section">
        <FrameComponent3 />
        <div className="chat-box">
          <CHATBOX />
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </section>
      <section className="inicio-inner">
        <div className="frame-parent3">
          <FrameComponent2 />
          <Cards />
        </div>
      </section>
      <FrameComponent1 />
      <section className="inicio-child">
        <GroupComponent />
      </section>
      <section className="technology-description-wrapper">
        <div className="technology-description">
          <div className="cualquier-tecnologa-no-container">
            <p className="cualquier-tecnologa-no">
              Cualquier tecnología no te vale.Necesitas un diseño amigable para
              ellos
            </p>
            <p className="y-un-software">
              y un software eficiente para que tu organización avance sin
              frenos.
            </p>
          </div>
          <div className="technology-button">
            <div className="button-hero-primary">
              <div className="link-text8">Da el primer paso</div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      <img
        className="screen-shot-2024-07-03-at-154"
        alt=""
        src="/screen-shot-20240703-at-154803-1@2x.png"
      />
      
    </div>
  );
};

export default Landing;
