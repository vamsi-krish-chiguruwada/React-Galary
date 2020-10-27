import React from "react";
import "./FooterRight.css";

function FooterRight() {
  return (
    <div className="footerContentRight">
      <div className="footerIcons">
        <ul>
          <li>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-github" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className="footerTermsAndPolacy">
        <p>Terms Of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default FooterRight;
