import "./Formulario2.scss"


import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { useState } from 'react'

const Formulario2 = ()=>{
    //const { user, setUser } = useContext(UserContext);

    return (
        <>
            <p className="navegation-history-form" > <span>Inicio</span>  {">"} <span>Registro</span> {">"}</p>
                    
            <form id="Formulario2">
                <h2>Formulario de la Empresa</h2>

                <div>
                    <label class="form-label">Nombre de la Empresa</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <label class="form-label">Número de CIF</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <label class="form-label">Direccion</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <label class="form-label">Código Postal</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <label class="form-label">Sitio Web</label>
                    <input type="text" class="form-control" />
                </div>

                <div>
                    <label class="form-label">Tamaño de tu Empresa</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySize" id="companySize1"/>
                        <label for="companySize1">Pequeña: de 1 a 50 Empleados</label>
                    </div>    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySize" id="companySize2"/>
                        <label for="companySize2">Mediana: de 51 a 250 Empleados</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySize" id="companySize3"/>
                        <label for="companySize3">Grande: más de 250 Empleados</label>
                    </div>  
                </div>

                {/* SE = Silver Economy */}

                <div>
                    <label class="form-label">¿Cuál es tu nivel de conocimiento sobre la Silver Economy?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge_SE" id="knowledge_SE1"/>
                        <label for="knowledge_SE1">Nada</label>
                    </div>    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge_SE" id="knowledge_SE2"/>
                        <label for="knowledge_SE2">Poco</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge_SE" id="knowledge_SE3"/>
                        <label for="knowledge_SE3">Medio</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge_SE" id="knowledge_SE4"/>
                        <label for="knowledge_SE4">Avanzado</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge_SE" id="knowledge_SE5"/>
                        <label for="knowledge_SE5">Experto</label>
                    </div>  
                </div>

                <div>
                    <label class="form-label">¿Cómo de adapatada a la Silver Economy crees que está tu web/app?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="adaptable_SE" id="adaptable_SE1"/>
                        <label for="adaptable_SE1">Nada</label>
                    </div>    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="adaptable_SE" id="adaptable_SE2"/>
                        <label for="adaptable_SE2">Poco</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="adaptable_SE" id="adaptable_SE3"/>
                        <label for="adaptable_SE3">Medio</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="adaptable_SE" id="adaptable_SE4"/>
                        <label for="adaptable_SE4">Mucho</label>
                    </div>                  
                </div>

                <div>
                    <label class="form-label">Sector de tu Empresa</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection1"/>
                        <label for="companySection1">Salud y Binestar</label>
                    </div>    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection2"/>
                        <label for="companySection2">Servicios Financieros</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection3"/>
                        <label for="companySection3">Tecnología de la comunicación</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection4"/>
                        <label for="companySection4">Ocio y Turismo</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection5"/>
                        <label for="companySection5">Alimentacion y consumo</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection6"/>
                        <label for="companySection6">Educación y Formación</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection7"/>
                        <label for="companySection7">Trasporte y Movilidad</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection8"/>
                        <label for="companySection8">Vivienda y entornos adaptados</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="companySection" id="companySection9"/>
                        <label for="companySection9">Otros</label>
                    </div>
                </div>

                <div>
                    <label class="form-label">Edad del público objetivo de tu empresa (Puedes elegir varios)</label>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="clientAge1"/>
                        <label for="clientAge1">Menor de 50 Años</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="clientAge2"/>
                        <label for="clientAge2">Entre 50 y 65 Años</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="clientAge3"/>
                        <label for="clientAge3">Entre 65 y 75 años</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="clientAge4"/>
                        <label for="clientAge4">Mayores de 75 años</label>
                    </div>              
                </div>

                <div>
                    <label class="form-label">¿Qué buscas en SilverTech? (Puedes elegir varios)   </label>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE1"/>
                        <label for="searching_SE1">Conocer más sobre Silver Economy </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE2"/>
                        <label for="searching_SE2">Adaptar mi empresa a la Silver Economy</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE3"/>
                        <label for="searching_SE3">Formarme en UX aplicado a Silver Economy</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE4"/>
                        <label for="searching_SE4">Encontrar colaboraciones con otras empresas</label>
                    </div>              
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE5"/>
                        <label for="searching_SE5">Estar enterado de las últimas tendencias relacionadas con Silver Economy </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="searching_SE6"/>
                        <label for="searching_SE6">Contratar asistencia técnica para mi Web </label>
                    </div>    
                </div>

                <div>
                    <label class="form-label">Presupuesto estimado anual en formación global y asistencia tecnica.</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="budget_SE" id="budget_SE1"/>
                        <label for="budget_SE1">{"<"} 5.000 euros anuales</label>
                    </div>    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="budget_SE" id="budget_SE2"/>
                        <label for="budget_SE2">Entre 5.000 y 10.000 euros</label>
                    </div>                  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="budget_SE" id="budget_SE3"/>
                        <label for="budget_SE3">Entre 10.000 y 50.000 euros</label>
                    </div>  
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="budget_SE" id="budget_SE4"/>
                        <label for="budget_SE4">Más de 50.000 euros</label>
                    </div>                  
                </div>

                <div>
                    <label class="form-label">¿Cuál es tu contenido de interés?  </label>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content1"/>
                        <label for="interest_content1">Introducción a la Silver Economy</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content2"/>
                        <label for="interest_content2">Tecnologías amigables para mayores</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content3"/>
                        <label for="interest_content3">Taller de UX Senior-Friendly </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content4"/>
                        <label for="interest_content4">Cuidado y asistencia técnica</label>
                    </div> 
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content5"/>
                        <label for="v5">Finanzas para la Silver Economy </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content6"/>
                        <label for="interest_content6">Salud y bienestar en la Silver Economy </label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content7"/>
                        <label for="interest_content7">Emprendimiento en la Silver Economy </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content8"/>
                        <label for="interest_content8">Marketing para el público Senior</label>
                    </div> 
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content9"/>
                        <label for="interest_content9">Adaptación de viviendas </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content10"/>
                        <label for="interest_content10">Tecnología de asistencia</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content11"/>
                        <label for="interest_content11">Seguridad y protección para mayores</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content12"/>
                        <label for="interest_content12">Comunicación y redes sociales</label>
                    </div> 
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content13"/>
                        <label for="interest_content13">Nutrición para la tercera edad</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content14"/>
                        <label for="interest_content14">Ejercicio y actividad física</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content15"/>
                        <label for="interest_content15">Derechos y asesoría legal </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content16"/>
                        <label for="interest_content16">Arte y cultura en la tercera edad</label>
                    </div> 
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content17"/>
                        <label for="interest_content17">Ejercicio y actividad física</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content18"/>
                        <label for="interest_content18">Turismo Senior</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content19"/>
                        <label for="interest_content19">Voluntariado y participación social</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="interest_content20"/>
                        <label for="interest_content20">Gestión de estrés y salud mental</label>
                    </div>  
                </div>

                <div>
                    <label class="form-label">Contacto</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <label class="form-label" >Descripción</label>
                    <input type="text" class="form-control" id="input-descripcion"/>
                </div>
                <div>
                    <label class="form-label">Subir Imagen</label>
                    <input type="file" class="form-control" />
                </div>

                
                <div id="btn-formulario2">
                    <Link to={``}  id="btn-form2"> Registrar </Link>                                 
                </div>
            </form>
        </>
    )
}

export default Formulario2;

/*
    <div class="form-check">
        <input class="form-check-input checkbox" type="checkbox" id=""/>
        <label for=""></label>
    </div>
    <div class="form-check">
        <input class="form-check-input checkbox" type="checkbox" id=""/>
        <label for=""></label>
    </div>   
    <div class="form-check">
        <input class="form-check-input checkbox" type="checkbox" id=""/>
        <label for=""></label>
    </div>
    <div class="form-check">
        <input class="form-check-input checkbox" type="checkbox" id=""/>
        <label for=""></label>
    </div> 
*/