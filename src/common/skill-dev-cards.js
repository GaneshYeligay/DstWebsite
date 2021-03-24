import React from "react";
import { Link } from "react-router-dom";
const SkillDevCards = ({
  collageName,
  programTitle,
  subTitleFirst,
  subTitleSecond,
  eventDate,
  eventDuration,
  detailsBtn,
  btnLink,
  wrapCard,
  imageCard
}) => {
  let classes = "courseCover admclass " + imageCard;
  return (
    <div
      className="col-md-6 col-sm-6 col-xs-12 col-lg-4 colPosSdp"
      style={{ alignItems: "center" }}
    >
      <ul className="te_course_list" style={{ padding: "0" }}>
        <li
          className="mix te_49  ct_1 te_321 te_Yes search col-courses-card colStackPosition"
          style={{ display: "inline-block" }}
        >
          <div className={classes}></div>
          <div className={wrapCard ? wrapCard : "wrapCard"}>
            <div className="courseCard-detail">
              <div className="card">
                {collageName ? (
                  <h4 className="b_inst_name">{collageName} </h4>
                ) : null}

                <h2>
                  {programTitle ? (
                    <Link style={{ cursor: "pointer" }} to="/">
                      {programTitle}
                    </Link>
                  ) : null}
                </h2>
              </div>
              <ul>
                {subTitleFirst ? <li>{subTitleFirst}</li> : null}
                {subTitleSecond ? <li>{subTitleSecond}</li> : null}
              </ul>
            </div>
            <div className="viewDetailcard">
              {/*  <!-- <div className="course_period"><span>May 2019</span> Batch</div>---> */}
              <div className="course_period">
                {eventDate ? (
                  <span>
                    {eventDate} | {eventDuration}
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="viewDetailcard">
            <Link
              // to={link}
              className="btn btn-primary"
              style={{
                backgroundColor: "rgb(45, 71, 145)",
                cursor: "pointer",
                fontFamily: "Lato",
                fontSize: "medium",
                minWidth: "26rem",
                minHeight: "4rem",
                // display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              // onClick={onDetails}
            >
              View more details
            </Link>
          </div>
        </li>
      </ul>

      {/*   <!--- end --> */}
    </div>
  );
};

export default SkillDevCards;
