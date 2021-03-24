import React from "./node_modules/react";
import Img from "../dist/img/logo_lg.png";
const logo = () => {
  return (
    <React.Fragment>
      <div
        className="imglglogo"
        style={{
          position: "absolute",
          top: "0",
          left: "11rem",
          zIndex: "100"

          //   position: "fixed"
        }}
      >
        <img src={Img} style={{ height: "60px" }} />
      </div>
    </React.Fragment>
  );
};
export default logo;
