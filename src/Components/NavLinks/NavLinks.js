import React from "react";
import "./NavLinks.css";

function NavLinks(props) {
  const links = ["Photos", "Videos", "About", "Contact"];
  return (
    <ul className={props.show ? "NavLinkUl flowColung scale-up-tr" : "NavLinkUl"}>
      {links.map((per) => {
        return (
          <li key = {per}>
            <p className={per}>{per}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
