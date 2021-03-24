import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./dist/img/logo_lg_croped.png";
import radium from "radium";
import styles from "./top-navbar.module.css";
class Sidebar extends Component {
  render() {
    return (
      <nav
        className="main-header navbar navbar-expand navbar-white navbar-light border-bottom"
        style={{ marginBottom: "0px", position: "fixed", top: "0%" }}
      >
        {/* <!-- Left navbar links --> */}

        <div className={styles["top-navbar-width"]}>
          <div className="col-xs-6">
            <Link className="nav-link" data-widget="pushmenu" to="#">
              <i
                className="fas fa-bars fa-2x "
                style={{ marginTop: "8px" }}
              ></i>
            </Link>
          </div>
          <div className="col-xs-6" style={{ paddingRight: "0px" }}>
            <img
              src={image}
              alt="digital shark"
              style={{ height: "52px", float: "right" }}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default radium(Sidebar);
