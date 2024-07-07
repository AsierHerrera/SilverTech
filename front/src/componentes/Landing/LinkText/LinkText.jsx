/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LinkText = ({ to }) => {
  return (
    <div className="link-text">
      <Link className="text-wrapper-2" to={to}>
        Inicio
      </Link>
    </div>
  );
};

LinkText.propTypes = {
  to: PropTypes.string,
};
