import React from "react";
import radium from "radium";
import { Link } from "react-router-dom";
const Products = (props) => {
  let sdpBody = {
    height: "auto",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem",
  };
  props.showHeader("Products");
  return (
    <React.Fragment>
      {/* <Header title="Products" /> */}

      <div className="container-fluid page-body">
        <div className="container sdp-body" style={sdpBody}>
          {/*------Content start------ */}

          <div
            className="service-inner-area acedimics-inida-body"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "6rem",
            }}
          >
            <ul className="te_course_list clearfix ">
              <li
                className="mix te_49  ct_1 te_321 te_Yes search col-courses-card"
                style={{ display: "inline-block" }}
                data-bound=""
              >
                <div className="courseCover iray_iiot_enbled_device admclass"></div>
                <div className="wrapCard">
                  <div className="courseCard-detail">
                    <div className="card">
                      <h4 className="b_inst_name" style={{ whiteSpace: "pre" }}>
                        {" "}
                        IIOT Device, pluggable module for manufacturing <br />
                        machines and act as a gateway to capture data
                      </h4>
                      <h2 style={{ textAlign: "center" }}>
                        <Link title="DST innovation LAB" to="/">
                          i-ray(iiot enabled gateway)
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="viewDetailcard">
                    <div className="btn-te">
                      <br />
                      <br />
                      <br />
                      <Link
                        className="btn btn-primary"
                        title="Learn More"
                        style={{ fontSize: "14px", backgroundColor: "#0f75bc" }}
                        to=""
                      >
                        View more details
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* i-ray dashboard */}

            <ul className="te_course_list clearfix text-center">
              <li
                className="mix te_49  ct_1 te_321 te_Yes search col-courses-card"
                style={{ display: "inline-block" }}
                data-bound=""
              >
                <div className="courseCover iray_dashboard admclass"></div>
                <div className="wrapCard">
                  <div className="courseCard-detail">
                    <div className="card">
                      <h4 className="b_inst_name" style={{ whiteSpace: "pre" }}>
                        <br />
                        Web App to display the data captured from I - Ray
                        <br />
                      </h4>
                      <h2>
                        <Link title="I Ray Dashboard" to="">
                          I-Ray Dashboard
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="viewDetailcard">
                    <div className="btn-te">
                      <br />
                      <br />
                      <br />
                      <Link
                        className="btn btn-primary"
                        title="Learn More"
                        style={{ fontSize: "14px", backgroundColor: "#0f75bc" }}
                        to=""
                      >
                        View more details
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* i-ray vhook */}
            <ul className="te_course_list clearfix text-center">
              <li
                className="mix te_49  ct_1 te_321 te_Yes search col-courses-card"
                style={{ display: "inline-block" }}
                data-bound=""
              >
                <div className="courseCover cloud-device  admclass"></div>
                <div className="wrapCard">
                  <div className="courseCard-detail">
                    <div className="card">
                      <h4 className="b_inst_name" style={{ whiteSpace: "pre" }}>
                        {" "}
                        <br />
                        A One Stop Video Calling Solution for I - Ray
                        <br />
                      </h4>
                      <h2>
                        <Link title="i-ray vhook" to="">
                          i-ray vhook
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="viewDetailcard">
                    <div className="btn-te">
                      <br />
                      <br />
                      <br />
                      <Link
                        className="btn btn-primary"
                        title="Learn More"
                        style={{ fontSize: "14px", backgroundColor: "#0f75bc" }}
                        to=""
                      >
                        View more details
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* content end */}
        </div>
      </div>
      {/*<Contactbar />*/}
    </React.Fragment>
  );
};

export default radium(Products);
