import React from 'react';
import './Landing.css';
import Footer2 from "../componentes/Footer/Footer2";

const Landing = () => {
  return (
    <>
    <section id="inicio-s1">
        <img src={banner} alt="" />
        <div>
            <div>
                <h2>Tus usuarios senior mejor atendidos con tecnologia amigable</h2>
                <h3>Consultora especializada en accesibilidad tecnológica de productos y servicios orientados al público sénior</h3>                        
            </div>
            <button>Más Información</button>
        </div>
    </section>
    <section id="inicio-s2">
        <h2>¿Cómo te está frenando la tecnología que usas actualmente?</h2>
        <div>
            <div>
                <img src={telephone} alt="" />
                <p>Dependes mucho de WhatsApp  para la comunicación con tus usuarios y sientes que no eres todo lo productivo que podrías ser.</p>
            </div>
            <div>
                <img src={arrows} alt="" />
                <p>Usas un programa informático pero acabas gestionando muchas tareas manualmente por teléfono o por email.</p>
            </div>
            <div>
                <img src={breaklink} alt="" />
                <p>Tienes una web completa y un equipo informático pero ves que muchos usuarios se pierden, no entienden o acaban abandonando el sitio web.</p>
            </div>
        </div>
    </section>
    <section id="inicio-s3">
        <h2>¿ Sabías qué ... ?</h2>
        <div>
            <div>
                <h3>50%</h3>
                <p>de las empresas españolas están orientado sus productos al público sénior.</p>
            </div>
            <div>
                <h3>61%</h3>
                <p>de personas mayores de 60 no han usado un servicio digital porque no sabían cómo utilizarlo.</p>
            </div>
            <div>
                <h3>6%</h3>
                <p>de las webs de la Admin. Pública cumple plenamente la directiva de accesibilidad.</p>
            </div>
        </div>
    </section>
    <section  id="inicio-s4">
        <img src={person} alt="" />
        <h2>Que tus usuarios no sean ágiles digitalmente, <br /> no significa que tengas que <br /> prescindir de tecnología avanzadada.</h2>
        <p>Cualquier tecnología no te vale. <br /> Necesitas un diseño amigable para ellos <br /> y un software eficiente para que tu organización avance sin frenos.</p>
        <button>Da el primer paso</button>
    </section>
    <section id="inicio-s5">
        <img src={banner2} alt="" />
        <div>
            <h2>Somos pioneros en desarrollar productos tecnológicos para personas senior</h2>
            <h3>Descubre nuestra plataforma de reservas y pasarela de pago para pequeñas empresas</h3>                        
        </div>
        <div>
            <button>Saber más</button> 
        </div>
    </section>
    <section id="inicio-s6">
        <h2>Senority, tu socio tecnológico ideal </h2>
        <p>Somo un <span>equipo hiperespecializado</span> con un propósito común que se ha formado en empresas como ...</p>
        <div>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
        </div>
    </section>
</>

  );
};

export default Landing;
