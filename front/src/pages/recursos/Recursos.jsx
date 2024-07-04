import "./Recursos.scss"
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import Modal from "../../componentes/modal/Modal";
import CreateRecurso from "../../componentes/recurso/CreateRecurso";
import Courses from "../Courses";
import banner from "../../../public/Banner.png";


const Recursos = ()=>{
    const { user, setUser } = useContext(UserContext);
    const [recursos,setRecursos] = useState(useLoaderData());
    const [creatingRecurso,setCreatingRecurso] = useState(false);

    /*
    const recursosHtml = recursos.map(recurso => {
        return (
            <article className="card" key={recurso._id}>                    
                <img src={recurso.img} alt="" className='card-img'/>
                <div className='seccion1'>
                    <h2>{recurso.name}</h2>   
                    <p className='card-progress'>{recurso.percentage}</p>  
                </div>
                <div className='seccion2'>
                    <p>{recurso.day} - {recurso.time}</p>
                    <p className='gris'>{recurso.place}</p>
                </div>
                <div className='seccion3'>
                    <p className='gris'>👤 Asistentes: {recurso.tickes}</p>
                    <p>Precio: {recurso.price} <span>EURO</span></p>
                </div>
                <Link className="ver-mas" to={`/recursos/${recurso._id}`}>Ver Curso</Link>
            </article>
        )
    })
    */

    return (
        <>
            <section id="recursoList">
                {user?.role == "admin2" ? 
                <>
                    {creatingRecurso ?
                        <Modal onClose={()=>setCreatingRecurso(false)}>
                            <CreateRecurso onCreate={()=>setCreatingRecurso(false)} />
                        </Modal>
                        :
                        <button onClick={()=>setCreatingRecurso(true)} id="btn-create">Nuevo Recurso</button>
                    }       
                </> 
                :
                <></>
                }

                <img src={banner} alt="" id="Banner"/>
                <p className="cursos-compromiso">
                En nuestra sociedad, la población mayor de 50 años está creciendo y con ella, una economía llena de oportunidades conocida como la Silver Economy. En [Nombre de tu Empresa], hemos diseñado una serie de talleres y cursos específicamente dirigidos a esta demografía, con el objetivo de empoderar, educar y ofrecer nuevas oportunidades de desarrollo personal y profesional.
                </p>
                <h1 id="cursos-talleres">Cursos y Talleres</h1>
                {/* 
                <section id="card-list">
                    {recursosHtml}
                </section> 
                */}            
            
                <div id="card-list">
                    <Courses/>
                    <Courses/>
                    <Courses/>
              
                    <div className="cursos-beneficios">                    
                        <p>Beneficios de Participar</p>
                        <ul>
                            <li>Actualización de Conocimientos: Mantente al día con las últimas tendencias y tecnologías.</li>
                            <li>Mejora de la Calidad de Vida: A través de actividades que promuevan la salud, la creatividad y el bienestar.</li>
                            <li>Conexión Social: Conoce a personas con intereses similares y amplía tu red de contactos.</li>
                            <li>Oportunidades de Empleo y Emprendimiento: Prepárate para nuevas oportunidades laborales y de negocios.</li>
                        </ul>
                    </div>
                    <Courses/>
                    <Courses/>
                    <Courses/>                
                </div>

            </section>
        </>   
    )
}


export default Recursos;