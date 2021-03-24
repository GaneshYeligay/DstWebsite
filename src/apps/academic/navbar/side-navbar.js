import React from "react";
import { Link } from "react-router-dom";

import Radium from "radium";
const DesktopSideNavBar = () => {

  let style = {
    height: "100vh",
    backgroundColor: "#2d4791",
    width: "78px",
    position: "fixed",
    zIndex: "101",
    display: "none",
    "@media screen and (min-width:992px)": { display: "block" }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <aside style={style}>
      <div className="bhoechie-tab-menu ">
        <div className="list-group list-group-hover">
          {/* <!-- tabs menu goes here..-->
            <!-- Home --> */}

          <Link
            to="/"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            {/*       <!--  <h4 class="glyphicon glyphicon-credit-card"></h4> --> */}
            <i className="material-icons" style={{ fontSize: "30px" }}>
              home
            </i>
            Home
          </Link>
          {/*  <!-- Testing m route --> */}
          <Link
            to="/dst-innovation-lab"
            className="list-group-item text-center menu-header " style={{display: "inline-block"}}
            onClick={scrollTop}
          >
            {/* <!--  <h4 class="glyphicon glyphicon-credit-card"></h4> --> */}
            <i
              className="fas fa-flask material-icons"
              style={{ fontSize: "30px" }}
            ></i>
            Innovation LAB
          </Link>

          <Link
            to="/prodcts-parterns"
            className="list-group-item text-center menu-header " style={{display: "inline-block"}}
            onClick={scrollTop}
          >
            {/* <i className="material-icons" style={{ fontSize: "30px" }}>
              layers
            </i> */}
            <i
              className="fas fa-handshake material-icons"
              style={{ fontSize: "30px" }}
            ></i>
            Product Partner
          </Link>

          {/*  <!-- Acedmics --> */}
          <Link
            to="/sdp"
            className="list-group-item text-center menu-header" style={{display: "inline-block"}}
            onClick={scrollTop}
          >
            {/*         <!--  <h4 class="glyphicon glyphicon-credit-card"></h4> --> */}
            {/* <i className="material-icons" style={{ fontSize: "30px" }}>
              build
            </i> */}
            <i
              className="fas fa-brain material-icons"
              style={{ fontSize: "30px" }}
            ></i>
            Skill Development
          </Link>
          {/* <!-- Team --> */}
          <Link
            to="/Technical-finishing-school"
            className="list-group-item text-center menu-header" style={{display: "inline-block"}}
            onClick={scrollTop}
          >
            <i className="material-icons" style={{ fontSize: "30px" }}>
              import_contacts
            </i>
            Finishing school
          </Link>

          {/*  <!-- About us --> */}
          <Link
            to="/Internship"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            <i className="material-icons" style={{ fontSize: "30px" }}>
              how_to_reg
            </i>
            Internships
          </Link>
          <Link
            to="/Team"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
            {/*    <!--  <h4 class="glyphicon glyphicon-credit-card"></h4> --> */}
            <i className="material-icons" style={{ fontSize: "30px" }}>
              supervisor_account
            </i>
            Team
          </Link>
           {/*    <!--  <h4 class="glyphicon glyphicon-credit-card"></h4> --> */}
         {/*  <Link
            to="/Corporate-Testimonials"
            className="list-group-item text-center menu-header"
            onClick={scrollTop}
          >
           
            <i className="material-icons" style={{ fontSize: "30px" }}>
              thumb_up
            </i>
            Testimonials
          </Link> */}
          {/*  <!-- tabs menu end here..--> */}
        </div>
      </div>
    </aside>
  );
};

export default Radium(DesktopSideNavBar);
