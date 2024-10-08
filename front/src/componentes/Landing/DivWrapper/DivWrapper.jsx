/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const DivWrapper = ({ className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="que-tus-usuarios-no-wrapper">
        <p className="que-tus-usuarios-no">
          Que tus usuarios no sean ágiles digitalmente,
          <br />
          no significa que tengas que <br />
          prescindir de tecnología avanzadada.
        </p>
      </div>
      <img className="frame-person" alt="Frame person" src="/img/frame-person.png" />
    </div>
  );
};
