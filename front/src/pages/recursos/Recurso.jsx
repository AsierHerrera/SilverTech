import "./Recurso.scss";
import { useLoaderData } from "react-router-dom";
import banner from "../../../public/banner_curso.png";
import banner2 from "../../../public/banner2_curso.png";
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
import Footer2 from "../../componentes/Footer/Footer2";

const Recurso = ()=>{
    const recurso = useLoaderData();
    console.log("recurso: ", recurso)

    return (
        <>
            <p className="navegation-history" > <span>Inicio</span>  {">"} <span>Recursos</span> {">"} <span></span>Cursos y Talleres</p>
                   
            <img src={banner} alt="" id="Banner"/>
            <section id="cuerpo-principal">
                
                <article>
                     {/*
                    <div className="course-category">
                        <p>Nuevo</p>
                        <p>Cursos y talleres</p>
                    </div>
                    <h2 className="curso-title">Curso UX para las empresas</h2>
                    <div className="datos-curso">
                        <p> <img src={iconDate} alt="" /> Viernes</p>
                        <p className="barra-separacion">|</p>
                        <p> <img src={iconUser} alt="" /> UX FC Group</p>
                        <p className="barra-separacion">|</p>
                        <p> <img src={iconHeart} alt="" /> Dificultad Baja</p>
                    </div>
                    */}
                    <div className="curso-info">
                        <img src={banner2} alt="" />
                        <p>Fecha: <span>16 de Agosto 2024 - 15:30</span></p>
                        <p>Lugar: <span>Bilbao, Urazurrutia Kalea 3,c48003</span></p>
                        <p>Asistentes: <span>60</span> </p>
                        <p>Plazas disponibles: <span>40</span> </p>
                        <p>Precio: <span>75 EURO</span></p>
                        <button>Reservar plaza</button>
                    </div>
                    <div className="curso-introduccion">
                        <h3>Introducción</h3>
                        <p>
                            En la era digital actual, la experiencia de usuario (UX) es fundamental para el diseño de productos y servicios accesibles y fáciles de usar. <br />Este curso está diseñado específicamente para la Silver Economy, enfocándose en crear interfaces y experiencias digitales que sean amigables y accesibles para las personas mayores de 50 años. 
                            <br />
                            Objetivos del Curso 
                        </p>
                        <ul>
                            <li>Entender la UX: Conocer los principios básicos de la experiencia  de usuario y su importancia. </li>
                            <li> Enfoque en la Silver Economy: Identificar las necesidades y preferencias específicas de los usuarios mayores de 50 años. </li>
                            <li>Diseño Inclusivo: Aprender a diseñar interfaces accesibles y amigables para una audiencia madura. </li>
                            <li> Prototipos y Pruebas: Crear prototipos y realizar pruebas de usabilidad con personas mayores para mejorar el diseño. </li>
                        </ul>
                        <p>Contenido del Curso.</p>
                    </div>
                    <div className="curso-contenido">
                        <h3>Contenido del curso</h3>
                        <p>Principios de Diseño Inclusivo</p>
                        <ul>
                            <li>Fundamentos del diseño inclusivo</li>
                            <li>Tipografía, colores y contrastes adecuados </li>
                            <li>Accesibilidad web: normas y buenas prácticas </li>
                        </ul>
                        <p>Introducción a la UX </p>
                        <ul>
                            <li>Conceptos básicos de UX </li>
                            <li>Importancia de la UX en productos y servicios digitales </li>
                            <li>Casos de estudio exitosos </li>
                        </ul>
                        <p>Conociendo a la Audiencia Mayor </p>
                        <ul>
                            <li>Características y necesidades de la Silver Economy </li>
                            <li>Comportamientos y preferencias digitales </li>
                            <li>Barreras comunes y cómo superarlas </li>                            
                        </ul>

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
                </article>
                <article>
                    <h3 className="curso-precio">75.00€</h3>
                    <div className="curso-fecha">
                        <p><img src={iconDate} alt="" /> Martes y Jueves</p>
                        <p>🕜 17:00 - 18:00 o 18:00 - 19:00</p>
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
                        {/*<button>Comprar Actividad</button>*/}
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
            <div id="reservar-plazas">
                <button>Reservar Plazas</button>                
            </div>

            <Footer2/>
        </>
    )
}

export default Recurso;