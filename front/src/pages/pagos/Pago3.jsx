import "./Pago3.scss"

import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { useState } from 'react'


import banner2 from "../../../public/pago1_banner.png";
import icon1 from "../../../public/lucide_languages.png";
import icon2 from "../../../public/lucide_clock2.png";
import icon3 from "../../../public/Group.png";
import icon4 from "../../../public/lucide_edit.png";
import icon5 from "../../../public/lucide_check_circle.png";
import icon6 from "../../../public/lucide_receipt.png";
import mapa from "../../../public/map.png";
import iconDate from "../../../public/icon_calendar.png";
import iconUser from "../../../public/icon_box.png";
import iconHeart from "../../../public/icon_heart.png";

import banner4 from "../../../public/eventos3.png";
import banner5 from "../../../public/eventos4.png";
import banner6 from "../../../public/eventos5.png";

import Eventos2 from "../../componentes/eventos/EventoPasados";
import like from "../../../public/icon_like.png";
import francis from "../../../public/francis.png";
import Footer2 from "../../componentes/Footer/Footer2";

const Pago1 = ()=>{
    const { user, setUser } = useContext(UserContext);
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(39.00)

    function restar(){
        if (count > 0) {
            setCount(count - 1)
        }else{
            setCount(0) 
        }
    }

    return (
        <>
        {/*<img src={banner} alt="" id="Banner"/>*/}
            <section id="pago2">
                
                <article>
                    <div>
                        <p className="navegation-history-evento" > <span>Inicio</span>  {">"} <span>Networking</span> {">"} <span></span>Eventos</p>
                        <br />
                        <br />
                        <br />
                        <h2 className="curso-title-evento">Las Nuevas Normativas de UX</h2>
                        <div className="datos-evento">
                            <p> <img src={iconDate} alt="" /> Viernes</p>
                            <p className="barra-separacion">|</p>
                            <p> <img src={iconUser} alt="" /> UX FC Group</p>
                            <p className="barra-separacion">|</p>
                            <p> <img src={iconHeart} alt="" /> Dificultad Baja</p>
                        </div>                        
                    </div>

                    <div className="pago-info">
                        <img src={banner2} alt="" />
                    </div>
                    <div className="final-compra">
                        <div>
                            <h2>¡ Pago Realizado!</h2>
                            <h3>Hemos enviado la confirmación de la Reserva al siguiente correo electrónico: <span>danielandujar@gmail.com</span></h3>
                            <p>Los días próximos a la actividad te mandaremos un recordatorio que aparecerá también en las notificaciones de tu perfil.</p>
                            <div id="btn-pagar2">
                                <Link to={`/eventos/1`} > Continuar </Link>                                 
                            </div>                              
                        </div>
                  
                    </div>

                </article>

            </section>
        </>
    )
}


export default Pago1;