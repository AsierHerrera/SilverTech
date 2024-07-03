import "./Recursos.scss"
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../componentes/modal/Modal";
import CreateRecurso from "../../componentes/recurso/CreateRecurso";
import Courses from "../Courses";

const Recursos = ()=>{
/*
    const [recursos,setRecursos] = useState(useLoaderData());
    const [creatingRecurso,setCreatingRecurso] = useState(false);

    const recursosHtml = recursos.map(recurso => {
        return (
            <article className="recursos-list-element" key={recurso._id}>
                <img src={recurso.img} alt="" />
                <h2>{recurso.name}</h2>   
                <p>{recurso.day} - {recurso.time}</p>  
                <p>{recurso.place}</p>  
                <p>👤 Asistentes: {recurso.tickes}</p>
                <p>Precio: {recurso.price} <span>EURO</span></p>
                <Link className="btn-ver" to={`/recursos/${recurso._id}`}>Ver</Link>
            </article>
        )
    })
*/
    return (
        <>
        <section id="recursoList">
            {/*             
            {creatingRecurso ?
                <Modal onClose={()=>setCreatingRecurso(false)}>
                    <CreateRecurso onCreate={()=>setCreatingRecurso(false)} />
                </Modal>
                :
                <button onClick={()=>setCreatingRecurso(true)} id="btn-create">Nuevo Recurso</button>
            }

            <section className="recurso-list">
                {recursosHtml}

            </section>
          */}
            <h1 id="cursos-talleres">Cursos y Talleres</h1>
            
            {/* <section className="recurso-list">
                {recursosHtml}

            </section> */}

            <div id="card-list">
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>                
            </div>



        </section>
        </>   
    )
}


export default Recursos;