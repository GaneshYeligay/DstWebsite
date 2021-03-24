import React from "react";

const P = props => {
  let style = {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#777171"
  };

  return <p style={style}>{props.children}</p>;
};

export { P };
