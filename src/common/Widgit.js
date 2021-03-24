import React from "react";

const Widgit = props => {
  let height = null;
  let width = null;

  width = props.width ? props.width : "7rem";
  height = props.height ? props.height : "7rem";

  return (
    <div
      className="technologies-data card-1"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img src={props.img} />
      <a
        style={{
          borderBottom: "0",

          cursor: "pointer",
          fontWeight: "600",
          fontSize: "2.6rem",
          margin: "0",
          padding: "2rem",
          fontFamily: "Lato",
          textDecoration: "none"
        }}
      >
        {/*   Embedded Solutions */}
        {props.title}
      </a>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "1.7rem",
          color: "#4e4b4b",
          fontFamily: "Roboto",
          lineHeight: "1.8rem",
          maxWidth: "36rem",
          justifyContent: "center"
        }}
      >
        {props.children}
        
      </div>
    </div>
  );
};
export default Widgit;
