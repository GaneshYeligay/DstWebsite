import React, { Component } from "react";
import Radium from "radium";
import image from "./dist/img/smLogo.png";
import { Link } from "react-router-dom";
import domains from "./config/domains.json";
import "./dist/css/drawer.css";
const onDetails = (e) => {
  let selectedTb = document.body;
  selectedTb.classList.remove("sidebar-open");
  window.scrollTo({
    top: 0,
  });
};

class MobileNav extends Component {
  render() {
    let style = {
      backgroundColor: "#2d373f",
      height: "100%",
      position: "fixed",
      display: "none",
      "@media screen and (max-width:767px)": { display: "block" },
      boxShadow: "0 0 2px 2px rgba(54,54,54,0.15)",
    };

    let sidebarStyle = {
      display: "none",
      "@media screen and (max-width:767px)": { display: "block" },
    };

    return (
      <aside
        className="main-sidebar sidebar-dark-primary elevation-0"
        style={style}
      >

        <div className="sidebar mobile-nav-bar" style={sidebarStyle}>
        
          <nav>
            <ul
              className="nav  nav-sidebar flex-column lg-navbar"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              
              <li
                className="nav-header"
                style={{
                  height: "45px",
                  background: "#3e4a54",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                }}
              >
                <div className="row">
                  <div className="col-xs-8">
                    <div className="drawer-logo">
                      <img
                        src={image}
                        alt=""
                        style={{
                          height: "23px",
                          width: "4rem",
                        }}
                      />

                      <p
                        style={{
                          fontSize: "20px",

                          color: "white",
                          fontFamily: "Roboto",
                        }}
                      >
                        Digital Shark
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <i
                      id="closenav"
                      className="fa fa-times "
                      aria-hidden="true"
                      style={{
                        float: "right",
                        color: "#8c949a",
                        fontSize: "3rem",
                        marginTop: "6px",
                      }}
                    ></i>
                  </div>
                </div>
              </li>
              <br />
              {/* <!---  Home   --> */}
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={onDetails}>
                  <i className="material-icons">home</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Home</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Engineering-Services"
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i className="material-icons ">memory</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Engineering Services</p>
                </Link>
              </li>
              
              <li className="nav-item">
                <a
                  href={domains.academic}
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i
                    className="material-icons"
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      padding: "0px",
                    }}
                  >
                    school
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Product Distribution</p>
                </a>
              </li>

              {/* <!---  Academics   End  --> */}

              
              <li className="nav-item">
                <Link
                  to="Product_Desc"
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i className="material-icons">build</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Product</p>
                </Link>
              </li>

              {/* <!---  Team    --> */}

              <li className="nav-item">
                <Link to="Team" className="nav-link" onClick={onDetails}>
                  <i className="material-icons">supervisor_account</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Team</p>
                </Link>
              </li>

              {/* <!---  Team end   --> */}

              {/* contact */}
              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link" onClick={onDetails}>
                  <i className="material-icons">contact_phone</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Contact</p>
                </Link>
              </li>

              {/* <!---  About us   --> */}

              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link" onClick={onDetails}>
                  <i className=" material-icons"> help</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">About us</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Career" className="nav-link" onClick={onDetails}>
                  <i className=" material-icons"> work</i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Career</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Radium(MobileNav);
