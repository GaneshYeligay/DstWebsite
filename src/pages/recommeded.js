import React from "react";
import { Link } from "react-router-dom";
const Recommeded = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Link
            to="/ContactUs"
            className="btn btn-default my-btn text-center pull-right "
            style={{
              position: "fixed",
              bottom: "0px",
              right: "0px",
              fontSize: "23px",
              borderRadius: "8px 8px 0px 0px"
            }}
            title="ContactUs"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Recommeded;
