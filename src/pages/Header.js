import React from "react";
import logo from "../dist/img/logo_lg.png";

const Header = ({ title }) => {
  return (
    <div className="page-header">
      <div className="logo_contact">
        <img src={logo} className="page-header-logo" alt="Digitalshark" />
      </div>
    </div>
  );
};

export default Header;
