import React from "react";
import "./HamburgerIcon.css";

function HamburgerIcon(props) {
  return (
    <div onClick={props.toggleNavBtnDisplay} className="NavToggleButton">
      <i className="fas fa-bars" />
    </div>
  );
}

export default HamburgerIcon;
