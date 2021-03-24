import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const Back_Button = props => {
  function goBack() {
    console.log("click happend");
    const { goBack } = this.props.navigation;
  }
  return (
    <div className="backBtnPosition">
      <div className="backBtnText"></div>
    </div>
  );
};
export default Back_Button;
