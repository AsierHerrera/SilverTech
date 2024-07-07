/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonHeroPrimary = ({ property1, className, linkTextClassName, text = "Crear tu cuenta gratis" }) => {
  return (
    <div className={`button-hero-primary ${property1} ${className}`}>
      <div className={`text-wrapper ${linkTextClassName}`}>{text}</div>
    </div>
  );
};

ButtonHeroPrimary.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  text: PropTypes.string,
};
