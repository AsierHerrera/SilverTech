import "./Eventos.scss"
import Banner from "../../../public/Banner.png";
import banner from "../../../public/banner_eventos.png";
import banner2 from "../../../public/eventos1new.png";
import banner3 from "../../../public/eventos2.png";
import banner4 from "../../../public/eventos3new.png";
import banner5 from "../../../public/eventos4new.png";
import banner6 from "../../../public/eventos5new.png";
import Eventos1 from "../../componentes/eventos/EventoActual";
import Eventos2 from "../../componentes/eventos/EventoPasados";
import Footer2 from "../../componentes/Footer/Footer2";

const Eventos = ()=>{

    return (
        <>

                <img src={banner} alt="" id="Banner"/>

                <h1 id="eventos-title">Eventos</h1> 
                <div className="eventos-list">
                    <Eventos1 img={banner2}/>
                    <Eventos1 img={banner3}/>
                </div> 
                <h2 id="eventos-p-title">Eventos Pasados</h2>
                <div className="eventos-list">
                    <Eventos2 img={banner4}/>
                    <Eventos2 img={banner5}/>
                    <Eventos2 img={banner6}/>                        
                </div>

                <div className="separacion"></div>
  
        </>   
    )
}


export default Eventos;