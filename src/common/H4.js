import React from "react";

const H4 = props => {
  let style = {
    fontFamily: "Raleway, sans-serif",
    color: "#2f2b2b",
    lineHeight: "1.1",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "10px",
    padding: "0",
    textTransform: "uppercase"
  };
  return (
    <h4 className={props.className} style={style}>
      {props.children}
    </h4>
  );
};

export { H4 };
