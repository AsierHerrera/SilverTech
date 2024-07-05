import "./Evento.scss"

import banner from "../../../public/Banner.png";
import banner2 from "../../../public/banner_evento2.png";
import avatar1 from "../../../public/avatar_angel.png";
import avatar2 from "../../../public/avatar_mila.png";
import avatar3 from "../../../public/avatar_juanjo.png";
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
import icono_verde1 from "../../../public/mood.png";
import icono_verde2 from "../../../public/diversity_3.png";
import icono_verde3 from "../../../public/celebration.png";
import icono_verde4 from "../../../public/badge.png";
import icono_verde5 from "../../../public/diversity_1.png";
import icono_verde6 from "../../../public/paid.png";
import Footer2 from "../../componentes/Footer/Footer2";

const Evento = ()=>{

    return (
        <>
        {/*<img src={banner} alt="" id="Banner"/>*/}
            <section id="cuerpo-principal">
                
                <article>
                    <p className="navegation-history-evento" > <span>Inicio</span>  {">"} <span>Networking</span> {">"} <span></span>Eventos</p>
                    <div className="course-category-evento">
                        <p>Nuevo Evento</p>
                    </div>
                    <h2 className="curso-title-evento">Las Nuevas Normativas de UX</h2>
                    <div className="datos-evento">
                        <p> <img src={iconDate} alt="" /> Viernes</p>
                        <p className="barra-separacion">|</p>
                        <p> <img src={iconUser} alt="" /> UX FC Group</p>
                        <p className="barra-separacion">|</p>
                        <p> <img src={iconHeart} alt="" /> Dificultad Baja</p>
                    </div>
                    <div className="evento-info">
                        <img src={banner2} alt="" />
                    </div>
                    <div className="evento-contenido">
                        <h3>Las Nuevas Normativas De UX</h3>
                        <p>Una visita guíada por Francis R&R</p>
                        <br />
                        <p>Lugar: Real Academia de Bellas Artes de San Fernando. Madrid</p>
                        <br />
                        <p>La Real Academia de Bellas Artes de San Fernando acoge hasta el 9 de julio una muestra compuesta por algunas de las obras más icónicas de uno de los grandes de la fotografía en la capital.
                        En 2022 se cumplieron 100 años del nacimiento del fotógrafo Francesc Català-Roca. Como homenaje a su primer centenario, la sala de fotografía del Museo de la Real Academia de Bellas Artes de San Fernando acogerá durante varios meses una exposición con las mejores obras del artista, La mirada sabia: “El gran maestro de su generación”. Las fotografías expuestas forman parte tanto de las colecciones de la Academia como de colecciones privadas que han sido cedidas para la ocasión.</p>

                    </div>
                    <div >
                        <h3 className="info-adicional">Información adicional</h3>
                        <div className="curso-adicional">
                            <div>
                                <img src={icon1} alt="" />
                                <div>
                                    <p>Idioma</p>
                                    <p>Castellano</p>
                                </div>
                            </div>
                            <div>
                                <img src={icon2} alt="" />
                                <div>
                                    <p>Duración</p>
                                    <p>Unas 3 horas aproximadamente</p>
                                </div>
                            </div>
                            <div>
                                <img src={icon3} alt="" />
                                <div>
                                    <p>Grupo</p>
                                    <p>50 personas</p>
                                </div>
                            </div>
                            <div>
                                <img src={icon4} alt="" />
                                <div>
                                    <p>Que Traer</p>
                                    <p>Libreta y cámara de fotos</p>
                                </div>
                            </div>
                            <div>
                                <img src={icon5} alt="" />
                                <div>
                                    <p>Incluido</p>
                                    <p>Entrada y guía</p>
                                </div>
                            </div>
                            <div>
                                <img src={icon6} alt="" />
                                <div>
                                    <p>Pago</p>
                                    <p>Pago en efectivo o través de la web</p>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div className="curso-mapa">
                        <h3 className="info-adicional">Mapa de la zona</h3>
                        <img src={mapa} alt="" />
                        <button>Abrir en Google Maps</button>
                    </div>
                    <div className="tutor-info">
                        <div>
                            <h2>UX FX Group</h2>
                            <p  > <img src={like} alt="" /> <span>100%</span> (32 valoraciones) </p>
                        </div>
                        <p>R&R se dedica a crear actividades culturales adaptadas a las necesidades y gustos de las personas mayores. Ofrecieron talleres de escritura, pintura, cerámica y otras artes, así como recorridos por museos, galerías de arte y teatros. También organizaron viajes culturales y escapadas de fin de semana para disfrutar de la naturaleza y la cultura en su máximo esplendor.</p>
                        <button>Saber más de la empresa</button>
                        <div className="barra" ></div>
                        <div className="profe-info">
                            <img src={francis} alt="" />
                            <div>
                                <h3>Francis</h3>
                                <h4>Historiadora del Arte</h4>
                                <p>Experiencia profesional: Ana ha trabajado como guía en diferentes museos de España durante los últimos 10 años. Actualmente, trabaja en el Museo Nacional del Prado en Madrid, donde ha sido guía desde el año 2016. Además de guiar a los visitantes a través de las colecciones del museo, Ana también ha realizado investigaciones sobre algunas de las obras más destacadas del Prado y ha escrito varios artículos académicos sobre arte español.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <h3 className="curso-precio">39.00€</h3>
                    <div className="curso-fecha">
                        <p><img src={iconDate} alt="" /> Viernes</p>
                        <p>🕜 15:30 - 18:30</p>
                    </div>
                    <div className="calendar">
                        <h4>Selecciona un día</h4>
                        <div>
                            <h3>Agosto <span>2024</span></h3>
                            <ol >
                                <li className="day-name">Lu</li>
                                <li className="day-name">Ma</li>
                                <li className="day-name">Mi</li>
                                <li className="day-name">Ju</li>
                                <li className="day-name">Vi</li>
                                <li className="day-name">Sa</li>
                                <li className="day-name">Do</li>
                            
                                <li className='gris'>30</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                <li className='gris'>1</li>
                                <li className='gris'>2</li>
                                <li className='gris'>3</li>
                            </ol>                            
                        </div>

                    </div>
                    <div className="curso-horario">
                        <div>
                            <p>Dia</p>
                            <p>16</p>
                        </div>
                        <div>
                            <p>Horario</p>
                            <p>15:30-18:30</p>
                        </div>

                    </div>                        
                    <div className="curso-apartar">
                        <button>Reservar</button>
                        <button>⁖ Enviar una Invitación</button>
                    </div>
                    <div className="curso-contactos">
                        <h3>¿ Quién de tus contactos asistirá ?</h3>
                        <div>
                            <div>
                                <img src={avatar1} alt="" />
                                <p>Ángel</p>
                            </div>
                            <div>
                                <img src={avatar2} alt="" />
                                <p>Mila</p>
                            </div>
                            <div>
                                <img src={avatar3} alt="" />
                                <p>Juanjo</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <div className="seniority-ofrece">
                    <h2>LO QUE TE OFRECEMOS DESDE SILVERTECH</h2>
                    <div>
                        <div>
                            <img src={icono_verde1} alt="" />
                            <p>Actividades que se adaptan a ti</p>
                        </div>
                        <div>
                            <img src={icono_verde2} alt="" />
                            <p>Conoce a nuevas personas</p>
                        </div>
                        <div>
                            <img src={icono_verde3} alt="" />
                            <p>Disfruta de tu tiempo</p>  
                        </div>
                        <div>
                            <img src={icono_verde4} alt="" />
                            <p>Equipos profesionales</p>
                        </div>
                        <div>
                            <img src={icono_verde5} alt="" />
                            <p>Compartir con tus seres queridos</p>
                        </div>
                        <div>
                            <img src={icono_verde6} alt="" />
                            <p>Puedes pagar en efectivo, con tarjeta o Bizum</p> 
                        </div>                  
                    </div>
                </div>
                <h2 id="eventos-interes">Puede que tambien te interese</h2>
                <div className="eventos-list">
                    <Eventos2 img={banner4}/>
                    <Eventos2 img={banner5}/>
                    <Eventos2 img={banner6}/>                        
                </div>
                <Footer2/>
            </section>

        </>
    )
}


export default Evento;