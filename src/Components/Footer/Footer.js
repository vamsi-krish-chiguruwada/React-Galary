import React from "react";
import "./Footer.css";
import FooterAbout from "../FooterAbout/FooterAbout";
import FooterMiddle from "../FooterMiddle/FooterMiddle";
import FooterRight from "../FooterRight/FooterRight";
function Footer() {
  return (
    <div className="Footer">
      <div className="footerContent">
        <div className="footerContent1">
          <FooterAbout />
          <div className="footerLinksHolder">
            <FooterMiddle />
            <FooterRight />
          </div>
        </div>
        <div className="footerAuthor">
          <p>Copyright 2020 Catalog-Z Company. All rights reserved.</p>
          <p>Designed by TemplateMo</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
