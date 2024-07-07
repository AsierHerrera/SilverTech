import React from 'react';
import './Landing.css';
import Footer2 from "../componentes/Footer/Footer2";

const Landing = () => {
  return (
    <div className="image-gallery">
      <img src="/Landing1.jpg" alt="Landing 1" className="i" />
      <img src="/Landing2.jpg" alt="Landing 2" className="i" />
      <img src="/Landing3.jpg" alt="Landing 3" className="i" />
      <img src="/Landing4.jpg" alt="Landing 4" className="i" />
      <img src="/Landing5.jpg" alt="Landing 5" className="i" />
      <img src="/Landing6.jpg" alt="Landing 6" className="i" />
      <img src="/Landing7.jpg" alt="Landing 7" className="i" />

      <Footer2 />
    </div>
  );
};

export default Landing;
