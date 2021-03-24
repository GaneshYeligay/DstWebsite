import React from "react";
import { Link } from "react-router-dom";
import {} from "./linkButton.css";
const ViewMore = ({ title, to }) => {
  return (
    <div className="view-more-container default-theam">
      <Link
        to={to}
        className="btn btn-primary"
        style={{
          fontSize: "14px",
          backgroundColor: "#2d4791",
          cursor: "pointer",
          width: "85%",
          height: "36px",
          padding: "6px",
          marginTop: "-9px",
          borderRadius: "4px"
        }}
      >
        {title ? title : "View more details"}
      </Link>
    </div>
  );
};

export { ViewMore };
