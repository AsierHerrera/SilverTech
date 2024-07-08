import "./Recursos.scss";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import Modal from "../../componentes/modal/Modal";
import CreateRecurso from "../../componentes/recurso/CreateRecurso";
import Courses from "../Courses";
import banner from "../../../public/banner_cursos.png";
import evento1 from "../../../public/evento1.png";
import evento2 from "../../../public/evento2.png";
import evento3 from "../../../public/evento3.png";
import evento4 from "../../../public/evento4.png";
import evento5 from "../../../public/evento5.png";
import evento6 from "../../../public/evento6.png";
import { getRecursos } from "../../utils/fetch";

const Recursos = () => {
  const { user } = useContext(UserContext);
  const [creatingRecurso, setCreatingRecurso] = useState(false);
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    const fetchRecursosData = async () => {
      try {
        const recursosData = await getRecursos();
        console.log("Recursos obtenidos:", recursosData);
        setRecursos(recursosData);
      } catch (error) {
        console.error('Error al obtener los recursos:', error.message);
      }
    };
    fetchRecursosData();
  }, []);

  const formacionRecursos = recursos.filter(recurso => recurso.resourceType === "Formacion").slice(0, 3);
  const eventoRecursos = recursos.filter(recurso => recurso.resourceType === "Evento").slice(0, 3);
  const covers = [evento1, evento2, evento3, evento4, evento5, evento6];

  return (
    <>
      <section id="recursoList">
        {user?.role === "admin" && (
          <>
            {creatingRecurso ? (
              <Modal onClose={() => setCreatingRecurso(false)}>
                <CreateRecurso onCreate={() => setCreatingRecurso(false)} />
              </Modal>
            ) : (
              <button onClick={() => setCreatingRecurso(true)} id="btn-create">Nuevo Recurso</button>
            )}
          </>
        )}

        <img src={banner} alt="" id="Banner" />
        <p className="cursos-compromiso">
          En nuestra sociedad, la población mayor de 50 años está creciendo y con ella, una economía llena de oportunidades conocida como la Silver Economy. En <span>SILVER</span><span>TECH</span>, hemos diseñado una serie de talleres y cursos específicamente dirigidos a esta demografía, con el objetivo de empoderar, educar y ofrecer nuevas oportunidades de desarrollo personal y profesional.
        </p>
        <h1 id="cursos-talleres">Cursos y Talleres</h1>

        <div id="card-list">
          {formacionRecursos.map((recurso, index) => (
            <Courses
              key={recurso._id}
              img={covers[index % covers.length]} // Asigna una imagen de la lista de covers de manera cíclica
              name={recurso.name}
              startDate={recurso.startDate}
              modality={recurso.modality}
              availableSlots={recurso.availableSlots}
              price={recurso.price}
            />
          ))}
          <div className="cursos-beneficios">
            <p>Beneficios de Participar</p>
            <ul>
              <li>Actualización de Conocimientos: Mantente al día con las últimas tendencias y tecnologías.</li>
              <li>Mejora de la Calidad de Vida: A través de actividades que promuevan la salud, la creatividad y el bienestar.</li>
              <li>Conexión Social: Conoce a personas con intereses similares y amplía tu red de contactos.</li>
              <li>Oportunidades de Empleo y Emprendimiento: Prepárate para nuevas oportunidades laborales y de negocios.</li>
            </ul>
          </div>
          {eventoRecursos.map((recurso, index) => (
            <Courses
              key={recurso._id}
              img={covers[(index + 3) % covers.length]} // Asigna una imagen de la lista de covers de manera cíclica
              name={recurso.name}
              startDate={recurso.startDate}
              location={recurso.modality === "Presencial" ? "Bilbao, Urazurrutia Kalea 3" : "Online"}
              availableSlots={recurso.availableSlots}
              price={recurso.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Recursos;
