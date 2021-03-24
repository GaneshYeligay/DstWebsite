import React from "react";
import radium from "radium";
import { H4 } from "../../common";
import "../Technical-finishing-school.css";
import Data from "../../dataset/TechnicalFinishingSchool";

import CareerForm from "./form/careerform";
import crossImage from "../../dist/img/afterCorrection/dataImage-mob.png";
import careerBnrImage from "../../dist/img/afterCorrection/internship-crop.png";
import background2 from "../../dist/img/academic/background2.png";
import edu from "../../dist/img/afterCorrection/edu.png";
const Career = (props) => {
  let batch_starting_date = Data.batch_starting_date;
  let paraHeading = {
    fontFamily: "Raleway, sans-serif",
    color: "#2f2b2b",
    lineHeight: "1.1",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "10px",
    padding: "0",
    textTransform: "uppercase",
  };
  let inputStyle = {
    border: "1px solid #ced4da",
    height: "39px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "13px",
    lineHeight: "1.4285714",
    color: "#777171",
    padding: "6px 12px",
    marginTop: "16px",
  };

  let sdpBody = {
    height: "auto",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem",
  };

  let paragraph = {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#777171",
  };

  return (
    <React.Fragment>
      <section>
        <div className="ContainerCareer CareerBannerImage">
          <img
            className="CareerBackgroundImage"
            src={background2}
            alt="background"
          ></img>
          <div className="CareerBannerDataPosition">
            <h2>Unity is our strength </h2>

            <p>
              Alone we can do so little, together we can do so much. when there
              is teamwork and collaboration, wonderful things can be achieved,
              Individual commitment to a group effort--that is what makes a
              company work
            </p>
            <div
              className="LearnMoreLink"
              onClick={(e) => {
                window.scrollTo({
                  top: 771,
                  behavior: "smooth",
                });
              }}
            >
              Learn More <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="CareerImagePosition banner-item-home-img">
            <img src={edu} alt="team"></img>
          </div>
        </div>
      </section>

      <section>
        <div className="imageDisplayCareer">
          <div className="arrowImagePositionCareer">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentCareer">
            <h2>Career</h2>
            <p>
              Choose a job you love, and you will never have to work a day in
              your life
            </p>
          </div>
          <div className="BnrImageCareer banner-item-home-img">
            <img src={careerBnrImage} alt="BnrImage"></img>
          </div>
        </div>
      </section>

      <section>
        <div className="containerForm">
          <div className="formOverlay">
            <div className="AreaText">
              <h4>Join Us</h4>
            </div>
            <div className="row">
              <div className="rowCard">
                <form>
                  <div className="row">
                    <label>Upload Your Resume we will get back to you</label>
                  </div>
                  <CareerForm />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid page-body" style={{ display: "none" }}>
        <div className="container sdp-body" style={sdpBody}>
          <div className="row two-column-body mt-0">
            {/*First column  */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <h3 style={paraHeading}>Technical Finishing School</h3>
              <p className="text-justify" style={paragraph}>
                Choose a job you love, and you will never have to work a day in
                your life
              </p>

              <br />
              <h4 className="lowerh" style={{ fontWeight: "normal" }}>
                <strong>New Batch starting :</strong>
                {batch_starting_date}
              </h4>
              <br />
              <p></p>
              <h3 style={paraHeading}>
                <u>Overview</u>
              </h3>
              <br />
              <p></p>

              <h3>Job Opportunity</h3>
              <p className="text-justify" style={paragraph}>
                {" "}
                Get a Job on successful completion of the training &amp;
                employer assessment.
              </p>

              <br />
              <h3>Who should attend?</h3>
              <p className="text-justify" style={paragraph}>
                {" "}
                2018 Engineering Graduates from circuit batches who are looking
                for a Job in Core Companies.
              </p>
              <br />

              <h3>Intensive Training</h3>
              <p className="text-justify" style={paragraph}>
                {" "}
                Classroom, hands-on training session including concept training
                with case studies, real-time examples, hands-on
                session&amp;module-based learning.
              </p>
              <br />
            </div>
            {/*Second column  */}

            <div
              className="col-lg-3 col-md-12 col-sm-12 col-xs-12  pull-right"
              style={{ marginLeft: "auto" }}
            >
              <div className="col-lg-12">
                <H4 className="text-center">
                  Upload Your Resume we will get back to you
                </H4>
              </div>

              {/*   ------- form start--------- */}

              <div
                className="container-fluid pull-right"
                style={{
                  padding: "40px",
                  // boxShadow:
                  //   " 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
                }}
              >
                <form
                  id="careerForm"
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal fv-form fv-form-bootstrap"
                  noValidate="novalidate"
                >
                  <button
                    type="submit"
                    class="fv-hidden-submit"
                    style={{ display: "none", width: "0px", height: "0px" }}
                  ></button>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="cf_name"
                      className="form-control"
                      placeholder="Your Name"
                      data-fv-field="name"
                      style={inputStyle}
                    />
                    <small
                      className="help-block"
                      data-fv-validator="notEmpty"
                      data-fv-for="name"
                      data-fv-result="NOT_VALIDATED"
                      style={{ display: "none" }}
                    >
                      Please enter your name
                    </small>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      maxLength="13"
                      id="cf_phone_number"
                      className="form-control"
                      placeholder="Your Contact Number"
                      style={inputStyle}
                    />
                    <small
                      className="help-block"
                      data-fv-validator="notEmpty"
                      data-fv-for="phone_number"
                      data-fv-result="NOT_VALIDATED"
                      style={{ display: "none" }}
                    >
                      The phone number is required
                    </small>
                    <small
                      className="help-block"
                      data-fv-validator="regexp"
                      data-fv-for="phone_number"
                      data-fv-result="NOT_VALIDATED"
                      style={{ display: "none" }}
                    >
                      The phone number can only contain the digits, spaces, -,
                    </small>
                    <small
                      className="help-block"
                      data-fv-validator="stringLength"
                      data-fv-for="phone_number"
                      data-fv-result="NOT_VALIDATED"
                      style={{ display: "none" }}
                    >
                      Please enter a value with valid length
                    </small>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="cf_email"
                      className="form-control"
                      placeholder="Your Email"
                      style={inputStyle}
                    />
                    <small className="help-block" style={{ display: "none" }}>
                      Please enter Email
                    </small>
                    <small className="help-block" style={{ display: "none" }}>
                      Invalid Email Address
                    </small>
                    <small className="help-block">
                      Please enter a valid email address
                    </small>
                  </div>
                  <div class="form-group">
                    <input
                      type="file"
                      name="file1"
                      id="cf_file"
                      className="form-control"
                      style={inputStyle}
                    />
                    {/*  <!--onchange="ValidateSingleInput(this);"--> */}
                    <small className="help-block">Please select an file</small>
                    <small className="help-block" style={{ display: "none" }}>
                      The selected file is not valid
                    </small>
                  </div>
                  <div class="form-group">
                    <div className="contact-textarea  mt-md">
                      {/*    <!--<input type="hidden" class="submitBtn" name="submit" value="submit"/>--> */}
                      <h1 style={{ display: "inline-block" }}>
                        <span style={{ fontWeight: "bolder" }} id="fNum">
                          0
                        </span>
                        <span>*</span>
                        <span style={{ fontWeight: "bolder" }} id="sNum">
                          3
                        </span>
                        <span style={{ paddingLeft: "15px" }}>=</span>
                      </h1>
                      <input
                        type="text"
                        name="calc_result"
                        className="form-control"
                        placeholder="?"
                        id="cf_mul"
                        style={{
                          border: "none",
                          marginTop: "0px",
                          width: "100px",
                          display: "inline-block",
                          fontWeight: "bolder",
                          fontSize: "30px",
                        }}
                      />
                      <button
                        type="submit"
                        className="btn btn-default my-btn text-center pull-right submitBtn"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                    <small className="help-block" style={{ display: "none" }}>
                      Value not found
                    </small>
                    <small className="help-block">
                      {" "}
                      Can only contain the digit
                    </small>
                  </div>
                  <div id="form-messages"></div>
                  <input type="hidden" name="fNum" id="hiddenFNum" />
                  <input type="hidden" name="sNum" id="hiddenSNum" />
                </form>
              </div>

              {/*----------- form End ------*/}
            </div>

            {/*-----*/}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default radium(Career);
