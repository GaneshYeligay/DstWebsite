import React, { Component } from "react";
import radium from "radium";
import { H4 } from "../common";
import "./Technical-finishing-school.css";
import Data from "../dataset/TechnicalFinishingSchool";
// import { Link } from "react-router-dom";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import tSchool from "../dist/img/afterCorrection/techn-trs.jpg";
import axios from "axios";
import domains from "../config/domains.json";
import background2 from "../dist/img/academic/background2.png";
import teach from "../dist/img/afterCorrection/teach123.png";
import tfspdf from "../dataset/Tfschoolpdf.pdf";

class SDP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fields: {},
      errors: {},
      datas: [],
      submitBtn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.setState({ submitBtn: true });
      const finishingSchoolData = {
        name: this.state.fields["name"],
        email: this.state.fields["email"],
        phone: this.state.fields["phone"],
        college: this.state.fields["college"],
        state: this.state.fields["state"],
      };
      console.log("values in", finishingSchoolData);
      axios
        .post(domains.path + "/finishingSchool", finishingSchoolData)
        .then(function (response) {
          console.log("data return from finishingSchool ", response);
          if (response.status === 200) {
            alert("form submitted successfully");

            window.location.reload(false);
          } else {
            alert("form not submitted");
            window.location.reload(false);
          }
        })
        .catch(function (error) {
          console.log("error occured", error);
        });
    } else {
      alert("form not submitted");
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["name"] = "Name can contain only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regex.test(fields["phone"])) {
      console.log("number is valid");
    } else {
      formIsValid = false;
      errors["phone"] = "Enter valid number";
    }

    if (!fields["college"]) {
      formIsValid = false;
      errors["college"] = "College Name cannot be empty";
    }

    if (typeof fields["college"] !== "undefined") {
      if (!fields["college"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["college"] = "College Name can contain only letters";
      }
    }

    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "State cannot be empty";
    }

    if (typeof fields["state"] !== "undefined") {
      if (!fields["state"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["state"] = "State can contain only letters";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
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
    const {
      pageBreak,
      pageHeading,
      pageHeadingBody,
      pageHeadingTitle,
      pageHeadingSubTitle,
    } = styles;

    return (
      <React.Fragment>
        <section>
          <div className="ContainerTechnical tschoolBannerImage">
            <img
              className="TechnicalBackgroundImage"
              src={background2}
              alt="background"
            ></img>
            <div className="TechnicalBannerDataPosition">
              <h2>Technical Finishing School</h2>

              <p>
                Keep moving in the direction of your dreams. No matter how slow
                it may seem, stay focused, you will be accomplishing it. DST
                trains the students to enlighten their technical skills,
                industry practices and collaborating with expert engineers.
              </p>
              <div className="LearnMoreLinkPDF " /* style={{float: "left"}} */>
              {/* <Link to={tfspdf} target="_blank">
                Click here for more details
              </Link> */}
               <a href = {tfspdf} target = "_blank" rel="noopener noreferrer"> Click here for more details</a>
              <i
                className="fa fa-arrow-right"
                aria-hidden="true"
                style={{ color: "blue" }}
              ></i>
            </div>
              <div
                className="LearnMoreLink "
                onClick={(e) => {
                  window.scrollTo({
                    top: 771,
                    behavior: "smooth",
                  });
                }}
              >
                Learn More{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="TechnicalImagePosition banner-item-home-img">
              <img src={teach} alt="team"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="ImageDisplayTfschool">
            <div className="arrowImagePositionTfschool">
              <img src={crossImage} alt="crossImage"></img>
            </div>
            <div className="dataPresentTfschool">
              <h2>Technical Finishing School </h2>
              <p>
                Keep moving in the direction of your dreams. No matter how slow
                it may seem, stay focused, you will be accomplishing it. DST
                trains the students to enlighten their technical skills,
                industry practices and collaborating with expert engineers.
              </p>
            </div>
            <div className="TechnicalFSchoolImage banner-item-home-img">
              <img src={tSchool} alt="Embedded" style={{ width: "86%" }}></img>
            </div>
          </div>
        </section>
        <div className="pageBreak" style={pageBreak}></div>
        <section>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>We care, We Share, For the Future we prepare</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid page-body">
            <div
              className="techinicalcontainerColSpace container sdp-body"
              style={sdpBody}
            >
              <div className="row two-column-body mt-0">
                {/*First column  */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p className="text-justify" style={pageHeadingSubTitle}>
                    About 80 Hours of classroom training based on Industry
                    Standard Curriculum, and get a Job in Top Core Companies
                    with a salary of INR 3.38 Lacs.{" "}
                  </p>

                  <br />
                  <h4
                    className="lowerh"
                    style={{ fontWeight: "normal", fontFamily: "Roboto" }}
                  >
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
                    2018 Engineering Graduates from circuit batches who are
                    looking for a Job in Core Companies.
                  </p>
                  <br />

                  <h3>Intensive Training</h3>
                  <p className="text-justify" style={paragraph}>
                    {" "}
                    Classroom, hands-on training session including concept
                    training with case studies, real-time examples, hands-on
                    session&amp;module-based learning.
                  </p>
                  <br />
                </div>
                {/*Second column  */}

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pull-right">
                  <div className="col-12">
                    <H4 className="text-center">Application Form</H4>
                  </div>
                  <form className="fv-form fv-form-bootstrap mt-5">
                    <div className="col-md-12 text-center">
                      <div className="form-group">
                        <input
                          style={inputStyle}
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          ref="name"
                          size="30"
                          onChange={this.handleChange.bind(this, "name")}
                          value={this.state.fields["name"]}
                        />{" "}
                        <span style={{ color: "red" }}>
                          {this.state.errors["name"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="name"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter your name
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          style={inputStyle}
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          ref="email"
                          size="30"
                          onChange={this.handleChange.bind(this, "email")}
                          value={this.state.fields["email"]}
                        />{" "}
                        <span style={{ color: "red" }}>
                          {this.state.errors["email"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="email"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter email id
                        </small>
                        <small
                          className="help-block"
                          data-fv-validator="regexp"
                          data-fv-for="email"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Invalid Email Address
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          style={inputStyle}
                          className="form-control"
                          placeholder="Contact number"
                          ref="phone"
                          size="30"
                          onChange={this.handleChange.bind(this, "phone")}
                          value={this.state.fields["phone"]}
                        />{" "}
                        <span style={{ color: "red" }}>
                          {this.state.errors["phone"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="phone"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter phone number
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="college"
                          id="college"
                          className="form-control"
                          style={inputStyle}
                          placeholder="College name"
                          ref="college"
                          size="30"
                          onChange={this.handleChange.bind(this, "college")}
                          value={this.state.fields["college"]}
                        />{" "}
                        <span style={{ color: "red" }}>
                          {this.state.errors["college"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="college"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter College Name
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          className="form-control"
                          placeholder="State"
                          style={inputStyle}
                          ref="state"
                          size="30"
                          onChange={this.handleChange.bind(this, "state")}
                          value={this.state.fields["state"]}
                        />{" "}
                        <span style={{ color: "red" }}>
                          {this.state.errors["state"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="state"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please enter State
                        </small>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={this.handleSubmit}
                        disabled={this.state.submitBtn}
                      ></input>
                    </div>
                  </form>
                </div>

                {/*-----*/}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default radium(SDP);
let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "500px",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      paddingRight: "30px",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "82%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "2.7rem",
    },
    "@media only screen and (width: 640px) and (height: 360px)": {
      marginTop: "-19%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },

    "@media only screen and (width: 600px) and (height: 1024px)": {
      marginTop: "1%",
    },
    "@media only screen and (width: 600px) and (height: 960px)": {
      marginTop: "1%",
    },
    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      marginTop: "-5%",
    },
    "@media screen and (device-width: 640px) and (device-height: 384px) and (orientation: landscape)": {
      marginTop: "5%",
    },
    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      marginTop: "5%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "30%",
    },
    "@media screen and (device-width: 667px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "1%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "25%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    textAlign: "justify",

    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    "@media only screen and (min-device-width : 568px) and (max-device-width : 568px) and (orientation : landscape)": {
      marginTop: "20%",
    },
    "@media screen and (min-width: 481px ) and (max-width: 767px)": {
      fontSize: "1.3rem",
      marginLeft: "-10px",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.4rem",
      marginLeft: "-4%",
      maxWidth: "85%",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      marginLeft: "0%",
      maxWidth: "95%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "-4%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "-1%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
    "@media screen and (width: 800px)": { marginTop: "4%" },
    "@media screen and (min-width:480px) and (max-width: 576px)": {
      marginTop: "50%",
    },
  },
  pageHeading: {
    "@media screen and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
  },
  pageHeadingBody: {
    "@media screen and (max-width:575px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#0576be",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
    "@media screen and (min-width: 576px) and (max-width:789px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#3c32b7",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
  },
  pageHeadingSubTitle: {
    // Small devices 480px or less then
    lineHeight: "1.6",
    fontFamily: "Roboto",
    "@media (max-width: 480px)": {
      fontSize: "14px",
      padding: "4px 5%",
      textAlign: "center",
      marginTop: "-15%",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      marginTop: "-8%",
      fontSize: "15px",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "16px",
      padding: "10px 12%",
      textAlign: "center",
      marginTop: "-8%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "17px",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "17px",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
};
