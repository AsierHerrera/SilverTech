import "./Pago2.scss"

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
                    <div className="pago2-formulario">
                        <form action="" >
                            <p>Por último, <span>Daniel</span> , necesitamos los datos de la tarjeta bancaria con la que vas a realizar la compra de la actividad.</p>
                            <h3>Nombre del titular de la tarjeta</h3>
                            <input type="text" class="form-control" placeholder="Nombre y Apellido"/>
                            <h3>Número de la tarjeta</h3>
                            <input type="password" class="form-control" placeholder="Contraseña"/>
                            <div>
                                <div>
                                    <h3>Fecha de Caducidad</h3>
                                    <input type="text" class="form-control" placeholder="MM/AA"/>                                    
                                </div>
                                <div>
                                    <h3>Código de Seguridad</h3>  
                                    <input type="text" class="form-control" placeholder="CVV"/>                                     
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Aceptar las <span>Condiciones de Pago</span> y la <span>Política de Privacidad.</span>
                                </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Quiero una factura.
                                </label>
                                </div>
                            </div>

                            <p> <p>? Ayuda</p> </p>

                            <div id="btn-pagar2">
                                <Link to={`/pago3/1`} > Realizar Pago </Link>                                 
                            </div>

                        </form>                        
                    </div>

                </article>

            </section>
            <Footer2/>
        </>
    )
}


export default Pago1;