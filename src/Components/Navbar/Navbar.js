import React, { useState } from "react";
import "./Navbar.css";
import Icon from "../Icon/Icon";
import NavLinks from "../NavLinks/NavLinks";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

function Navbar() {
  let [show, setShow] = useState(false);

  const toggleNavBtnDisplay = () => {
    setShow(!show);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Icon />
        <div className="displayFlex">
          <HamburgerIcon toggleNavBtnDisplay={toggleNavBtnDisplay} />
          <div className={show ? "show navButtonsHolder" : "navButtonsHolder"}>
            <NavLinks show={show} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
