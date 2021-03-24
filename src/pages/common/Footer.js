import React from "react";
// import radium from "radium";
// import { Link } from "react-router-dom";
// import DST from "../../dist/img/logo_lg.png";

const Footer = (props) => {
  return (
    <footer className="main-footer  text-center footerColor">
      {/* <div className="lineText"></div> */}
      <div className="firstRowFooter row ">
        <div className="col-md-12">
          <div className="social-icon col-md-6 col-sm-6 col-xs-12 ">
            <div className="social-icon-d2 col-md-1 paddingForIcon">
              <a
                className="icons"
                href="https://www.facebook.com/digitalsharktechs"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Account"
                /* style={{ fontSize: "25px", color: "white" }} */
                style={{ color: "white" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="social-icon-d2 col-md-1 paddingForIcon">
              <a
                className="icons"
                href="http://www.linkedin.com/company/digitalsharktechnology"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Account"
                /*  style={{ fontSize: "25px", color: "white" }} */
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="social-icon-d2 col-md-1 paddingForIcon">
              <a
                className="icons"
                href="http://www.instagram.com/digital.shark_technology/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Account"
                /* style={{ fontSize: "25px", color: "white" }} */
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="social-icon-d2 col-md-1 paddingForIcon">
              <a
                className="icons"
                href="http://www.twitter.com/Digitalshark_14?s=09"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter Account"
                /* style={{ fontSize: "25px", color: "white" }} */
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="social-icon-d2 col-md-1 paddingForIcon">
              <a
                className="icons"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Account"
                /* style={{ fontSize: "25px", color: "white" }} */
                style={{ color: "white" }}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-md-6">
           
          </div> */}
        </div>
      </div>
      <div className="secondRowFooter row ">
        {/* <div className="col-md-12"> */}
        <div className="social-links col-md-8 col-sm-12 col-xs-12">
          <ul className="o-list o-list--inline c-footer--legal-links ">
            <li className="o-list__item c-footer__legal-link">
              <a href="/ContactUs" style={{ color: "white" }}>
                Contact
              </a>
            </li>
            <li className="o-list__item c-footer__legal-link">
              <a href="/AboutUs" style={{ color: "white" }}>
                AboutUs
              </a>
            </li>

            <li className="o-list__item c-footer__legal-link">
              <a href="/Career" style={{ color: "white" }}>
                Careers
              </a>
            </li>
            <li className="o-list__item c-footer__legal-link">
              <a href="/Team" style={{ color: "white" }}>
                Team
              </a>
            </li>
          </ul>
        </div>
        <div className="social-cright col-md-4 col-sm-12 col-xs-12">
          <div className="copyRight">
            Copyright &copy; 2019-2020
            {/* <Link to=""> Digitalshark technology</Link> */}. All rights
            reserved.
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};
export default Footer;
