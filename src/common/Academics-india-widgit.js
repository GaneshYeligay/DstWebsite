import React from "react";
import { Link } from "react-router-dom";

const scrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "auto"
  });
};

const card = ({ paddingText, title, link, onDetails, cardImage, scrollUp }) => {
  let class_name = "courseCover admclass " + cardImage;

  return (
    <div
      className="col-md-6 col-sm-6 col-xs-12 col-lg-4 colpositionProduct"
      style={{ alignItems: "center", textAlign: "center" }}
    >
      <ul className="te_course_list te_course">
        <li
          className="mix te_49  ct_1 te_321 te_Yes search col-courses-card"
          style={{ display: "inline-block", boxShadow: "none" }}
          data-bound=""
        >
          <div className={class_name}></div>
          <div className="wrapCard">
            {/* <div className="courseCard-detail">
              <div className="card">
                <h4 className="b_inst_name" style={{ color: "white" }}>
                  {" "}
                  {paddingText}
                </h4>
                {title ? (
                  <h2 style={{ textAlign: "center" }}>
                    <Link title="DST innovation LAB" to="">
                      {" "}
                      {title}
                    </Link>
                  </h2>
                ) : null}
              </div>
            </div>
          */}
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
