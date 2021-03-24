import React from "react";
import styles from "../../dist/css/title.module.css";
const Title = (props) => {
  const title = props.title;
  let style = { marginTop: " -1rem", height: "15rem" };
  let bodyTitle = {};
  if (props.imgStyle) {
    style = props.imgStyle;
  }

  if (props.img) {
    bodyTitle = {
      display: "flex",
      justifyContent: "center",
    };
  } else {
  }

  return (
    <div
      className={props.img ? null : styles["pageStyleTitle"]}
      style={bodyTitle}
    >
      {props.img ? (
        <img src={props.img} alt="" style={style} />
      ) : (
        <h2>
          <span>{title}</span>
        </h2>
      )}
    </div>
  );
};
export default Title;
