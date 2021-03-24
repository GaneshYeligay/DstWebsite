import React, { Component } from "react";
import Radium from "radium";
/* import ff from "../../../dist" */
import image from "../../../dist/img/favicon.png";
import { Link } from "react-router-dom";
/* import domains from "./config/domains.json"; */
const onDetails = e => {
  let selectedTb = document.body;
  selectedTb.classList.remove("sidebar-open");
  window.scrollTo({
    top: 0
  });
};

class Drawer extends Component {
  render() {
    let style = {
      backgroundColor: "#2d373f",
      height: "100%",
      position: "fixed",
      display: "none",
      "@media screen and (max-width:767px)": { display: "block" },
      boxShadow: "0 0 2px 2px rgba(54,54,54,0.15)"
    };

    let sidebarStyle = {
      display: "none",
      "@media screen and (max-width:767px)": { display: "block" }
    };

    return (
      <aside
        className="main-sidebar sidebar-dark-primary elevation-0"
        style={style}
      >
        {/* <!-- Sidebar --> */}

        <div className="sidebar" style={sidebarStyle}>
          {/* <!-- Sidebar user panel (optional) --> */}

          {/* <!--- desktop navbar starts here  --> */}

          {/* <!-- desktop navbar end here --> */}

          {/* <!-- Sidebar Menu --> */}
          <nav>
            <ul
              className="nav  nav-sidebar flex-column lg-navbar"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- Add icons to the links using the .nav-icon className
                             with font-awesome or any other icon font library -->
              
              <!-- space --> */}
              <li
                className="nav-header"
                style={{
                  height: "45px",
                  background: "#3e4a54",
                  marginLeft: "-5px",
                  marginRight: "-5px"
                }}
              >
                <div className="row">
                  <div className="col-xs-6">
                    <p
                      style={{
                        fontSize: "18px",
                        float: "left",
                        color: "white"
                      }}
                    >
                      <img
                        src={image} alt=""
                        style={{
                          height: "23px",
                          width: "18px"
                        }}
                      />{" "}
                      Digital Shark
                    </p>
                  </div>
                  <div className="col-xs-6">
                    <i
                      id="closenav"
                      className="fa fa-times fa-3x"
                      aria-hidden="true"
                      style={{
                        float: "right",
                        color: "white",
                        marginTop: "6px",
                        fontSize: "2.5em"
                      }}
                    ></i>
                  </div>
                </div>
              </li>
              <br />
              {/* <!---  Home   --> */}
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={onDetails}>
                  <i
                    className="material-icons"
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      padding: "0px"
                    }}
                  >
                    home
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Home</p>
                </Link>
              </li>

              <li className="nav-item" >
                <Link
                  to="/dst-innovation-lab"
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
                    emoji_objects
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">DST Innovation LAB</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/prodcts-parterns"
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i
                    className="fas fa-handshake material-icons"
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      padding: "0px"
                    }}
                  ></i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Product Partners</p>
                </Link>
              </li>
              {/* <!---  Academics   End  --> */}

              {/* <!---  Products   --> */}
              <li className="nav-item">
                <Link to="/sdp" className="nav-link" onClick={onDetails}>
                  <i
                    className="material-icons"
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      padding: "0px"
                    }}
                  >
                    sports_handball
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Skill Development</p>
                </Link>
              </li>
              {/* <li className="nav-item has-treeview ">
                <Link to="/Products" className="nav-link">
                  <i
                    className="nav-icon fab fa-product-hunt"
                    style={{ fontSize: "1.9rem", color: "white" }}
                  ></i>

                  <p className="PListHeader">
                    Products
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link" onClick={onDetails}>
                      <i className="fa fa-arrow-right colorCode"></i>
                      <p className="PListMenu">I-Ray(iiot enabled gateway)</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link" onClick={onDetails}>
                      <i className="fa fa-arrow-right colorCode"></i>
                      <p className="PListMenu">I-Ray Dashboard</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link" onClick={onDetails}>
                      <i className="fa fa-arrow-right colorCode"></i>
                      <p className="PListMenu">I-Ray vhook</p>
                    </Link>
                  </li>
                </ul>
              </li>
 */}
              {/* <!---  Products  End  --> */}

              {/* <!---  Team    --> */}
              <li className="nav-item">
                <Link
                  to="/Technical-finishing-school"
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i
                    className="material-icons "
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      padding: "0px"
                    }}
                  >
                    work
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Technical finishing school</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Internship" className="nav-link" onClick={onDetails}>
                  <i
                    className="material-icons"
                    style={{ fontSize: "3rem", color: "white", padding: "0px" }}
                  >
                    how_to_reg
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Internships</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Team" className="nav-link" onClick={onDetails}>
                  <i
                    className="material-icons"
                    style={{ fontSize: "3rem", color: "white", padding: "0px" }}
                  >
                    supervisor_account
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Team</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Corporate-Testimonials"
                  className="nav-link"
                  onClick={onDetails}
                >
                  <i
                    className="material-icons"
                    style={{ fontSize: "3rem", color: "white", padding: "0px" }}
                  >
                    thumb_up
                  </i>
                  &nbsp;&nbsp;
                  <p className="PListHeader">Testimonials</p>
                </Link>
              </li>
              {/* <!---  Team end   --> */}

              {/* <!---  About us   --> */}

              {/* <!---  Abo/ut end   --> */}
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    );
  }
}

export default Radium(Drawer);
