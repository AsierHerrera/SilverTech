/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Group } from "../Group";
import "./style.css";

export const GroupWrapper = ({
  className,
  groupGroupClassName,
  groupText = "de las empresas españolas <br/>están orientado sus productos<br/> al público sénior.",
}) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <Group className="group-78" groupClassName={groupGroupClassName} text={groupText} />
    </div>
  );
};

GroupWrapper.propTypes = {
  groupText: PropTypes.string,
};
