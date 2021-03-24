import React from "react";
import "./Main-comp.css";
import "../dist/img/second-2.jpg";
import "./course-listing.css";
/* import TabContainer from "../TabContent"; */
const Content = (props) => {
  return (
    <div className="content-wrapper">
      <section className="content">
        {props.children}
        {/*    <TabContainer /> */}
      </section>
    </div>
  );
};

export default Content;
