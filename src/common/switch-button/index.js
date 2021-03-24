import React from "react";
import Styles from "./switch-button.module.css";
const Button = ({ flag, bgColor, onClick }) => {
  let style = {};
  let forIndividuals = flag ? "" : Styles["active"];
  let forBusiness = flag ? Styles["active"] : "";
  if (bgColor) {
    style = { background: bgColor };
  }
  return (
    <div className={Styles["switch_wrapper"]}>
      <div className={Styles["switch_button"]} style={style}>
        <button id="false" className={forIndividuals} onClick={onClick}>
          For Individuals
        </button>
        <button id="true" className={forBusiness} onClick={onClick}>
          For Business
        </button>
      </div>
    </div>
  );
};
export default Button;
