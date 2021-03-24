import React from "react";
import { Link } from "react-router-dom";

const card = ({ paddingText, title, link, onDetails, cardImage }) => {
  let class_name = "courseCover admclass " + cardImage;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap",
        overflow: "hidden"
      }}
    >
      <ul className="te_course_list">
        <li
          className="mix te_49  ct_1 te_321 te_Yes search col-courses-card"
          style={{ display: "inline-block", boxShadow: "none" }}
          data-bound=""
        >
          <div className={class_name}></div>
          <div className="wrapCard">
            <div className="viewDetailcard">
              <Link
                to={link}
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(45, 71, 145)",
                  cursor: "pointer",
                  fontFamily: "Lato",
                  fontSize: "medium",
                  minWidth: "26rem",
                  minHeight: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={onDetails}
              >
                View more details
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default card;
