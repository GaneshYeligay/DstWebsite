import React from "react";

import Header from "../Header";

const Module = () => {
  let containerBody = {
    height: "100vh",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem"
  };

  return (
    <React.Fragment>
      <Header title="Page title" />
      <div className="container-fluid page-body">
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
