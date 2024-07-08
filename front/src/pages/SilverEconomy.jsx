import Footer2 from "../componentes/Footer/Footer2";

import React from 'react';
import './SilverEconomy.css'; 

const SilverEconomy = () => {
  const content = [
    {
      text: "La 'silver economy' se refiere a todas las actividades económicas relacionadas con las personas mayores de 50 años. Este grupo demográfico está creciendo rápidamente y tiene un poder adquisitivo significativo, lo que lo convierte en un segmento de mercado importante.",
      img: '/silver1.jpg', 
    },
    {
      text: "La economía plateada abarca una variedad de sectores, incluidos la salud, el bienestar, la tecnología, los viajes y el ocio. Las empresas están desarrollando productos y servicios específicamente dirigidos a satisfacer las necesidades y preferencias de los adultos mayores.",
      img: '/silver2.jpg', 
    },
    {
      text: "Invertir en la silver economy no solo beneficia a las empresas, sino que también puede tener un impacto positivo en la sociedad al mejorar la calidad de vida de las personas mayores. Esto incluye la creación de empleos y el fomento de un envejecimiento activo y saludable.",
      img: '/silver3.jpg', 
    },
  ];

  return (
    <div className="silver-economy">
      {content.map((item, index) => (
        <div key={index} className={`section ${index === 1 ? 'left-text' : 'right-text'}`}>
          <div className="text">
            <p><b>{item.text}</b></p>
          </div>
          <div className="image">
            <img src={item.img} alt="Silver Economy" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SilverEconomy;
