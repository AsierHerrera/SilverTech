import "./Formulario2.scss";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { createCompany } from "../../utils/fetch";

const Formulario2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        cif: '',
        address: '',
        phone: '',
        postalCode: '',
        website: '',
        size: '',
        nivelDeConocimiento: '',
        edadPublico: [],
        queBuscas: [],
        presupuesto: '',
        contenidoInteres: [],
        contact: '',
        description: '',
        imageUrl: ''
    });
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const navigate = useNavigate(); // Instancia useHistory


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            // Handle checkboxes separately to manage arrays (like edadPublico, queBuscas, contenidoInteres)
            const isChecked = e.target.checked;
            const arrayName = name;
            if (isChecked) {
                setFormData(prevState => ({
                    ...prevState,
                    [arrayName]: [...prevState[arrayName], value]
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [arrayName]: prevState[arrayName].filter(item => item !== value)
                }));
            }
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createdCompany = await createCompany(formData);
            //console.log('Empresa creada:', createdCompany);
            setRegistroExitoso(true); // Mostrar mensaje de éxito
            // Puedes también limpiar el formulario si es necesario
            setFormData({
                name: '',
                cif: '',
                address: '',
                phone: '',
                postalCode: '',
                website: '',
                size: '',
                nivelDeConocimiento: '',
                edadPublico: [],
                queBuscas: [],
                presupuesto: '',
                contenidoInteres: [],
                contact: '',
                description: '',
                imageUrl: ''
            });

            // Redirigir a la página de landing después de 1 segundo
            setTimeout(() => {
                navigate('/landing'); // Cambia '/landing' por la ruta correcta de tu página de destino
            }, 2000); // Espera 1 segundo antes de redirigir

        } catch (error) {
            console.error('Error al crear la empresa:', error.message);
        }
    };

    return (
        <>
            <p className="navegation-history-form"><span>Inicio</span> {" > "} <span>Registro</span> {" > "}</p>

            <form id="Formulario2" onSubmit={handleSubmit}>
                <h2>Formulario de la Empresa</h2>

                <div>
                    <label className="form-label">Nombre de la Empresa</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label">Número de CIF</label>
                    <input type="text" className="form-control" name="cif" value={formData.cif} onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label">telefono</label>
                    <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label">Código Postal</label>
                    <input type="text" className="form-control" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label">Sitio Web</label>
                    <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} required />
                </div>

                <div>
                    <label className="form-label">Tamaño de tu Empresa</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="companySize1" value="Pequeña: de 1 a 50 Empleados" onChange={handleChange} />
                        <label htmlFor="companySize1">Pequeña: de 1 a 50 Empleados</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="companySize2" value="Mediana: de 51 a 250 Empleados" onChange={handleChange} />
                        <label htmlFor="companySize2">Mediana: de 51 a 250 Empleados</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="companySize3" value="Grande: más de 250 Empleados" onChange={handleChange} />
                        <label htmlFor="companySize3">Grande: más de 250 Empleados</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">¿Cuál es tu nivel de conocimiento sobre la Silver Economy?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nivelDeConocimiento" id="knowledge_SE1" value="Nada" onChange={handleChange} />
                        <label htmlFor="knowledge_SE1">Nada</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nivelDeConocimiento" id="knowledge_SE2" value="Poco" onChange={handleChange} />
                        <label htmlFor="knowledge_SE2">Poco</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nivelDeConocimiento" id="knowledge_SE3" value="Medio" onChange={handleChange} />
                        <label htmlFor="knowledge_SE3">Medio</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nivelDeConocimiento" id="knowledge_SE4" value="Avanzado" onChange={handleChange} />
                        <label htmlFor="knowledge_SE4">Avanzado</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nivelDeConocimiento" id="knowledge_SE5" value="Experto" onChange={handleChange} />
                        <label htmlFor="knowledge_SE5">Experto</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">Sector de tu Empresa</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection1" value="Salud y Bienestar" onChange={handleChange} />
                        <label htmlFor="companySection1">Salud y Bienestar</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection2" value="Servicios Financieros" onChange={handleChange} />
                        <label htmlFor="companySection2">Servicios Financieros</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection3" value="Tecnología de la comunicación" onChange={handleChange} />
                        <label htmlFor="companySection3">Tecnología de la comunicación</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection4" value="Ocio y Turismo" onChange={handleChange} />
                        <label htmlFor="companySection4">Ocio y Turismo</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection5" value="Alimentación y Consumo" onChange={handleChange} />
                        <label htmlFor="companySection5">Alimentación y Consumo</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection6" value="Educación y Formación" onChange={handleChange} />
                        <label htmlFor="companySection6">Educación y Formación</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection7" value="Transporte y Movilidad" onChange={handleChange} />
                        <label htmlFor="companySection7">Transporte y Movilidad</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection8" value="Vivienda y entornos adaptados" onChange={handleChange} />
                        <label htmlFor="companySection8">Vivienda y entornos adaptados</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sector" id="companySection9" value="Otros" onChange={handleChange} />
                        <label htmlFor="companySection9">Otros</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">Edad del público objetivo de tu empresa (Puedes elegir varios)</label>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="clientAge1" name="edadPublico" value="Menor de 50 Años" onChange={handleChange} />
                        <label htmlFor="clientAge1">Menor de 50 Años</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="clientAge2" name="edadPublico" value="Entre 50 y 65 Años" onChange={handleChange} />
                        <label htmlFor="clientAge2">Entre 50 y 65 Años</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="clientAge3" name="edadPublico" value="Entre 65 y 75 años" onChange={handleChange} />
                        <label htmlFor="clientAge3">Entre 65 y 75 años</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="clientAge4" name="edadPublico" value="Mayores de 75 años" onChange={handleChange} />
                        <label htmlFor="clientAge4">Mayores de 75 años</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">¿Qué buscas en SilverTech? (Puedes elegir varios)</label>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE1" name="queBuscas" value="Conocer más sobre Silver Economy" onChange={handleChange} />
                        <label htmlFor="searching_SE1">Conocer más sobre Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE2" name="queBuscas" value="Adaptar mi empresa a la Silver Economy" onChange={handleChange} />
                        <label htmlFor="searching_SE2">Adaptar mi empresa a la Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE3" name="queBuscas" value="Formarme en UX aplicado a Silver Economy" onChange={handleChange} />
                        <label htmlFor="searching_SE3">Formarme en UX aplicado a Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE4" name="queBuscas" value="Encontrar colaboraciones con otras empresas" onChange={handleChange} />
                        <label htmlFor="searching_SE4">Encontrar colaboraciones con otras empresas</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE5" name="queBuscas" value="Estar enterado de las últimas tendencias relacionadas con Silver Economy" onChange={handleChange} />
                        <label htmlFor="searching_SE5">Estar enterado de las últimas tendencias relacionadas con Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="searching_SE6" name="queBuscas" value="Contratar asistencia técnica para mi Web" onChange={handleChange} />
                        <label htmlFor="searching_SE6">Contratar asistencia técnica para mi Web</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">Presupuesto estimado anual en formación global y asistencia técnica.</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="presupuesto" id="budget_SE1" value="< 5.000 euros anuales" onChange={handleChange} />
                        <label htmlFor="budget_SE1">{"<"} 5.000 euros anuales</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="presupuesto" id="budget_SE2" value="Entre 5.000 y 10.000 euros" onChange={handleChange} />
                        <label htmlFor="budget_SE2">Entre 5.000 y 10.000 euros</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="presupuesto" id="budget_SE3" value="Entre 10.000 y 50.000 euros" onChange={handleChange} />
                        <label htmlFor="budget_SE3">Entre 10.000 y 50.000 euros</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="presupuesto" id="budget_SE4" value="Más de 50.000 euros" onChange={handleChange} />
                        <label htmlFor="budget_SE4">Más de 50.000 euros</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">¿Cuál es tu contenido de interés?</label>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content1" name="contenidoInteres" value="Introducción a la Silver Economy" onChange={handleChange} />
                        <label htmlFor="interest_content1">Introducción a la Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content2" name="contenidoInteres" value="Tecnologías amigables para mayores" onChange={handleChange} />
                        <label htmlFor="interest_content2">Tecnologías amigables para mayores</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content3" name="contenidoInteres" value="Taller de UX Senior-Friendly" onChange={handleChange} />
                        <label htmlFor="interest_content3">Taller de UX Senior-Friendly</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content4" name="contenidoInteres" value="Cuidado y asistencia técnica" onChange={handleChange} />
                        <label htmlFor="interest_content4">Cuidado y asistencia técnica</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content5" name="contenidoInteres" value="Finanzas para la Silver Economy" onChange={handleChange} />
                        <label htmlFor="interest_content5">Finanzas para la Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content6" name="contenidoInteres" value="Salud y bienestar en la Silver Economy" onChange={handleChange} />
                        <label htmlFor="interest_content6">Salud y bienestar en la Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content7" name="contenidoInteres" value="Emprendimiento en la Silver Economy" onChange={handleChange} />
                        <label htmlFor="interest_content7">Emprendimiento en la Silver Economy</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content8" name="contenidoInteres" value="Marketing para el público Senior" onChange={handleChange} />
                        <label htmlFor="interest_content8">Marketing para el público Senior</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content9" name="contenidoInteres" value="Adaptación de viviendas" onChange={handleChange} />
                        <label htmlFor="interest_content9">Adaptación de viviendas</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content10" name="contenidoInteres" value="Tecnología de asistencia" onChange={handleChange} />
                        <label htmlFor="interest_content10">Tecnología de asistencia</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content11" name="contenidoInteres" value="Seguridad y protección para mayores" onChange={handleChange} />
                        <label htmlFor="interest_content11">Seguridad y protección para mayores</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content12" name="contenidoInteres" value="Comunicación y redes sociales" onChange={handleChange} />
                        <label htmlFor="interest_content12">Comunicación y redes sociales</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content13" name="contenidoInteres" value="Nutrición para la tercera edad" onChange={handleChange} />
                        <label htmlFor="interest_content13">Nutrición para la tercera edad</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content14" name="contenidoInteres" value="Ejercicio y actividad física" onChange={handleChange} />
                        <label htmlFor="interest_content14">Ejercicio y actividad física</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content15" name="contenidoInteres" value="Derechos y asesoría legal" onChange={handleChange} />
                        <label htmlFor="interest_content15">Derechos y asesoría legal</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content16" name="contenidoInteres" value="Arte y cultura en la tercera edad" onChange={handleChange} />
                        <label htmlFor="interest_content16">Arte y cultura en la tercera edad</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content17" name="contenidoInteres" value="Turismo Senior" onChange={handleChange} />
                        <label htmlFor="interest_content17">Turismo Senior</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content18" name="contenidoInteres" value="Voluntariado y participación social" onChange={handleChange} />
                        <label htmlFor="interest_content18">Voluntariado y participación social</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input checkbox" type="checkbox" id="interest_content19" name="contenidoInteres" value="Gestión de estrés y salud mental" onChange={handleChange} />
                        <label htmlFor="interest_content19">Gestión de estrés y salud mental</label>
                    </div>
                </div>

                <div>
                    <label className="form-label">Contacto</label>
                    <input type="text" className="form-control" id="contacto" name="contacto" onChange={handleChange} />
                </div>
                <div>
                    <label className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>

                <div>
                    <label className="form-label">Subir Imagen</label>
                    <input type="file" className="form-control" id="imagen" name="imagen" onChange={handleChange} />
                </div>
                {registroExitoso && (
                <div className="alert alert-success" role="alert">
                    Registro de la compañía realizado con éxito.
                </div>
                )}

                <div id="btn-formulario2">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
            </form>
        </>
    );
};

export default Formulario2;

