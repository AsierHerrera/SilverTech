import "./Pago1.scss"

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
            <section id="pago1">
                
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
                    <div className="pago1-formulario">
                        <form action="" >
                            <p>Hola, <span>Daniel</span></p>
                            <p>Primero vamos a pedirte que, por favor, revises los datos de tu reserva y confirmes si está todo correcto.</p>
                            <h2>Datos la actividad</h2>
                            <h3>Nombre de la Actividad:</h3>
                            <h4>Nuevas Normativas de UX</h4>
                            <h3>Lugar de la Actividad:</h3>
                            <h4>Bilbao, Urazurrutia Kalea 3, 48003</h4>
                            <h3>Fecha de la Actividad:</h3>
                            <h4>16 de Agosto del 2024</h4>
                            <h3>Hora de la Actividad:</h3>
                            <h4>15:30 / 18h30</h4>
                            
                            <p>Número de personas que acudirán: </p>
                    
                            <div>
                                <h2 onClick={restar}>-</h2>
                                <p>{count}</p>
                                <h2 onClick={() => setCount((count) => count + 1)}>+</h2>
                                <p><span>{price * count}</span>.00 €</p>
                            </div>
                            <div id="btn-pagar1">
                                <Link to={`/pago2/1`} > Confirmar Datos </Link>                                 
                            </div>

                        </form>                        
                    </div>

                </article>
                <h2 id="pagos-intereces">Puede que tambien te interese</h2>
                <div className="pagos-list">
                    <Eventos2 img={banner4}/>
                    <Eventos2 img={banner5}/>
                    <Eventos2 img={banner6}/>                        
                </div>
                
            </section>
            <Footer2/>
        </>
    )
}


export default Pago1;