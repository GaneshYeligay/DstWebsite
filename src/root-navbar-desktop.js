import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./dist/css/trans.css";
import Radium from "radium";
import domains from "./config/domains.json";
import smLogo from "./dist/img/smLogo.png";

const DesktopSideNavBar = () => {
  const [position, setPosition] = useState(0);

  let style = {
    height: "100vh",
    backgroundColor: "#2d4791",
    width: "78px",
    position: "fixed",
    zIndex: "101",
    display: "none",
    "@media screen and (min-width:992px)": { display: "block" }
  };
  

  const listenToScroll = () => {
    setPosition(window.pageYOffset);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  window.addEventListener("scroll", listenToScroll);
  return (
    <aside style={style}>
      <div className="bhoechie-tab-menu ">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="list-group list-group-hover"
        >
         
          {position > 80 ? (
            <Link
              to="/"
              className="list-group-item text-center menu-header"
              autoFocus={true}
              onClick={scrollTop}
            >
              <div
                style={{
                  marginLeft: "-1rem",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column-reverse"
                }}
              >
                <strong style={{ fontSize: "1.6rem", marginLeft: "1rem" }}>
                  DST
                </strong>
                <img src={smLogo} alt="" style={{ height: " 3rem", width: "6rem" }} />
              </div>
            </Link>
          ) : null}
          <Link
            to="/"
            className="list-group-item text-center menu-header"
            autoFocus={true}
            onClick={scrollTop}
          >
            <i className="material-icons">home</i>
          </Link>

          {/*  <!-- Acedmics --> */}
          <Link
            to="/Engineering-Services"
            className="list-group-item text-center menu-header" style={{display: "inline-block"}}
            onClick={scrollTop}
          >
            <i className="material-icons" style={{width: "100%"}}>memory</i>
            Engineering Services
          </Link>


          {/*  <!-- Acedmics --> */}
          <a
            href={domains.academic}
            className="list-group-item text-center menu-header" style={{display: "inline-block"}}
            target="_blank" rel="noopener noreferrer"
          >
            <i className="material-icons">school</i>
            Product Distribution
          </a>
          <Link
            to="/Product_Desc"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            <i className="material-icons">build</i>
            Product
          </Link>

          {/* <!-- Team --> */}
          <Link
            to="Team"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            <i className="material-icons">supervisor_account</i>
            Team
          </Link>

        
          <Link
            to="Career"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            <i className="material-icons "> work</i>
            <span>Careers</span>
          </Link>
           
        </ReactCSSTransitionGroup>
        {/*  <!-- tabs menu end here..--> */}
      </div>
    </aside>
  );
};

export default Radium(DesktopSideNavBar);
