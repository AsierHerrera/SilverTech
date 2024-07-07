/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({
  className,
  groupClassName,
  text = "de las empresas españolas <br/>están orientado sus productos<br/> al público sénior.",
}) => {
  return (
    <div className={`group ${className}`}>
      <div className={`de-las-empresas-espa-wrapper ${groupClassName}`}>
        <p className="de-las-empresas-espa">{text}</p>
      </div>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
};
